from fastapi import APIRouter
from .schemas import DiabetesInput
from .service import predicting

router = APIRouter()

@router.post("/predict/diabetes")
def pred(data: DiabetesInput):
    return predicting(data)
