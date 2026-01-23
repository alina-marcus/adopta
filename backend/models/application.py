from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    JSON,
    Text,
    Date,
    DateTime,
    ForeignKey,
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from db import Base


class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True)

    # --- CORE ---
    dog_id = Column(Integer, ForeignKey("dogs.id"), nullable=False)
    status = Column(String, default="PENDING", nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    # --- STEP 1: Persönliche Daten ---
    first_name = Column(String)
    last_name = Column(String)
    email_address = Column(String)
    phone_number = Column(String)
    gender = Column(String)
    birth_date = Column(String)  # bleibt String, weil du aktuell "" schicken kannst
    profession = Column(String)
    working_hours_per_week = Column(String)
    hours_outside_per_day = Column(String)
    monthly_income_euro = Column(String)

    has_partner = Column(Boolean, default=False)
    partner_profession = Column(String)
    partner_monthly_income = Column(String)
    partner_working_hours_per_week = Column(String)
    partner_hours_outside_per_day = Column(String)

    has_car = Column(Boolean, default=False)
    best_time_for_call = Column(String)

    # --- STEP 2: Wohnsituation ---
    country = Column(String)
    street = Column(String)
    house_number = Column(String)
    zip_code = Column(String)
    city = Column(String)
    location = Column(String)
    traffic_situation = Column(String)
    housing_type = Column(String)
    housing_size_m2 = Column(String)

    apartment_floor = Column(String)
    has_elevator = Column(Boolean, default=False)

    house_stories = Column(String)
    steep_staircase = Column(Boolean, default=False)

    private_garden = Column(Boolean, default=False)
    garden_size_m2 = Column(String)

    owned_or_rented = Column(String)
    pet_permission_if_rented = Column(String)
    pet_permission_if_owned = Column(String)

    planning_to_move = Column(Boolean, default=False)

    # --- STEP 3: Haushalt & Kinder ---
    household_people_count = Column(String)
    children_count = Column(String)
    fur_allergy_tested = Column(Boolean, default=False)

    # --- STEP 4: Tiererfahrung ---
    pets_in_household = Column(String)  # Gesamtzahl
    pet_type = Column(String)           # legacy/optional
    pet_sex = Column(String)
    pet_castrated = Column(Boolean, default=False)
    pet_age = Column(String)
    pet_weight_kg = Column(String)
    pet_compatibility = Column(String)

    previous_dog_experience = Column(Boolean, default=False)
    previous_dog_breed = Column(String)
    previous_dog_years = Column(String)
    previous_dog_outcome = Column(Text)

    been_to_dog_trainer = Column(Boolean, default=False)
    dog_trainer_name = Column(String)

    adopted_from_shelter = Column(Boolean, default=False)
    shelter_experience_description = Column(Text)

    # --- STEP 5: Vorstellungen ---
    decided_for_specific_dog = Column(Boolean, default=True)
    future_dog_sex = Column(String)
    future_dog_age = Column(String)
    future_dog_max_weight = Column(String)
    future_dog_max_height = Column(String)
    dog_handicap_ok = Column(Boolean, default=False)
    dog_compatibility = Column(String)
    potty_trained = Column(Boolean, default=False)
    dog_purpose = Column(String)
    future_dog_location = Column(String)
    dog_sleep_location = Column(String)
    dog_restricted_areas = Column(Text)

    # --- STEP 6: Verantwortung ---
    owner_time_per_day_with_dog = Column(String)
    dog_hours_alone_per_day = Column(String)
    food_type = Column(String)

    good_dog_training_description = Column(Text)
    potty_training_method = Column(Text)
    typical_day_description = Column(Text)
    settling_dog_description = Column(Text)
    dog_backup_plan = Column(Text)
    giving_up_reasons = Column(Text)
    dog_alone_problem_solution = Column(Text)
    dog_barking_solution = Column(Text)
    dog_damage_solution = Column(Text)

    annual_vet_costs_euro = Column(String)
    other_costs_euro = Column(String)
    nearest_dog_park = Column(String)
    time_off_after_adoption = Column(String)
    willing_to_drive_km = Column(String)
    additional_info = Column(Text)

    # --- DYNAMISCH (JSON) ---
    # Kinderalter-Liste, pet_counts, cats_in_household[], dogs_in_household[], und alles sonstige
    data = Column(JSON, nullable=False, default=dict)

    # RELATIONSHIPS
    dog = relationship("Dog", back_populates="applications")
    home_checks = relationship(
        "HomeCheck",
        back_populates="application",
        cascade="all, delete-orphan"
    )