from flask import Blueprint, jsonify, request
from app import db
from adopta.models.dog import Dog

dogs_bp = Blueprint("dogs", __name__)

@dogs_bp.route("/", methods=["GET"])
def get_dogs():
    dogs = Dog.query.all()
    return jsonify([{
        "dog_id": d.dog_id,
        "dog_name": d.dog_name,
        "dog_gender": d.dog_gender,
        "dog_available_for_adoption": d.dog_available_for_adoption
    } for d in dogs])

@dogs_bp.route("/", methods=["POST"])
def add_dog():
    data = request.json
    dog = Dog(
        dog_name=data["dog_name"],
        dog_gender=data["dog_gender"],
        dog_available_for_adoption=data.get("dog_available_for_adoption", True)
    )
    db.session.add(dog)
    db.session.commit()
    return jsonify({"message": "Dog added", "dog_id": dog.dog_id})
