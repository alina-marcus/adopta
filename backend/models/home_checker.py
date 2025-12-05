from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from db import Base

class HomeChecker(Base):
    __tablename__ = "home_checkers"
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(50))
    last_name = Column(String(50))
    email = Column(String(100))
    phone = Column(String(30))
    is_active = Column(Boolean, default=True)

    home_checks = relationship("HomeCheck", back_populates="checker")
