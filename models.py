from app import db

class Dog(db.Model):
    __tablename__ = "dogs"

    dog_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    dog_name = db.Column(db.String(100), nullable=False)
    dog_chip_number = db.Column(db.String(50), unique=True)
    dog_passport_number = db.Column(db.String(50), unique=True)
    dog_gender = db.Column(db.Enum('Male', 'Female'), nullable=False)
    dog_birth_date = db.Column(db.Date)
    dog_height_cm = db.Column(db.Integer)
    dog_weight_kg = db.Column(db.Integer)
    dog_color = db.Column(db.Text)
    dog_unique_features = db.Column(db.Text)

    dog_has_illnesses = db.Column(db.Boolean, default=False)
    dog_illness_description = db.Column(db.Text)
    dog_treatment_costs_covered = db.Column(db.Boolean, default=False)

    dog_has_characteristics = db.Column(db.Boolean, default=False)
    dog_characteristics_description = db.Column(db.Text)

    dog_neutered = db.Column(db.Boolean, default=False)
    dog_vaccinated = db.Column(db.Boolean, default=False)

    dog_can_climb_stairs = db.Column(db.Boolean, default=True)
    dog_needs_elevator = db.Column(db.Boolean, default=False)
    dog_has_handicap = db.Column(db.Boolean, default=False)
    dog_is_blind = db.Column(db.Boolean, default=False)
    dog_is_deaf = db.Column(db.Boolean, default=False)

    dog_is_house_trained = db.Column(db.Boolean, default=False)
    dog_can_be_alone_hours = db.Column(db.Integer)

    dog_is_good_with_kids = db.Column(db.Boolean, default=False)
    dog_is_good_with_males = db.Column(db.Boolean, default=False)
    dog_is_good_with_females = db.Column(db.Boolean, default=False)
    dog_is_good_with_cats = db.Column(db.Boolean, default=False)
    dog_is_good_with_other_animals = db.Column(db.Boolean, default=False)

    dog_needs_garden = db.Column(db.Boolean, default=False)
    dog_needs_fence = db.Column(db.Boolean, default=False)
    dog_needs_experienced_owner = db.Column(db.Boolean, default=False)

    dog_barks_much = db.Column(db.Boolean, default=False)
    dog_guarding_instinct = db.Column(db.Boolean, default=False)
    dog_hunting_instinct = db.Column(db.Boolean, default=False)
    dog_can_live_in_city = db.Column(db.Boolean, default=True)
    dog_transport_tolerant = db.Column(db.Boolean, default=True)

    dog_energy_level = db.Column(db.Enum('Low', 'Medium', 'High'), default='Medium')
    dog_training_needed = db.Column(db.Boolean, default=True)
    dog_additional_notes = db.Column(db.Text)

    dog_available_for_adoption = db.Column(db.Boolean, default=True)
    dog_available_as_foster = db.Column(db.Boolean, default=False)
    dog_looking_for_sponsorship = db.Column(db.Boolean, default=False)

    shelter_org_name = db.Column(db.String(100))
    case_manager_name = db.Column(db.String(100))
    case_manager_email = db.Column(db.String(100))

    dog_current_country = db.Column(db.String(50))
    dog_current_location_type = db.Column(
        db.Enum('Shelter', 'Kill Shelter', 'Foster Home', 'Adopted', 'Other')
    )
    dog_current_location_description = db.Column(db.Text)

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    def __repr__(self):
        return f"<Dog {self.dog_name}>"
