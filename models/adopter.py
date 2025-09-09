from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from db import Base

class Adopter(Base):
    __tablename__ = "adopters"
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    email_address = Column(String(100), nullable=False)

    applications = relationship("Application", back_populates="adopter")
