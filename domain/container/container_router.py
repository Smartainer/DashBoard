from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status

from database import get_db
from domain.container import container_schema, container_crud
# 지워도 됨.
from models import Container
router = APIRouter(
    prefix="/api/container",
)

# 연결 잘됐는지 확인하는 함수
@router.get("/")
def base(db: Session = Depends(get_db)):
    return db.query(Container).all()
    
@router.get("/list", response_model=container_schema.ContainerList)
def container_list(db: Session = Depends(get_db),
                   page: int = 0, size: int = 20):
    total, _container_list = container_crud.get_container_list(
        db, skip=page * size, limit=size)

    return {
        'total': total,
        'container_list': _container_list
    }

@router.get("/detail/{container_id}", response_model=container_schema.Container)
def container_detail(container_id: int, db: Session = Depends(get_db)):
    container = container_crud.get_container(db, container_id)
    return container

@router.post("/create")
def container_create(_container_create: container_schema.ContainerCreate,
                    db: Session = Depends(get_db)):
    container_crud.create_container(db=db, container_create=_container_create)
    return "success"

@router.get("/lastIndex")
def container_lastIdx(db: Session = Depends(get_db)):
    last_idx = container_crud.container_lastIdx(db=db)
    return {"last_inserted_id": last_idx}

@router.get("/iot1")
def container_vibration(cid: int, db: Session = Depends(get_db)):
    container_crud.container_vibration(db, cid)
    return "success"

@router.get("/iot2")
def container_vibration(cid: int, temp: float, hum: int, db: Session = Depends(get_db)):
    container_crud.container_humidity_temperature(db, cid, temp, hum)
    return "success"

@router.get("/iot3")
def container_slope(cid: int, x: float, y: float, z: float, db: Session = Depends(get_db)):
    container_crud.container_slope(db, cid, x, y, z)
    return "success"
    
@router.delete("/delete/{container_id}", status_code=status.HTTP_204_NO_CONTENT)
def container_delete(container_id: int, db: Session = Depends(get_db)):
    _container_delete = container_crud.get_container(db, container_id)
    print(type(_container_delete))
    container_crud.delete_container(db=db, db_container=_container_delete)
    return "success"
