from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db import Base

class HomeCheckVerification(Base):
    __tablename__ = "home_check_verifications"
    id = Column(Integer, primary_key=True, autoincrement=True)
    home_check_id = Column(Integer, ForeignKey("home_checks.id"))
    field_name = Column(String(100), nullable=False)
    adopter_value = Column(String(255))
    verified_value = Column(String(255))
    verification_status = Column(String(20))  # TRUE / FALSE / NOT_CHECKED
    notes = Column(String(255))

    home_check = relationship("HomeCheck", back_populates="verifications")
