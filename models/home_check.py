from sqlalchemy import Column, Integer, String, ForeignKey, Date, Boolean
from sqlalchemy.orm import relationship
from db import Base

class HomeCheck(Base):
    __tablename__ = "home_checks"
    id = Column(Integer, primary_key=True, autoincrement=True)
    application_id = Column(Integer, ForeignKey("applications.id"))
    checker_id = Column(Integer, ForeignKey("home_checkers.id"))
    check_date = Column(Date)
    control_passed = Column(Boolean)
    placement_recommendation = Column(String(100))
    recommendation_reason = Column(String(255))

    application = relationship("Application", back_populates="home_checks")
    checker = relationship("HomeChecker", back_populates="home_checks")
    verifications = relationship("HomeCheckVerification", back_populates="home_check")
