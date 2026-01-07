from flask import Blueprint, request, jsonify
from db import get_session
from models.home_checker import HomeChecker

home_checkers_bp = Blueprint("home_checkers", __name__)

@home_checkers_bp.route("/home_checkers", methods=["POST"])
def create_checker():
    data = request.json
    session = get_session()
    checker = HomeChecker(
        first_name=data["first_name"],
        last_name=data["last_name"],
        email=data.get("email"),
        phone=data.get("phone"),
        is_active=True
    )
    session.add(checker)
    session.commit()
    return jsonify({"message": "Home checker created", "id": checker.id}), 201

@home_checkers_bp.route("/home_checkers", methods=["GET"])
def list_checkers():
    session = get_session()
    checkers = session.query(HomeChecker).all()
    return jsonify([
        {"id": c.id, "first_name": c.first_name, "last_name": c.last_name, "email": c.email}
        for c in checkers
    ])
