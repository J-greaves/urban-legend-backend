# Loremapper Urban Legend Map — Backend API

> The API server for [Loremapper](https://github.com/J-greaves/urban-legend-map-remix), a crowd-sourced interactive map of myths, legends, ghost stories, and folklore pinned to real-world locations.

---

## Table of Contents

- [What is Loremapper?](#what-is-loremapper)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start (Docker)](#quick-start-docker)
- [Local Development Setup](#local-development-setup)
- [Seeding Sample Data](#seeding-sample-data)
- [Running the Frontend](#running-the-frontend)
- [API Reference](#api-reference)
- [Environment Variables](#environment-variables)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)

---

## What is Loremapper?

Loremapper lets users explore and submit stories tied to specific coordinates on an interactive world map. Stories are categorised by type — myths, legends, ghost stories, urban legends, fairy tales, historic facts, alien sightings, folk songs, and more. Authenticated users can submit new stories, attach images, and save favourites.

This repository is the **backend API only**. The React/Remix frontend lives at [urban-legend-map-remix](https://github.com/J-greaves/urban-legend-map-remix).

---

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│             Browser / Remix Frontend (:5173)                 │
│   React 18 · TypeScript · Tailwind · MapLibre GL · Stytch    │
└────────────────────────┬─────────────────────────────────────┘
                         │ HTTP (REST)
                         ▼
┌────────────────────────────────────────────────────────────┐
│                  NestJS API (:3000)                        │
│                                                            │
│  ┌─────────┐  ┌──────────────┐  ┌──────────┐  ┌─────────┐  │
│  │  auth/  │  │   stories/   │  │  users/  │  │ aws-s3/ │  │
│  │register │  │ GET  all     │  │ check    │  │presigned│  │
│  │login    │  │ GET  :id     │  │ create   │  │  URLs   │  │
│  └────┬────┘  │ POST     [X] │  │ stories  │  └────┬────┘  │
│       │       │ DELETE   [X] │  └──────────┘       │       │
│       │       └──────┬───────┘                     │       │
│       │              │     X = JWT required        │       │
│  ┌────▼──────────────▼─────────────────────────────▼────┐  │
│  │                   PrismaService                      │  │
│  └────────────────────────┬─────────────────────────────┘  │
└───────────────────────────┼────────────────────────────────┘
                            │
               ┌────────────▼────────────┐
               │       MySQL 8           │
               │  (Docker container or   │
               │   external host)        │
               └─────────────────────────┘
                            │
               ┌────────────▼────────────┐
               │        AWS S3           │
               │  (image storage via     │
               │   pre-signed URLs)      │
               └─────────────────────────┘
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [NestJS v10](https://nestjs.com/) (Node.js, TypeScript) |
| ORM | [Prisma v5](https://www.prisma.io/) |
| Database | MySQL 8 |
| Authentication | JWT via `@nestjs/jwt` + `passport-jwt`, bcrypt password hashing |
| File Uploads | AWS S3 pre-signed URLs (images never transit the API server) |
| API Docs | Swagger / OpenAPI at `/api` |
| Containerisation | Docker + Docker Compose |
| CI | GitHub Actions (lint, test, build on every push) |

---

## Prerequisites

- [Node.js 20+](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (recommended — replaces the need for a local MySQL install)
- An AWS account with an S3 bucket (only needed for image upload functionality — everything else works without it)

---

## Quick Start (Docker)

The fastest way to get the API running locally. Docker Compose starts both the MySQL database and the API server, and runs migrations automatically.

**1. Clone the repo**
```bash
git clone https://github.com/J-greaves/urban-legend-backend.git
cd urban-legend-backend
```

**2. Create your environment file**
```bash
cp .env.example .env
```

Open `.env` and set a `JWT_SECRET` (any long random string). The AWS fields can be left as placeholders if you don't need image uploads. The `DATABASE_URL` field is ignored when using Docker Compose — the connection string is managed internally.

**3. Start everything**
```bash
docker compose up --build
```

Docker will:
- Pull and start a MySQL 8 container
- Build the API image (installs dependencies, compiles TypeScript)
- Wait for the database to be healthy
- Run all Prisma migrations automatically
- Start the NestJS server on port 3000

**4. Confirm it's running**

Open [http://localhost:3000/api](http://localhost:3000/api) — you should see the interactive Swagger UI with all available endpoints.

**Stopping the server**
```bash
# Stop containers (preserves database data)
docker compose down

# Stop and delete all data (fresh start)
docker compose down -v
```

---

## Local Development Setup

If you prefer to run the API without Docker (requires a locally installed MySQL 8 instance).

**1. Install dependencies**
```bash
npm install
```

**2. Configure environment**
```bash
cp .env.example .env
```

Set `DATABASE_URL` to your local MySQL connection string, e.g.:
```
DATABASE_URL=mysql://root:yourpassword@localhost:3306/mythmap
```

**3. Run migrations**

On first run, Prisma will create the `mythmap` database schema:
```bash
npx prisma migrate dev
```

> **Note:** `prisma migrate dev` requires permission to create a temporary shadow database. If you hit a permissions error, run with a root/admin MySQL user, or see the [Prisma shadow database docs](https://pris.ly/d/migrate-shadow).

**4. Start the development server**
```bash
npm run start:dev
```

The server starts at [http://localhost:3000](http://localhost:3000) with hot-reload enabled.

---

## Seeding Sample Data

The repo includes 69 sample stories across 9 categories, 5 test users, and 70 favourite relationships — useful for development and demos.

Make sure the `DATABASE_URL` in your `.env` points to the running database (for Docker: `mysql://mythmap:mythmap@localhost:3306/mythmap`), then run:

```bash
npx tsx db/seeds/runSeed.ts
```

> **Warning:** The seed script clears all existing data before inserting. Don't run it against a database with data you want to keep.

> **Note on seeded users:** Seeded users have no password set and cannot log in via `POST /auth/login`. They exist as story authors for browsing purposes. To get an authenticated account, use `POST /auth/register` via the Swagger UI.

---

## Running the Frontend

The Remix frontend is a separate repository: [urban-legend-map-remix](https://github.com/J-greaves/urban-legend-map-remix)

```bash
git clone https://github.com/J-greaves/urban-legend-map-remix.git
cd urban-legend-map-remix
npm install
cp .env.example .env
```

The frontend requires these environment variables pointing at the backend:

```env
# Points the Remix server-side loaders at the API
API_BASE_URL=http://localhost:3000

# Points the browser-side React code at the API
VITE_API_BASE_URL=http://localhost:3000
```

It also requires:
- `VITE_STYTCH_PUBLIC_TOKEN` — from a [Stytch](https://stytch.com/) account (used for Google OAuth on the frontend)
- `VITE_MAPTILER_API_KEY` — from [MapTiler](https://www.maptiler.com/) (used to render the map tiles)

Once configured:
```bash
npm run dev
```

The frontend runs at [http://localhost:5173](http://localhost:5173). The backend's CORS is already configured to allow this origin by default.

---

## API Reference

Full interactive documentation with request/response schemas is available at [`http://localhost:3000/api`](http://localhost:3000/api) when the server is running. Use the **Authorize** button to supply a JWT and test protected endpoints.

### Auth

| Method | Endpoint | Auth | Description |
|--------|----------|:----:|-------------|
| POST | `/auth/register` | — | Create an account, returns JWT |
| POST | `/auth/login` | — | Log in with email + password, returns JWT |

### Stories

| Method | Endpoint | Auth | Description |
|--------|----------|:----:|-------------|
| GET | `/stories` | — | Return all stories |
| GET | `/stories/:id` | — | Return a single story |
| POST | `/stories` | 🔒 | Create a new story (authorId taken from JWT) |
| DELETE | `/stories/:id` | 🔒 | Delete a story |

### Users

| Method | Endpoint | Auth | Description |
|--------|----------|:----:|-------------|
| GET | `/users/check-user?email=` | — | Look up whether a user exists by email |
| POST | `/users/create` | — | Create a user without a password (legacy — prefer `/auth/register`) |
| GET | `/users/:id/stories` | — | Return a user's submitted and favourited stories |

### AWS S3

| Method | Endpoint | Auth | Description |
|--------|----------|:----:|-------------|
| POST | `/aws-s3/generate-presigned-url` | — | Get a short-lived S3 upload URL for a given filename/filetype |

---

## Environment Variables

See [.env.example](.env.example) for the full template.

| Variable | Required | Default | Description |
|---|:---:|---|---|
| `DATABASE_URL` | ✅ | — | MySQL connection string |
| `JWT_SECRET` | ✅ | — | Secret used to sign JWTs — use a long random string in production |
| `AWS_ACCESS_KEY_ID` | — | — | AWS IAM access key (S3 uploads only) |
| `AWS_SECRET_ACCESS_KEY` | — | — | AWS IAM secret (S3 uploads only) |
| `AWS_REGION` | — | `eu-west-2` | AWS region of your S3 bucket |
| `AWS_S3_BUCKET` | — | `loremapper` | S3 bucket name |
| `CORS_ORIGIN` | — | `http://localhost:5173` | Origin allowed by CORS (set to your frontend URL) |
| `PORT` | — | `3000` | Port the API listens on |

> When using Docker Compose, `DATABASE_URL` is set internally. All other variables are read from your `.env` file via `${VAR:-default}` substitution.

---

## Running Tests

The test suite uses Jest with mocked Prisma — no database connection required.

```bash
# Run all unit tests
npm test

# Watch mode (re-runs on file save)
npm run test:watch

# Generate a coverage report
npm run test:cov
```

Tests cover service-layer business logic for `StoriesService`, `UsersService`, and `AuthService`, including error cases (404s, 409 conflicts, 401 unauthorized).

GitHub Actions runs lint, tests, and a build check automatically on every push and pull request to `main`.

---

## Project Structure

```
urban-legend-backend/
├── src/
│   ├── auth/                  # JWT auth — register, login, guards, strategy
│   │   ├── dto/               # RegisterDto, LoginDto
│   │   ├── guards/            # JwtAuthGuard
│   │   └── strategies/        # passport-jwt strategy
│   ├── stories/               # Stories CRUD
│   ├── users/                 # User lookup and story aggregation
│   ├── aws/                   # S3 pre-signed URL generation
│   ├── prisma/                # PrismaService (database client)
│   └── common/
│       └── filters/           # Global HTTP exception filter
├── prisma/
│   ├── schema.prisma          # Database schema (User, Story, StoryFavorites)
│   └── migrations/            # Auto-generated migration history
├── db/
│   ├── data/test-data/        # Sample stories, users, favourites
│   └── seeds/                 # Seed script
├── Dockerfile                 # Multi-stage build (builder + production)
├── docker-compose.yml         # MySQL + API with health checks
└── .github/workflows/ci.yml   # GitHub Actions CI pipeline
```
