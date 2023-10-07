import datetime

from pydantic import BaseModel, validator


class Container(BaseModel):
    id: int
    name: str
    cold: bool
    temperature: float
    slopex: float
    slopey: float
    slopez: float
    humidity: int
    vibration: bool
    port: str
    wharf: str
    create_date: datetime.datetime
    modify_date: datetime.datetime

    class Config:
        orm_mode = True


class ContainerCreate(BaseModel):
    name: str
    cold: bool
    temperature: float
    slopex: float
    slopey: float
    slopez: float
    humidity: int
    vibration: bool
    port: str
    wharf: str

    @validator('name', 'port', 'wharf')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v

class ContainerList(BaseModel):
    total: int = 0
    container_list: list[Container] = []


class ContainerUpdate(ContainerCreate):
    container_id: int


class ContainerDelete(BaseModel):
    container_id: int

