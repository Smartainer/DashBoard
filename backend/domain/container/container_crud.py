from datetime import datetime

from sqlalchemy.orm import Session
from sqlalchemy import text

from domain.container.container_schema import ContainerCreate, ContainerUpdate, Container
from models import Container as DB_Container


def get_container_list(db: Session, skip: int = 0, limit: int = 20, company: str = ''):
    container_list = db.query(DB_Container)
    '''
    # 회사에 따라 다르게 컨테이너를 관리하는 경우
    if company:
        search = '%%{}%%'.format(company)
        sub_query = db.query(Answer.container_id, Answer.content, User.username) \
            .outerjoin(User, Answer.user_id == User.id).subquery()
        container_list = container_list \
            .outerjoin(User) \
            .outerjoin(sub_query, sub_query.c.container_id == Container.id) \
            .filter(Container.subject.ilike(search) |   # 질문제목
                    Container.content.ilike(search) |   # 질문내용
                    User.username.ilike(search) |       # 질문작성자
                    sub_query.c.content.ilike(search) | # 답변내용
                    sub_query.c.username.ilike(search)  # 답변작성자
                    )
    '''
    total = container_list.distinct().count()
    container_list = container_list.order_by(DB_Container.create_date.desc()) \
        .distinct().all()
    
    return total, container_list  # (전체 건수, 페이징 적용된 질문 목록)


def get_container(db: Session, container_id: int):
    container = db.query(DB_Container).get(container_id)
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


def delete_container(db: Session, db_container: DB_Container):
    delete_container  = db.query(DB_Container).filter_by(id=db_container.id).first()
    db.delete(delete_container)
    db.commit()
