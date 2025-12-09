from flask import Blueprint, request, jsonify
from db import get_session
from models.adopter import Adopter

adopters_bp = Blueprint("adopters", __name__, url_prefix="/api/adopters")

@adopters_bp.route("/adopters", methods=["POST"])
def create_adopter():
    data = request.json
    session = get_session()
    adopter = Adopter(
        first_name=data["first_name"],
        last_name=data["last_name"],
        email_address=data["email_address"]
    )
    session.add(adopter)
    session.commit()
    return jsonify({"message": "Adopter created", "id": adopter.id}), 201

@adopters_bp.route("/adopters", methods=["GET"])
def list_adopters():
    session = get_session()
    adopters = session.query(Adopter).all()
    return jsonify([
        {"id": a.id, "first_name": a.first_name, "last_name": a.last_name, "email": a.email_address}
        for a in adopters
    ])
