## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/FawazBinSaleem/MediScan.git

cd mediscan-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---

## Features (Planned)

- Select disease (Diabetes, Heart, Kidney)
- Input health data
- AI prediction results
- Risk level visualization
- SHAP explanation display
- AI-generated health report

---

## Machine Learning Models

### Heart Disease Prediction

**Dataset:** UCI Heart Disease dataset (920 patient records, Cleveland/Hungary/Switzerland/VA Long Beach)

**Preprocessing pipeline:**
- Dropped rows with minimal missing data (`chol`, `trestbps`, `restecg`, `oldpeak`)
- Cleaned inconsistent categorical formatting (whitespace, encoding) in `slope`, `thal`, `restecg`
- Encoded categorical features (`sex`, `slope`, `thal`) to numeric values
- Applied KNN imputation (k=5) for remaining missing values (`fbs`, `ca`, `slope`, `thal`, `exang`), fit on training data only to prevent data leakage
- Addressed class imbalance using SMOTE, applied inside cross-validation folds to avoid inflated accuracy estimates

**Model selection:** Random Forest, Gradient Boosting, and Logistic Regression were tuned via `GridSearchCV` (5-fold cross-validation). Gradient Boosting performed best and was selected as the final model.

**Performance (held-out test set):**
| Metric | Score |
|---|---|
| Accuracy | 81.2% |
| Precision | 81.2% |
| Recall | 81.2% |
| F1-score | 81.1% |

**Saved artifacts:** `ML_model/heart_disease/`
- `model.pkl` — trained Gradient Boosting classifier
- `scaler.pkl` — StandardScaler fit on training data
- `knn_imputer.pkl` — KNNImputer fit on training data
- `selected_features.pkl` — expected feature order
- `categorical_cols.pkl` — columns requiring rounding after imputation

Target output: `0 = No Disease`, `1 = Disease`, with `predict_proba()` used to generate a % risk score for the frontend.

### Diabetes Prediction

**Dataset:** Pima Indians Diabetes dataset (768 patient records, female patients of Pima Indian heritage, age 21+)

**Preprocessing pipeline:**
- Treated biologically implausible zero values as missing data in `Glucose`, `BloodPressure`, `SkinThickness`, `Insulin`, and `BMI`
- Applied median imputation for these columns, fit on training data only to prevent data leakage
- Addressed class imbalance using SMOTE, applied inside cross-validation folds to avoid inflated accuracy estimates
- Applied `StandardScaler` for Logistic Regression only (tree-based models are scale-invariant)

**Model selection:** Logistic Regression, Random Forest, Gradient Boosting, and XGBoost were tuned via `GridSearchCV` (5-fold cross-validation, scored on F1 to balance precision/recall given class imbalance). Gradient Boosting performed best and was selected as the final model.

**Performance (held-out test set):**
| Metric | Score |
|---|---|
| Accuracy | 77.3% |
| Precision | 64.2% |
| Recall | 79.6% |
| F1-score | 71.1% |
| ROC-AUC | 82.0% |

**Saved artifacts:** `ML_model/diabetes/`
- `model.pkl` — trained Gradient Boosting pipeline (includes SMOTE step)
- `impute_medians.pkl` — training-set medians for zero-value imputation, required for consistent preprocessing at inference time
- `selected_features.pkl` — expected feature order 

**Known limitation:** the Pima dataset consists exclusively of female patients. The model has not been validated on male patients, and one feature (`Pregnancies`) is not applicable to male users at all. Predictions for male users should be treated as unvalidated extrapolation rather than a clinically supported result.

Target output: `0 = No Diabetes`, `1 = Diabetes`, with `predict_proba()` used to generate a % risk score for the frontend.

## Backend (FastAPI)

The backend is being built with **FastAPI**, structured by disease domain (`heart/`, `diabetes/`), each with its own router, Pydantic schema, and service layer that loads the trained model artifacts and runs predictions.

**Status:**
- ✅ Heart disease prediction — fully built and verified against real patient records (encoding, imputation, and prediction pipeline confirmed correct)
- ⏳ Diabetes prediction — in progress
- ⏳ SHAP explainability — planned
- ⏳ Gemini API integration for plain-English health reports — planned

See `mediscan-backend/README.md` for setup instructions and backend-specific details.



---
