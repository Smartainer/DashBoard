from sqlalchemy import Column, Integer, String, DateTime, Float, Boolean, ForeignKey

from database import Base

class Container(Base):
    __tablename__ = "container"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    cold = Column(Boolean, nullable=False)
    temperature = Column(Float, nullable=False)
    slopex = Column(Float, nullable=False)
    slopey = Column(Float, nullable=False)
    slopez = Column(Float, nullable=False)
    humidity = Column(Integer, nullable=False)
    vibration = Column(Boolean, nullable=False)
    port = Column(String, nullable=False)
    wharf = Column(String, nullable=False)
    create_date = Column(DateTime, nullable=False)
    modify_date = Column(DateTime, nullable=True)

class Humidity_Temperature(Base):
    __tablename__ = "humidity_temperature"

    id = Column(Integer, primary_key=True, autoincrement=True)
    cid = Column(Integer, ForeignKey("container.id"), nullable=False)
    temperature = Column(Float, nullable=False)
    humidity = Column(Integer, nullable=False)
    create_date = Column(DateTime, nullable=False)

class Slope(Base):
    __tablename__ = "slope"

    id = Column(Integer, primary_key=True, autoincrement=True)
    cid = Column(Integer, ForeignKey("container.id"), nullable=False)
    slopex = Column(Float, nullable=False)
    slopey = Column(Float, nullable=False)
    slopez = Column(Float, nullable=False)
    create_date = Column(DateTime, nullable=False)

class Vibration(Base):
    __tablename__ = "vibration"

    id = Column(Integer, primary_key=True, autoincrement=True)
    cid = Column(Integer, ForeignKey("container.id"), nullable=False)
    vibration = Column(Boolean, nullable=False)
    create_date = Column(DateTime, nullable=False)

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, autoincrement=True, primary_key=True)
    name = Column(String, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    create_date = Column(DateTime, nullable=False)
    administrator = Column(Boolean, nullable=False)
