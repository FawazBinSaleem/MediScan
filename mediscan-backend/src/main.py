from fastapi import FastAPI
from src.config import settings
from fastapi.middleware.cors import CORSMiddleware
from .heart.router import router as heart_router
from .diabetes.router import router as diabetes_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.allowed_origins],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(heart_router)
app.include_router(diabetes_router)


@app.get("/health")
def health_check():
    return {"status": "ok"}