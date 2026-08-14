from fastapi import APIRouter
from .schemas import HeartInput
from .service import predicting

router = APIRouter()

@router.post("/predict/heart")
def pred(data: HeartInput):
    return predicting(data)
