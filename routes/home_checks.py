from flask import Blueprint, request, jsonify
from db import get_session
from models.home_check import HomeCheck
from models.home_check_verification import HomeCheckVerification

home_checks_bp = Blueprint("home_checks", __name__)

@home_checks_bp.route("/home_checks", methods=["POST"])
def create_home_check():
    data = request.json
    session = get_session()
    home_check = HomeCheck(
        application_id=data["application_id"],
        checker_id=data["checker_id"],
        control_passed=data.get("control_passed"),
        placement_recommendation=data.get("placement_recommendation"),
        recommendation_reason=data.get("recommendation_reason")
    )
    session.add(home_check)
    session.commit()
    return jsonify({"message": "Home check created", "id": home_check.id}), 201

@home_checks_bp.route("/home_checks/<int:check_id>/verifications", methods=["POST"])
def add_verification(check_id):
    data = request.json
    session = get_session()
    verification = HomeCheckVerification(
        home_check_id=check_id,
        field_name=data["field_name"],
        adopter_value=data.get("adopter_value"),
        verified_value=data.get("verified_value"),
        verification_status=data["verification_status"],  # TRUE / FALSE / NOT_CHECKED
        notes=data.get("notes")
    )
    session.add(verification)
    session.commit()
    return jsonify({"message": "Verification added", "id": verification.id}), 201

@home_checks_bp.route("/home_checks/<int:check_id>", methods=["GET"])
def get_home_check(check_id):
    session = get_session()
    home_check = session.get(HomeCheck, check_id)
    if not home_check:
        return jsonify({"error": "Not found"}), 404
    return jsonify({
        "id": home_check.id,
        "application_id": home_check.application_id,
        "checker_id": home_check.checker_id,
        "control_passed": home_check.control_passed,
        "placement_recommendation": home_check.placement_recommendation,
        "verifications": [
            {
                "id": v.id,
                "field_name": v.field_name,
                "adopter_value": v.adopter_value,
                "verified_value": v.verified_value,
                "status": v.verification_status,
                "notes": v.notes
            } for v in home_check.verifications
        ]
    })
