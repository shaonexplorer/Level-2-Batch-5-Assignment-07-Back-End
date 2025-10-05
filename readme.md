# Assignment 07 - L2B5

---

## Description

The API is built with TypeScript, prisma and Express, designed to manage simple blog management system. It provides endpoints for autentications and CRUD operations on blogs management.

---

## Features

- CRUD operations for blogs
- Data Validation
- Error Handling
- Image Uploading

---

## Technologies Used

- **TypeScript**
- **Node.js**
- **Express.js**
- **Prisma/PostgreSQL**
- **Zod validation/mongoose validation**

---

## Getting Started

Instructions on how to get the project up and running locally.

### Prerequisites

What you need to install before setting up the project.

- Node.js (LTS version recommended)
- npm or Yarn (package manager)
- Prisma

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shaonexplorer/Level-2-Batch-5-Assignment-07-Back-End.git
    cd your-api-project
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory of the project and add the following:

    ```

    ```

PORT=5000

# neon postgres

DATABASE_URL= put your postgreSQL database url neon/supabase

# cloudinary

CLOUD_NAME= insert your cloudinary cloud name
API_KEY= insert your cloudinary api key
API_SECRET= insert your cloudinary api secret

    ```

\_Make sure to replace placeholders like `your_database_connection_string` with your actual values.

4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn run dev
    ```
    The API should now be running at `http://localhost:5000`

---

## API Endpoints

```

    | Method | Endpoint                             | Description                              |
    | :----- | :----------------------------------- | :--------------------------------------- |
    | GET    | /api/v1/post                         | Retrieve all posts                       |
    | GET    | /api/v1/post/:postId                 | Get single post                          |
    | POST   | /api/v1/post                         | Create post                              |
    | DEL    | /api/v1/post/3                       | Delete single post                       |
    | PATCH  | /api/v1/post/3                       | Update single post                       |
    | POST   | /api/v1/user                         | Create User                              |


```
