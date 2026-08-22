import pickle
import os
from .schemas import DiabetesInput

BASE_DIR = os.path.dirname(__file__)
ARTIFACTS_DIR = os.path.join(BASE_DIR, "ml-models")

def load_pickle(filename):
    path = os.path.join(ARTIFACTS_DIR, filename)
    with open(path, "rb") as f:
        return pickle.load(f)

model = load_pickle("model.pkl")
impute_medians = load_pickle("impute_medians.pkl")
selected_features = load_pickle("selected_features.pkl")

zero_missing_cols = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
categorical_cols = ['Pregnancies', 'Age']


def orderinput(diabetesinput: DiabetesInput):
   data = diabetesinput.model_dump()
   orderlist = []

   for feature in selected_features:
     orderlist.append(data[feature])

   return orderlist


def knn_imputing(diabetesinput: DiabetesInput):
   orderlist = orderinput(diabetesinput)

   for col in zero_missing_cols:
       index = selected_features.index(col)
       if orderlist[index] == 0:
           orderlist[index] = impute_medians[col]

   imputed_data = [orderlist]
   return imputed_data


def rounding_cat_val(diabetesinput: DiabetesInput):
    imputed_data = knn_imputing(diabetesinput)

    for col in categorical_cols:
        index = selected_features.index(col)
        imputed_data[0][index] = round(imputed_data[0][index])

    return imputed_data


def predicting(diabetesinput: DiabetesInput):
   data = rounding_cat_val(diabetesinput)
   predicted_deiseas = model.predict(data)
   prediction_probablity = model.predict_proba(data)
   dieses = int(predicted_deiseas[0])
   probablity = float(prediction_probablity[0][1])

   return {"prediction":dieses,"prediction_probablity":probablity}