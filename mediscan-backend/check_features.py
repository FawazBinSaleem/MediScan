import pickle

with open(r"C:\Documants\mediscan\MediScan\ML_model\heart_disease\heart_disease_model.pkl", "rb") as f:
    model = pickle.load(f)

print(type(model))
print("Loaded successfully")