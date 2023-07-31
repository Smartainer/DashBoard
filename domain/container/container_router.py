from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status

from database import get_db
from domain.container import container_schema, container_crud

router = APIRouter(
    prefix="/api/container",
)


@router.post("/register/{container_id}", status_code=status.HTTP_204_NO_CONTENT)
def container_create(container_id: int,
                  _container_create: container_schema.ContainerCreate,
                  db: Session = Depends(get_db)):

    # create container
    container = container_crud.get_container(db, container_id=container_id)
    if not container:
        raise HTTPException(status_code=404, detail="Container not found")
    container_crud.create_container(db, container=container,
                              container_create=container_create)