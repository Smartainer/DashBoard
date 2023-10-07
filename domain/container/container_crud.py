from datetime import datetime

from sqlalchemy.orm import Session
from sqlalchemy import text

from domain.container.container_schema import ContainerCreate, ContainerUpdate, Container
from models import Container as DB_Container
from models import Vibration, Humidity_Temperature, Slope


def get_container_list(db: Session, skip: int = 0, limit: int = 20, company: str = ''):
    print(db.query(DB_Container))
    container_list = db.query(DB_Container)
    print("container_list")
    print(container_list)
    total = container_list.distinct().count()
    container_list = container_list.order_by(DB_Container.create_date.desc()) \
        .distinct().all()
    
    return total, container_list  # (전체 건수, 페이징 적용된 질문 목록)


def get_container(db: Session, container_id: int):
    container = db.query(DB_Container).filter(DB_Container.id == container_id).first()
    return container


def create_container(db: Session, container_create: ContainerCreate):
    db_container = DB_Container(name=container_create.name,
                            cold=container_create.cold,
                           temperature=container_create.temperature,
                           slope=container_create.slope,
                           humidity=container_create.humidity,
                           vibration=container_create.vibration,
                           port=container_create.port,
                           wharf=container_create.wharf,
                           create_date=datetime.now(),
                           modify_date=datetime.now()
                           # 회사마다 다르게 관리하는 경우 여기에 company 추가
                           )
    db.add(db_container)
    db.commit()

def container_lastIdx(db: Session):
    query = text("SELECT * FROM sqlite_sequence")
    result  = db.execute(query).first()
    last_idx = result[1]
    return last_idx

def update_container(db: Session, db_container: Container,
                    container_update: ContainerUpdate):
    db_container.name = container_update.namename
    db_container.cold = container_update.cold
    db_container.temperature = container_update.temperature
    db_container.slope = container_update.slope
    db_container.humidity = container_update.humidity
    db_container.vibration = container_update.vibration
    db_container.port = container_update.port
    db_container.wharf = container_update.wharf
    db_container.modify_date = datetime.now()
    db.add(db_container)
    db.commit()

def container_vibration(db: Session, container_id: int):
    now = datetime.now()
    db_vibration = Vibration(cid=container_id,
                        vibration=True,
                        create_date=now,
                        )
    db.add(db_vibration)
    
    container = db.query(DB_Container).filter(DB_Container.id==container_id).first()
    container.vibration = True
    container.modify_date = now
    db.add(container)

    db.commit()

def container_slope(db: Session, container_id: int, slopex: float, slopey: float, slopez: float):
    now = datetime.now()
    db_slope = Slope(cid=container_id,
                        slopex=slopex,
                        slopey=slopey,
                        slopez=slopez,
                        create_date=now,
                        )
    db.add(db_slope)

    container = db.query(DB_Container).filter(DB_Container.id==container_id).first()
    container.slopex = slopex
    container.slopey = slopey
    container.slopez = slopez
    container.modify_date = now
    db.add(container)

    db.commit()

def container_humidity_temperature(db: Session, container_id: int, temperature: float, humidity: int):
    now = datetime.now()
    db_humidity_temperature = Humidity_Temperature(cid=container_id,
                        temperature=temperature,
                        humidity=humidity,
                        create_date=now,
                        )
    db.add(db_humidity_temperature)

    container = db.query(DB_Container).filter(DB_Container.id==container_id).first()
    container.temperature = temperature
    container.humidity = humidity
    container.modify_date = now
    db.add(container)

    db.commit()

def delete_container(db: Session, db_container: DB_Container):
    delete_container = db.query(DB_Container).filter_by(id=db_container.id).first()
    db.delete(delete_container)
    db.commit()
