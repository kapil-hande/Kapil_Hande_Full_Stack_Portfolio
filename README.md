# Kapil Hande — Full-Stack Developer Portfolio

A deployment-oriented portfolio starter built with:
- Frontend: React + Vite + HTML + CSS + JavaScript
- Backend: Python + Django + Django REST Framework
- Database: SQLite for local development; MySQL is supported for deployment
- Contact form: validated API endpoint; messages are stored in MySQL
- Resume, certificates and profile photo: served from Django media/static assets

> The portfolio content uses the details supplied in the resume and conversation. Banking Management System and Job Portal are marked as completed because they appear in the resume. E-commerce, YouTube Clone and House Price Prediction are intentionally not presented as completed projects.

## 1. Requirements

- Python 3.11+
- Node.js 20+
- MySQL 8+
- Git (recommended)

## 2. Database setup

The app uses `backend/db.sqlite3` by default, so no database server or `.env` file is needed for local development. Django creates the tables when you run migrations.

To use MySQL instead, open MySQL Workbench or MySQL CLI and run:

```sql
CREATE DATABASE kapil_portfolio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'ChangeThisPassword!';
GRANT ALL PRIVILEGES ON kapil_portfolio.* TO 'portfolio_user'@'localhost';
FLUSH PRIVILEGES;
```

Copy `backend/.env.example` to `backend/.env`, set `DB_ENGINE=django.db.backends.mysql`, and replace the example database credentials with your own. Never publish real passwords.

## 3. Run the Django backend

```bash
cd backend
python -m venv .venv
```

Windows:
```powershell
.venv\Scripts\activate
```

macOS/Linux:
```bash
source .venv/bin/activate
```

Then:

```bash
pip install -r requirements.txt
# For MySQL only, copy .env.example to .env and configure your credentials.
python manage.py migrate
# Optional: create an admin login with `python manage.py createsuperuser`.
python manage.py runserver
```

Backend:
- API health: http://127.0.0.1:8000/api/health/
- Contact endpoint: http://127.0.0.1:8000/api/contact/
- Django admin: http://127.0.0.1:8000/admin/

## 4. Run the React frontend

Open another terminal:

```bash
cd frontend
npm install
copy .env.example .env       # Windows; on macOS/Linux use: cp .env.example .env
npm run dev
```

Open the URL printed by Vite (normally http://localhost:5173).

## 5. Production build

```bash
cd frontend
npm run build
```

The production files are created in `frontend/dist/`. Deploy the React frontend to a static hosting provider and deploy Django to a Python-capable host. Provision a managed MySQL database and set environment variables on the backend host.

Set:
- `DJANGO_DEBUG=False`
- `DJANGO_SECRET_KEY` to a long random secret
- `DJANGO_ALLOWED_HOSTS` to your backend domain
- `CORS_ALLOWED_ORIGINS` to your frontend domain
- `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_PORT`
- `FRONTEND_URL` to your frontend domain

For production, serve uploaded media through the hosting provider/object storage or configure a proper media server. Do not rely on Django's development media serving in production.

## 6. Before publishing

1. Review every project description and only claim features you actually implemented.
2. Replace the sample profile image if you prefer another professional photo.
3. Check that resume/certificate PDFs are the versions you want public.
4. Confirm your phone number and email are intended to be public.
5. Add actual GitHub and live-demo URLs for each completed project.
6. Configure HTTPS and production environment variables.
7. Test the contact form end-to-end.

## 7. Notes

- The contact form stores submissions in MySQL. It does not send email yet. Add SMTP credentials and an email service before promising email delivery.
- The internship document included here is an **internship intent letter**, not a completion certificate.
- This is a runnable starter project, not a deployment already performed on your hosting account.
