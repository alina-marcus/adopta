from sqlalchemy import Column, Integer, String, Boolean, Text, Enum, Date
from sqlalchemy.orm import relationship
from db import Base
import enum

class GenderEnum(enum.Enum):
    Male = "Male"
    Female = "Female"

class EnergyLevelEnum(enum.Enum):
    Low = "Low"
    Medium = "Medium"
    High = "High"

class LocationTypeEnum(enum.Enum):
    Shelter = "Shelter"
    KillShelter = "Kill Shelter"
    FosterHome = "Foster Home"
    Adopted = "Adopted"
    Other = "Other"

class Dog(Base):
    __tablename__ = "dogs"

    id = Column(Integer, primary_key=True, autoincrement=True)
    dog_name = Column(String(100), nullable=False)
    chip_number = Column(String(50), unique=True, nullable=True)
    passport_number = Column(String(50), unique=True, nullable=True)
    gender = Column(Enum(GenderEnum), nullable=False)
    birth_date = Column(Date, nullable=False)
    height_cm = Column(Integer, nullable=True)
    weight_kg = Column(Integer, nullable=True)
    color = Column(Text, nullable=True)
    unique_features = Column(Text, nullable=True)
    has_illnesses = Column(Boolean, default=False)
    illness_description = Column(Text, nullable=True)
    treatment_costs_covered = Column(Boolean, default=False)
    has_characteristics = Column(Boolean, default=False)
    characteristics_description = Column(Text, nullable=True)
    neutered = Column(Boolean, default=False)
    vaccinated = Column(Boolean, default=False)
    can_climb_stairs = Column(Boolean, default=True)
    needs_elevator = Column(Boolean, default=False)
    has_handicap = Column(Boolean, default=False)
    is_blind = Column(Boolean, default=False)
    is_deaf = Column(Boolean, default=False)
    is_senior = Column(Boolean, default=False)
    is_puppy = Column(Boolean, default=False)
    is_house_trained = Column(Boolean, default=True)
    can_be_alone_hours = Column(Integer, nullable=True)
    is_good_with_kids = Column(Boolean, default=True)
    is_good_with_males = Column(Boolean, default=True)
    is_good_with_females = Column(Boolean, default=True)
    is_good_with_cats = Column(Boolean, default=False)
    is_good_with_other_animals = Column(Boolean, default=True)
    needs_garden = Column(Boolean, default=False)
    needs_fence = Column(Boolean, default=False)
    needs_experienced_owner = Column(Boolean, default=False)
    barks_much = Column(Boolean, default=False)
    guarding_instinct = Column(Boolean, default=False)
    hunting_instinct = Column(Boolean, default=False)
    can_live_in_city = Column(Boolean, default=True)
    transport_tolerant = Column(Boolean, default=True)
    energy_level = Column(Enum(EnergyLevelEnum), default=EnergyLevelEnum.Medium)
    training_needed = Column(Boolean, default=True)
    additional_notes = Column(Text, nullable=True)
    available_for_adoption = Column(Boolean, default=True)
    available_as_foster = Column(Boolean, default=False)
    looking_for_sponsorship = Column(Boolean, default=False)
    shelter_org_name = Column(String(100), nullable=True)
    case_manager_name = Column(String(100), nullable=True)
    case_manager_email = Column(String(100), nullable=True)
    current_country = Column(String(50), nullable=True)
    current_location_type = Column(Enum(LocationTypeEnum), nullable=True)
    current_location_description = Column(Text, nullable=True)

    applications = relationship("Application", back_populates="dog")
