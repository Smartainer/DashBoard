import datetime

from pydantic import BaseModel, validator


class ContainerCreate(BaseModel):
    name: str
    cold: bool
    temperature: float
    slope: float
    humidity: float
    vibration: float
    port: str
    wharf: str

    @validator('name')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v
    
    @validator('port')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v
    
    @validator('wharf')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v


class Container(BaseModel):
    cid: int
    name: str
    cold: bool
    temperature: float
    slope: float
    humidity: float
    vibration: float
    port: str
    wharf: str
    create_date: datetime.datetime

    class Config:
        orm_mode = True

