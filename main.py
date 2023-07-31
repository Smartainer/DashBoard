from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from domain.container import question_router
from domain.user import question_router

app = FastAPI()

# 회원가입
@app.get("/api/user/register")
def user_register():
    return {"Hello": "World"}

# 로그인
@app.get("/api/user/login")
def user_login():
    return {"Hello": "World"}

# 새로 고침
@app.get("/api/user/refresh")
def user_refresh():
    return {"Hello": "World"}

# 로그아웃
@app.get("/api/user/logout")
def user_logout():
    return {"Hello": "World"}

# 컨테이너 등록
@app.get("/api/container/register")
def container_register():
    return {"Hello": "World"}

# 컨테이너 정보 업데이트
@app.get("/api/container/update")
def container_update():
    return {"Hello": "World"}

# 현재 컨테이너 상태 조회
@app.get("/api/container/now")
def container_now():
    return {"Hello": "World"}

# 컨테이너의 온도만 조회
@app.get("/api/container/temperature")
def container_temperature():
    return {"Hello": "World"}

# 컨테이너의 기울기만 조회
@app.get("/api/container/slope")
def container_slope():
    return {"Hello": "World"}

# 컨테이너의 습도만 조회
@app.get("/api/container/humidity")
def container_humidity():
    return {"Hello": "World"}

# 컨테이너의 진동 정도만 조회
@app.get("/api/container/vibration")
def container_vibration():
    return {"Hello": "World"}

# CORS 정책에 의해 요청이 거부되는.
# 즉, 프론트엔드에서 FastAPI 백엔드 서버로 호출이 불가능한 상황의 해결을 위한 코드
# ㅇ이때 origins = {} 안에 들엉갈 주소는 호스팅되는 주소이다.
origins = [
    "http://127.0.0.1:5173",    # 또는 "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# doomain 폴더 안에서 생성한 라우터 등록 
app.include_router(question_router.router)
app.include_router(answer_router.router)