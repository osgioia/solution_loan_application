# Loan Application Project

This project provides a backend for a loan application system.

## Prerequisites

```
    Docker
    Node.js and npm
```

## Instructions

   ### Set up the environment:
        Create a file named .env in your project directory. Copy the environment variables from .env.test to .env. These variables are essential for connecting to the database.

   ### Install dependencies:

        Open a terminal or command prompt and navigate to your project directory.

        Run the following command to install the project's dependencies:

        ```
          npm install
        ```

## Seed the database (optional):

    If you want to populate the database with initial data (seeds), run the following command:

    ```
      npx prisma db seed
    ```

## Run the application:

  ### Start the application using npm:

    ```
      npm run start
    ```
        This will start the backend server, typically listening on port 3000 by default.

  ### Access the API documentation:

        Once the application is running, you can view the API documentation in your web browser at:

        http://localhost:3000/swagger

## Using Docker Compose (optional)

This project also includes a docker-compose.yml file for a convenient way to run the application and its dependencies using Docker Compose.

  ###  Build the Docker images:

        If you haven't already, install Docker Compose. Refer to the official documentation for installation instructions: https://docs.docker.com/compose/install/

        In your terminal, navigate to your project directory and run the following command:

        ```
          docker-compose build
        ```
    This will build the Docker images for the application and its dependencies.

## Start the application:

    Run the following command to start the application using Docker Compose:

    ```
      docker-compose up -d
    ```

The -d flag detaches the containers from the terminal, allowing them to run in the background.

The application will be accessible at http://localhost:3000.
