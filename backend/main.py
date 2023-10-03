from fastapi import FastAPI, Request, APIRouter
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse
from starlette.staticfiles import StaticFiles
from starlette.routing import Router
from fastapi.exception_handlers import http_exception_handler
from starlette.exceptions import HTTPException as StarletteHTTPException

from domain.container import container_router
from domain.user import user_router
app = FastAPI()

origins = [
    "http://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def hello():
    return {"message": "Hello, FastAPI!"}

app.include_router(container_router.router)
app.include_router(user_router.router)
app.mount("/", StaticFiles(directory="static/", html=True), name="static")

@app.exception_handler(StarletteHTTPException)
async def _spa_server(req: Request, exc: StarletteHTTPException):
    if exc.status_code == 404:
        return FileResponse('static/index.html', media_type='text/html')
    else:
        return await http_exception_handler(req, exc)