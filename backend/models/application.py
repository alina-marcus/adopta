from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    JSON,
    Text,
    Date,
    ForeignKey,
)

from sqlalchemy.orm import relationship
from db import Base

class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True)
    dog_id = Column(Integer, nullable=False)
    status = Column(String, default="PENDING")
    data = Column(JSON, nullable=False)

    # Beziehungen
    # adopter = relationship("Adopter", back_populates="applications")
    dog = relationship("Dog", back_populates="applications")
    home_checks = relationship(
        "HomeCheck",
        back_populates="application",
        cascade="all, delete-orphan"
    )