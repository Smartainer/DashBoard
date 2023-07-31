from datetime import datetime

from sqlalchemy.orm import Session

from domain.container.container_schema import ContainerCreate
from models import Container

# 컨테이너 생성
def create_container(db: Session, container: Container, container_create: ContainerCreate):
    db_container = Container(container=container,
                       content=container_create.content,
                       create_date=datetime.now())
    db.add(db_container)
    db.commit()

# 컨테이너 정보 조회 => 아직 덜함.
def inquiry_container(db: Session, container: Container, container_create: ContainerCreate):
    db_container = Container(container=container,
                       content=container_create.content,
                       create_date=datetime.now())
    db.add(db_container)
    db.commit()