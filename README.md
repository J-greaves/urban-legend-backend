# Myth Map — Backend API

A REST API for **Myth Map**, a crowd-sourced map of myths, legends, ghost stories, and folklore from around the world. Users can pin stories to real-world locations, browse by category, and build a personal collection of favourites.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [NestJS](https://nestjs.com/) (Node.js, TypeScript) |
| ORM | [Prisma](https://www.prisma.io/) |
| Database | MySQL 8 |
| Authentication | JWT (via `@nestjs/jwt` + Passport) |
| File Uploads | AWS S3 (pre-signed URLs) |
| API Docs | Swagger / OpenAPI (`@nestjs/swagger`) |
| Containerisation | Docker + Docker Compose |
| CI | GitHub Actions |

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                    NestJS Application                │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │  auth/   │  │ stories/ │  │     users/       │  │
│  │ register │  │ GET  all │  │  check-user      │  │
│  │ login    │  │ GET  :id │  │  create (legacy) │  │
│  └────┬─────┘  │ POST  *  │  │  :id/stories     │  │
│       │        │ DELETE * │  └──────────────────┘  │
│       │        └────┬─────┘                        │
│       │             │  * = JWT protected            │
│  ┌────▼─────────────▼──────────────────────────┐   │
│  │              PrismaService                  │   │
│  └────────────────────┬────────────────────────┘   │
└───────────────────────┼─────────────────────────────┘
                        │
                   ┌────▼────┐
                   │  MySQL  │
                   └─────────┘
```

## Prerequisites

- Node.js 20+
- MySQL 8 (or Docker)
- An AWS account (for S3 image uploads — optional)

## Local Setup

```bash
# 1. Clone and install dependencies
git clone <repo-url>
cd urban-legend-backend
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env with your database URL, JWT secret, and AWS credentials

# 3. Run database migrations
npx prisma migrate dev

# 4. (Optional) Seed with sample data
npx tsx db/seeds/runSeed.ts

# 5. Start the development server
npm run start:dev
```

The API will be available at `http://localhost:3000`.
Interactive API docs: `http://localhost:3000/api`

## Docker Setup

The quickest way to get everything running:

```bash
cp .env.example .env
# Set JWT_SECRET and any AWS vars in .env

docker compose up
```

This starts a MySQL 8 container and the API container. Migrations run automatically on startup.

## Running Tests

```bash
# Unit tests
npm test

# Unit tests with coverage report
npm run test:cov

# Watch mode
npm run test:watch
```

## API Reference

### Auth

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/auth/register` | — | Register a new account |
| POST | `/auth/login` | — | Log in, receive a JWT |

### Stories

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/stories` | — | Get all stories |
| GET | `/stories/:id` | — | Get a story by ID |
| POST | `/stories` | JWT | Create a new story |
| DELETE | `/stories/:id` | JWT | Delete a story |

### Users

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/users/check-user?email=` | — | Look up a user by email |
| GET | `/users/:id/stories` | — | Get a user's stories and favourites |

### AWS S3

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/aws-s3/generate-presigned-url` | — | Generate a pre-signed S3 upload URL |

Full interactive documentation is available at `/api` when the server is running.

## Environment Variables

See [.env.example](.env.example) for all required variables.

| Variable | Description |
|---|---|
| `DATABASE_URL` | MySQL connection string |
| `JWT_SECRET` | Secret used to sign JWTs |
| `AWS_ACCESS_KEY_ID` | AWS IAM key (for S3) |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM secret (for S3) |
| `AWS_REGION` | AWS region (default: `eu-west-2`) |
| `AWS_S3_BUCKET` | S3 bucket name (default: `loremapper`) |
| `CORS_ORIGIN` | Allowed CORS origin (default: `http://localhost:5173`) |
| `PORT` | Server port (default: `3000`) |
