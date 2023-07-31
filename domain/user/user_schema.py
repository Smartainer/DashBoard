import datetime

from pydantic import BaseModel, validator

class UserCreate(BaseModel):
    name: str
    username: str
    password: str
    email: str

    @validator('name')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v
    
    @validator('username')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v
    
    @validator('password')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v
    
    @validator('email')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v

class User(BaseModel):
    __tablename__ = "user"

    uid: int        # 주요키
    name: str       # nullable=False
    username: str   # nullable=False
    password: str   # nullable=False
    email: str      # nullable=False
    created: datetime.datetime  # nullable=False

    class Config:
        orm_mode = True