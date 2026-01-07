from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    Text,
    Date,
)
from sqlalchemy.orm import relationship
from db import Base


class Dog(Base):
    __tablename__ = "dogs"

    # Identifikation

    id = Column(Integer, primary_key=True, autoincrement=True)

    dog_name = Column(String(100), nullable=False)

    chip_number = Column(String(50), unique=True)
    passport_number = Column(String(50), unique=True)

    # Grunddaten

    gender = Column(String(10))  # Male / Female
    birth_date = Column(Date)

    height_cm = Column(Integer)
    weight_kg = Column(Integer)

    color = Column(Text)
    unique_features = Column(Text)

    # Gesundheit & Besonderheiten

    has_illnesses = Column(Boolean, default=False)
    illness_description = Column(Text)
    treatment_costs_covered = Column(Boolean, default=False)

    has_characteristics = Column(Boolean, default=False)
    characteristics_description = Column(Text)

    neutered = Column(Boolean, default=False)
    vaccinated = Column(Boolean, default=False)

    # Mobilität & Einschränkungen

    can_climb_stairs = Column(Boolean, default=True)
    needs_elevator = Column(Boolean, default=False)

    has_handicap = Column(Boolean, default=False)
    is_blind = Column(Boolean, default=False)
    is_deaf = Column(Boolean, default=False)

    # Verhalten & Alltag

    is_house_trained = Column(Boolean, default=False)
    can_be_alone_hours = Column(Integer)

    is_good_with_kids = Column(Boolean)
    is_good_with_males = Column(Boolean)
    is_good_with_females = Column(Boolean)
    is_good_with_cats = Column(Boolean)
    is_good_with_other_animals = Column(Boolean)

    needs_garden = Column(Boolean, default=False)
    needs_fence = Column(Boolean, default=False)
    needs_experienced_owner = Column(Boolean, default=False)

    barks_much = Column(Boolean, default=False)
    guarding_instinct = Column(Boolean, default=False)
    hunting_instinct = Column(Boolean, default=False)

    can_live_in_city = Column(Boolean, default=True)
    transport_tolerant = Column(Boolean, default=True)

    energy_level = Column(String(10))  # Low / Medium / High
    training_needed = Column(Boolean, default=False)

    additional_notes = Column(Text)

    # Vermittlungsstatus

    available_for_adoption = Column(Boolean, default=True)
    available_as_foster = Column(Boolean, default=False)
    looking_for_sponsorship = Column(Boolean, default=False)

    # Organisation & Kontakt

    shelter_org_name = Column(String(100))

    case_manager_name = Column(String(100))
    case_manager_email = Column(String(100))

    # Aktueller Aufenthaltsort

    current_country = Column(String(50))

    current_location_type = Column(
        String(20)
    )  # Shelter / Kill Shelter / Foster Home / Adopted / Other

    current_location_description = Column(Text)

    # Beziehungen

    applications = relationship(
        "Application",
        back_populates="dog",
        cascade="all, delete-orphan"
    )

    updates = relationship(
        "DogUpdate",
        back_populates="dog",
        cascade="all, delete-orphan"
    )

    # Abgeleitete Eigenschaften

    @property
    def is_senior(self):
        """
        True if dog is older than 8 years
        """
        if not self.birth_date:
            return None
        return (date.today().year - self.birth_date.year) > 8

    @property
    def is_puppy(self):
        """
        True if dog is younger than 1 year
        """
        if not self.birth_date:
            return None
        return (date.today() - self.birth_date).days < 365