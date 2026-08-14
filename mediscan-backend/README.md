# MediScan Backend

FastAPI backend for MediScan AI — serves multi-disease health risk predictions (heart disease, diabetes, CKD) using trained scikit-learn/imblearn models.

## Tech Stack

- **Framework:** FastAPI
- **ML:** scikit-learn 1.8.0, imbalanced-learn (SMOTE, KNN imputation)
- **Validation:** Pydantic / pydantic-settings
- **Server:** Uvicorn

## Project Structure

```
mediscan-backend/
├── src/
│   ├── heart/
│   │   ├── router.py          # POST /predict/heart endpoint
│   │   ├── schemas.py         # Pydantic input schema (11 features)
│   │   ├── service.py         # Preprocessing + prediction pipeline
│   │   └── ml-models/         # Trained artifacts for heart disease
│   │       ├── heart_disease_model.pkl
│   │       ├── scaler.pkl
│   │       ├── knn_imputer.pkl
│   │       ├── selected_features.pkl
│   │       └── categorical_cols.pkl
│   ├── diabetes/              # Same structure as heart/ (in progress)
│   ├── config.py              # App settings (reads .env via pydantic-settings)
│   └── main.py                # App entrypoint, CORS setup, router registration
├── .env                       # Local environment config (not committed)
├── .gitignore
├── .gitattributes             # Ensures .pkl files are treated as binary in Git
├── requirements.txt
└── README.md
```

## Setup

1. Create and activate a virtual environment:

   python -m venv myenv
   myenv\Scripts\Activate.ps1

2. Install dependencies:

   pip install -r requirements.txt

3. Create a `.env` file in the project root with:

   ALLOWED_ORIGINS=http://localhost:5173

4. Run the development server:

   uvicorn src.main:app --reload

5. Open the interactive API docs at:

   http://127.0.0.1:8000/docs

## Architecture Notes

Each disease module (`heart/`, `diabetes/`) is self-contained: its own router, schema, service logic, and model artifacts. No shared database is used — the app is stateless, taking form input and returning a prediction with no persistence layer.

The prediction pipeline for each disease follows this order:

1. Validate incoming request against the Pydantic schema
2. Reorder input fields to match the exact order the model was trained on (`selected_features.pkl`)
3. Run KNN imputation for any missing values
4. Round categorical columns back to valid integer categories
5. Run the trained model's `.predict()` and `.predict_proba()`
6. Return a clean JSON response with prediction and confidence

## Heart Disease Model

- Trained using Gradient Boosting inside an `imblearn` pipeline, with SMOTE applied internally during training only (not at inference time)
- ~83% cross-validated accuracy
- KNN imputation and categorical rounding are applied at inference time
- **Does not require scaled input.** A `StandardScaler` was fit during experimentation for a Logistic Regression comparison model, but the deployed Gradient Boosting model was trained on raw, unscaled feature values. The scaler artifact is kept for reference but is not applied before prediction.
- Verified against real patient records from the source dataset with known outcomes — predictions confirmed correct

## API Endpoints

| Method | Path              | Description                    | Status         |
|--------|-------------------|---------------------------------|----------------|
| GET    | /health           | Health check                    | Live           |
| POST   | /predict/heart    | Heart disease risk prediction   | Live, verified |
| POST   | /predict/diabetes | Diabetes risk prediction        | In progress    |
| POST   | /predict/ckd      | CKD risk prediction              | In progress    |

## Planned

- SHAP integration for model explainability
- Gemini API integration for plain-English health report generation
- Diabetes prediction endpoints