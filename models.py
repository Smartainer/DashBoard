from sqlalchemy import Column, Integer, String, Text, DateTime, Float, Boolean
               
from database import Base


class Container(Base):
    __tablename__ = "container"

    cid = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    cold = Column(Boolean, nullable=False)
    temperature = Column(Float, nullable=False)
    slope = Column(Float, nullable=False)
    humidity = Column(Float, nullable=False)
    vibration = Column(Float, nullable=False)
    port = Column(Text, nullable=False)
    wharf = Column(Text, nullable=False)