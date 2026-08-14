from pydantic import BaseModel

class HeartInput(BaseModel):
    age: int
    sex: int
    trestbps: int
    chol: int
    fbs: int
    thalch: int
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int