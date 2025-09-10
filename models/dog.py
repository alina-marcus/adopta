from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from db import Base

class Dog(Base):
    __tablename__ = "dogs"
    id = Column(Integer, primary_key=True, autoincrement=True)
    dog_name = Column(String(100), nullable=False)
    status = Column(String(20), default="AVAILABLE")

    applications = relationship("Application", back_populates="dog")
