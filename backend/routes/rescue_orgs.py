from flask import Blueprint, request, jsonify
from db import get_session
from models.rescue_org import RescueOrganization
from datetime import date

rescue_orgs_bp = Blueprint("rescue_orgs", __name__)

@rescue_orgs_bp.route("/rescue-organizations", methods=["POST"])
def create_rescue_organization():
    data = request.json
    session = get_session()

    rescue_org = RescueOrganization(
        org_name=data["org_name"],
        is_nonprofit=data.get("is_nonprofit", False),
        has_animal_protection_license=data.get("has_animal_protection_license", False),
        license_number=data.get("license_number"),
        licensing_authority=data.get("licensing_authority"),
        license_issued_date=date.fromisoformat(data["license_issued_date"])
        if data.get("license_issued_date")
        else None,
        contact_name=data.get("contact_name"),
        contact_email=data.get("contact_email"),
        contact_phone=data.get("contact_phone"),
        website=data.get("website"),
        country=data.get("country"),
        region=data.get("region"),
        address_line=data.get("address_line"),
        postal_code=data.get("postal_code"),
        city=data.get("city"),
        bank_info=data.get("bank_info"),
        notes=data.get("notes"),
        description=data.get("description"),
    )

    session.add(rescue_org)
    session.commit()

    return jsonify(
        {"message": "Rescue organization created", "id": rescue_org.id}
    ), 201


@rescue_orgs_bp.route("/rescue-organizations", methods=["GET"])
def list_rescue_organizations():
    session = get_session()
    orgs = session.query(RescueOrganization).all()

    return jsonify([
        {
            "id": org.id,
            "org_name": org.org_name,
            "is_nonprofit": org.is_nonprofit,
            "has_animal_protection_license": org.has_animal_protection_license,
            "contact_name": org.contact_name,
            "contact_email": org.contact_email,
            "country": org.country,
            "city": org.city,
        }
        for org in orgs
    ])

