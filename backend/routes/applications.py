from flask import Blueprint, request, jsonify
from db import get_session
from models.application import Application
from models.adopter import Adopter
from models.dog import Dog

applications_bp = Blueprint("applications", __name__)

@applications_bp.route("/applications", methods=["POST"])
def create_application():
    data = request.json
    session = get_session()
    app_entry = Application(adopter_id=data["adopter_id"], dog_id=data["dog_id"], status="PENDING")
    session.add(app_entry)
    session.commit()
    return jsonify({"message": "Application created", "id": app_entry.id}), 201

@applications_bp.route("/applications", methods=["GET"])
def list_applications():
    session = get_session()
    apps = session.query(Application).all()
    return jsonify([
        {
            "id": a.id,
            "adopter": f"{a.adopter.first_name} {a.adopter.last_name}" if a.adopter else None,
            "dog": a.dog.dog_name if a.dog else None,
            "status": a.status
        }
        for a in apps
    ])
