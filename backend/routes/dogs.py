from flask import Blueprint, request, jsonify
from db import get_session
from models.dog import Dog

dogs_bp = Blueprint("dogs", __name__)

@dogs_bp.route("/dogs", methods=["POST"])
def create_dog():
    data = request.json
    session = get_session()
    dog = Dog(dog_name=data["dog_name"], status=data.get("status", "AVAILABLE"))
    session.add(dog)
    session.commit()
    return jsonify({"message": "Dog created", "id": dog.id}), 201

@dogs_bp.route("/dogs", methods=["GET"])
def list_dogs():
    session = get_session()
    dogs = session.query(Dog).all()
    return jsonify([{"id": d.id, "name": d.dog_name, "status": d.status} for d in dogs])
