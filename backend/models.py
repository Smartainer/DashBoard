from sqlalchemy import Column, Integer, String, Text, DateTime, Float, Boolean
               
from database import Base


class Container(Base):
    __tablename__ = "container"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    cold = Column(Boolean, nullable=False)
    temperature = Column(Float, nullable=False)
    slope = Column(Float, nullable=False)
    humidity = Column(Float, nullable=False)
    vibration = Column(Float, nullable=False)
    port = Column(Text, nullable=False)
    wharf = Column(Text, nullable=False)

    create_date = Column(DateTime, nullable=False)
    modify_date = Column(DateTime, nullable=True)

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    name = Column(Integer, nullable=False)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    create_date = Column(DateTime, nullable=False)
