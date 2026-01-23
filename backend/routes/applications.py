from flask import Blueprint, request, jsonify
from sqlalchemy.exc import IntegrityError
from db import get_session
from models.application import Application

applications_bp = Blueprint("applications", __name__)

@applications_bp.route("/applications", methods=["POST"])
def create_application():
    session = get_session()
    data = request.get_json() or {}

    dog_id = data.get("dog_id")
    if dog_id is None or str(dog_id).strip() == "":
        return jsonify({"error": "dog_id is required"}), 400

    try:
        application = Application(
            dog_id=int(dog_id),
            status="PENDING",
            data=data
        )
        session.add(application)
        session.commit()

        return jsonify({"message": "Application created", "id": application.id}), 201

    except IntegrityError as e:
        session.rollback()
        return jsonify({"error": "DB error", "details": str(e)}), 400
    except Exception as e:
        session.rollback()
        return jsonify({"error": "Server error", "details": str(e)}), 500
