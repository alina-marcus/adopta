from flask import Blueprint, request, jsonify
from db import get_session
from models.application import Application

applications_bp = Blueprint("applications", __name__)

@applications_bp.route("/applications", methods=["POST"])
def create_application():
    session = get_session()
    data = request.get_json()

    application = Application(
        dog_id=data.get("dog_id"),
        status="PENDING",
        data=data
    )

    session.add(application)
    session.commit()

    return jsonify({
        "message": "Application created",
        "id": application.id
    }), 201
