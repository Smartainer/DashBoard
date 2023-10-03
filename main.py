from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse
from starlette.staticfiles import StaticFiles

from domain.container import container_router
from domain.user import user_router

app = FastAPI()

origins = [
    "http://127.0.0.1:8000",
    "127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(container_router.router)
app.include_router(user_router.router)
app.mount("/static", StaticFiles(directory="frontend/build/static"))

@app.get("/")
def index():
    return FileResponse("frontend/build/index.html")