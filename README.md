# CMPSC 421 Assignment: Simple Ordering System Server

This project is a simple server built to provide a basic API for managing items in an ordering system using Node.js, Express, and MongoDB.

## Features

The server includes the following APIs:

1. **Create an Item**  
   Add a new item to the system.

2. **Retrieve All Items**  
   Get a list of all items in the system.

3. **Retrieve a Single Item**  
   Get details of a specific item by its ID.

4. **Update an Item**  
   Modify the details of an existing item.

5. **Delete an Item**  
   Remove an item from the system.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for creating APIs.
- **MongoDB**: Database for storing item data.
- **Swagger**: API documentation and testing.

## Project Structure
```
├── .dockerignore # Files and directories excluded from the Docker build context 
├── .env # Environment variables (e.g., MongoDB credentials) 
├── compose.yaml # Docker Compose configuration 
├── Dockerfile # Dockerfile for building the application image 
├── package.json # Node.js dependencies and scripts 
├── README.md # Project documentation 
├── src/ 
│ ├── app.js # Main server file 
│ ├── models/ 
│ │ ├── item.js # Mongoose schema for items 
│ │ └── mongo.js # MongoDB connection utilities 
│ ├── routes/ 
│ │ └── items.js # API routes for managing items
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22.14.0 or later)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
    `npm install`

3. Set up the `.env` file with your MongoDB credentials:
    ```env
    MONGO_PASSWORD='your_password'
    PORT=3070
    HOST='localhost'
    ```

### Running the Server

#### Locally

1. Start the server
    `node --env-file=.env src/app.js`

2. Access the server at http://localhost:3070.

#### Using Docker

1. Build and run the container:
    `docker compose up --build`

2. Access the server at http://localhost:3070.


## API Documentation
The API is documented using Swagger. Once the server is running, you can access the documentation at http://localhost:3070/api-docs.

### Example API Endpoints
**POST /items**: Create a new item.

**GET /items**: Retrieve all items.

**GET /items/{id}**: Retrieve a specific item by ID.

**PATCH /items/{id}**: Update an item by ID.

**DELETE /items/{id}**: Delete an item by ID.