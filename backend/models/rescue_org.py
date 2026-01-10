from sqlalchemy import Column, Integer, String, Boolean, Date, Text
from sqlalchemy.orm import relationship
from db import Base


class RescueOrganization(Base):
    __tablename__ = "rescue_orgs"

    # Primärschlüssel
    id = Column(Integer, primary_key=True, autoincrement=True)

    # Basisdaten
    org_name = Column(String(150), nullable=False)
    is_nonprofit = Column(Boolean, default=False)
    has_animal_protection_license = Column(Boolean, default=False)

    # §11 TierSchG Zulassung
    license_number = Column(String(100))
    licensing_authority = Column(String(100))
    license_issued_date = Column(Date)

    # Kontaktperson
    contact_name = Column(String(100))
    contact_email = Column(String(100))
    contact_phone = Column(String(30))

    # Online-Präsenz
    website = Column(String(150))

    # Adresse
    country = Column(String(50))
    region = Column(String(50))
    address_line = Column(String(150))
    postal_code = Column(String(10))
    city = Column(String(50))

    # Zusätzliche Informationen
    bank_info = Column(Text)
    notes = Column(Text)
    description = Column(Text)

    # Beziehungen
    dogs = relationship(
        "Dog",
        back_populates="rescue_org",
        cascade="all, delete-orphan"
    )