from flask import Blueprint, request, jsonify
from db import get_session
from models.dog import Dog
from datetime import datetime
from sqlalchemy.inspection import inspect

dogs_bp = Blueprint("dogs", __name__)

@dogs_bp.route("/dogs", methods=["POST"])
def create_dog():
    data = request.json
    session = get_session()
    if "birth_date" in data and data["birth_date"]:
        data["birth_date"] = datetime.strptime(data["birth_date"], "%Y-%m-%d").date()
    dog = Dog(**data)
    session.add(dog)
    session.commit()
    return jsonify({"message": "Dog created", "id": dog.id}), 201

@dogs_bp.route("/dogs", methods=["GET"])
def list_dogs():
    session = get_session()
    dogs = session.query(Dog).all()
    return jsonify([{"id": d.id, "name": d.dog_name, "status": d.status} for d in dogs])

def to_dict(obj):
    return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

@dogs_bp.route("/dogs/<int:dog_id>", methods=["GET"])
def get_dog(dog_id):
    session = get_session()
    dog = session.query(Dog).get(dog_id)
    if not dog:
        return jsonify({"error": "Dog not found"}), 404

    dog_dict = to_dict(dog)

    return jsonify(dog_dict)