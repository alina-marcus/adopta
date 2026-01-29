from flask import Blueprint, request, jsonify
from datetime import datetime
from sqlalchemy.inspection import inspect


from db import get_session
from models.dog import Dog

dogs_bp = Blueprint("dogs", __name__)


# -------------------------
# Hilfsfunktion
# -------------------------
def to_dict(obj):
    return {
        c.key: getattr(obj, c.key)
        for c in inspect(obj).mapper.column_attrs
    }


# -------------------------
# CREATE
# -------------------------
@dogs_bp.route("/dogs", methods=["POST"])
def create_dog():
    session = get_session()
    data = request.get_json()
    # --- FIX: birth_date String -> Python date (or None) ---
    if "birth_date" in data:
        print(data.get("birth_date"))
        print(type(data.get("birth_date")))
        if data["birth_date"] in (None, "", "null"):
            data["birth_date"] = None
        else:
            # erwartet "YYYY-MM-DD"
            data["birth_date"] = datetime.strptime(data["birth_date"], "%Y-%m-%d").date()

    dog = Dog(**data)
    session.add(dog)
    session.commit()

    return jsonify({"message": "Dog created", "id": dog.id}), 201


# -------------------------
# LIST
# -------------------------
@dogs_bp.route("/dogs", methods=["GET"])
def list_dogs():
    session = get_session()
    dogs = session.query(Dog).all()

    return jsonify([
        {
            "id": d.id,
            "name": d.dog_name,
            "status": d.status,
        }
        for d in dogs
    ])


# -------------------------
# GET ONE
# -------------------------
@dogs_bp.route("/dogs/<int:dog_id>", methods=["GET"])
def get_dog(dog_id):
    session = get_session()
    dog = session.get(Dog, dog_id)

    if not dog:
        return jsonify({"error": "Dog not found"}), 404

    return jsonify(to_dict(dog))


# -------------------------
# UPDATE
# -------------------------
@dogs_bp.route("/dogs/<int:dog_id>", methods=["PUT"])
def update_dog(dog_id):
    session = get_session()
    dog = session.get(Dog, dog_id)

    if not dog:
        return jsonify({"error": "Dog not found"}), 404

    data = request.get_json()

    UPDATABLE_FIELDS = {
        "dog_name",
        "chip_number",
        "passport_number",
        "gender",
        "birth_date",
        "height_cm",
        "weight_kg",
        "color",
        "breed",
        "unique_features",
        "illness_description",
        "energy_level",
        "additional_notes",
        "case_manager_name",
        "case_manager_email",
        "current_country",
        "current_location_type",
        "current_location_description",
        "rescue_org_id",

        "has_illnesses",
        "treatment_costs_covered",
        "neutered",
        "vaccinated",
        "can_climb_stairs",
        "has_handicap",
        "is_blind",
        "is_deaf",
        "is_house_trained",
        "is_good_with_kids",
        "is_good_with_males",
        "is_good_with_females",
        "is_good_with_cats",
        "is_good_with_other_animals",
        "needs_garden",
        "needs_experienced_owner",
        "guarding_instinct",
        "hunting_instinct",
        "can_live_in_city",
        "transport_tolerant",

        "available_for_adoption",
        "available_as_foster",
        "looking_for_sponsorship",
    }

    for field in UPDATABLE_FIELDS:
        if field in data:
            if field == "birth_date":
                if data[field] in (None, "", "null"):
                    setattr(dog, field, None)
                else:
                    setattr(dog, field, datetime.strptime(data[field], "%Y-%m-%d").date())
            else:
                setattr(dog, field, data[field])


    session.commit()

    return jsonify(to_dict(dog)), 200

# -------------------------
# DELETE
# -------------------------
@dogs_bp.route("/dogs/<int:dog_id>", methods=["DELETE"])
def delete_dog(dog_id):
    session = get_session()
    dog = session.query(Dog).get(dog_id)

    if not dog:
        return jsonify({"error": "Dog not found"}), 404

    session.delete(dog)
    session.commit()

    return jsonify({"message": "Dog deleted"}), 200

