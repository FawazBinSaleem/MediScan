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

*Diabetes and CKD models follow the same methodology and will be documented here once finalized.*

---
