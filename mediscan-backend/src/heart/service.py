import pickle
import os
from .schemas import HeartInput

BASE_DIR = os.path.dirname(__file__)
ARTIFACTS_DIR = os.path.join(BASE_DIR, "ml-models")

def load_pickle(filename):
    path = os.path.join(ARTIFACTS_DIR, filename)
    with open(path, "rb") as f:
        return pickle.load(f)

model = load_pickle("heart_disease_model.pkl")
scaler = load_pickle("scaler.pkl")
knn_imputer = load_pickle("knn_imputer.pkl")
selected_features = load_pickle("selected_features.pkl")
categorical_cols = load_pickle("categorical_cols.pkl")


def orderinput(heartinput: HeartInput):
   data =  heartinput.model_dump()
   orderlist = []
   
   for feature in selected_features:
     orderlist.append(data[feature])

   return orderlist

def knn_imputing(heartinput: HeartInput):
   orderlist = orderinput(heartinput)
   imputed_input = [orderlist]
   imputed_data = knn_imputer.transform(imputed_input)
   return imputed_data

def rounding_cat_val(heartinput: HeartInput):
    imputed_data = knn_imputing(heartinput)

    for col in categorical_cols:
        index = selected_features.index(col)
        imputed_data[0][index] = round(imputed_data[0][index])

    return imputed_data


def predicting(heartinput: HeartInput):
   data = rounding_cat_val(heartinput)
   predicted_deiseas = model.predict(data)
   prediction_probablity = model.predict_proba(data)
   dieses = int(predicted_deiseas[0])
   probablity = float(prediction_probablity[0][1])

   return {"prediction":dieses,"prediction_probablity":probablity}