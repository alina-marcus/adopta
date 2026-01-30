from flask import Blueprint, request, jsonify
from datetime import datetime, date
from sqlalchemy.inspection import inspect

from db import get_session
from models.dog import Dog

dogs_bp = Blueprint("dogs", __name__)


# -------------------------
# Hilfsfunktion
# -------------------------
def to_dict(obj):
    out = {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

    # Date -> ISO String für JSON
    if "birth_date" in out and out["birth_date"] is not None:
        if isinstance(out["birth_date"], (datetime, date)):
            out["birth_date"] = out["birth_date"].isoformat()

    return out


def parse_birth_date(value):
    """Accepts None/''/'null', 'YYYY-MM-DD' string, or python date."""
    if value in (None, "", "null"):
        return None
    if isinstance(value, date):
        return value
    if isinstance(value, str):
        return datetime.strptime(value, "%Y-%m-%d").date()
    raise ValueError("birth_date must be a string 'YYYY-MM-DD' or null")


# -------------------------
# CREATE
# -------------------------
@dogs_bp.route("/dogs", methods=["POST"])
def create_dog():
    session = get_session()
    data = request.get_json() or {}

    try:
        if "birth_date" in data:
            data["birth_date"] = parse_birth_date(data.get("birth_date"))
    except Exception as e:
        return jsonify({"error": "Invalid birth_date", "details": str(e)}), 400

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

    return jsonify([to_dict(d) for d in dogs]), 200


# -------------------------
# GET ONE
# -------------------------
@dogs_bp.route("/dogs/<int:dog_id>", methods=["GET"])
def get_dog(dog_id):
    session = get_session()
    dog = session.get(Dog, dog_id)

    if not dog:
        return jsonify({"error": "Dog not found"}), 404

    return jsonify(to_dict(dog)), 200


# -------------------------
# UPDATE
# -------------------------
@dogs_bp.route("/dogs/<int:dog_id>", methods=["PUT"])
def update_dog(dog_id):
    session = get_session()
    dog = session.get(Dog, dog_id)

    if not dog:
        return jsonify({"error": "Dog not found"}), 404

    data = request.get_json() or {}

    UPDATABLE_FIELDS = {
        "dog_name",
        "image",
        "status",
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

    try:
        for field in UPDATABLE_FIELDS:
            if field in data:
                if field == "birth_date":
                    setattr(dog, field, parse_birth_date(data.get(field)))
                else:
                    setattr(dog, field, data.get(field))
    except Exception as e:
        return jsonify({"error": "Update failed", "details": str(e)}), 400

    session.commit()
    return jsonify(to_dict(dog)), 200


# -------------------------
# DELETE
# -------------------------
@dogs_bp.route("/dogs/<int:dog_id>", methods=["DELETE"])
def delete_dog(dog_id):
    session = get_session()
    dog = session.get(Dog, dog_id)

    if not dog:
        return jsonify({"error": "Dog not found"}), 404

    session.delete(dog)
    session.commit()

    return jsonify({"message": "Dog deleted"}), 200
