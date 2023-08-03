from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status

from database import get_db
from domain.container import container_schema, container_crud

router = APIRouter(
    prefix="/api/container",
)
    
@router.get("/list", response_model=list[container_schema.ContainerList])
def container_list(db: Session = Depends(get_db),
                   page: int = 0, size: int = 10):
    total, _container_list = container_crud.get_container_list(
        db, skip=page * size, limit=size)
    return {
        'total': total,
        'container_list': _container_list
    }

@router.get("/detail/{container_id}", response_model=container_schema.Container)
def container_detail(container_id: int, db: Session = Depends(get_db)):
    container = container_crud.get_container(db, container_id=container_id)
    return container

@router.post("/create", status_code=status.HTTP_204_NO_CONTENT)
def container_create(_container_create: container_schema.ContainerCreate,
                    db: Session = Depends(get_db)):
    container_crud.create_container(db=db, container_create=container_create)

@router.put("/update", status_code=status.HTTP_204_NO_CONTENT)
def container_update(_container_update: container_schema.ContainerUpdate,
                    db: Session = Depends(get_db)):
    db_container = container_crud.get_container(db, container_id=_container_update.container_id)
    if not db_container:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="데이터를 찾을수 없습니다.")
    '''
    if current_user.id != db_container.user.id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="수정 권한이 없습니다.")
    '''
    container_crud.update_container(db=db, db_container=db_container,
                                  _container_update=_container_update)
