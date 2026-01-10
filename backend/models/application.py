from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    Text,
    Date,
    ForeignKey,
)

from sqlalchemy.orm import relationship
from db import Base

class Application(Base):
    __tablename__ = "applications"
    id = Column(Integer, primary_key=True, autoincrement=True)
    adopter_id = Column(Integer, ForeignKey("adopters.id"))
    dog_id = Column(Integer, ForeignKey("dogs.id"))
    status = Column(String(20), default="PENDING")

    # Beziehungen
    adopter = relationship("Adopter", back_populates="applications")
    dog = relationship("Dog", back_populates="applications")
    home_checks = relationship(
        "HomeCheck",
        back_populates="application",
        cascade="all, delete-orphan"
    )