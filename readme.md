# Project Setup Guide

## Django and Express Project

1. **Clone the Git repository:**
    ```bash
    git clone https://github.com/vuthanhnhan/homebase
    ```

2. **Navigate to the project directory:**
    ```bash
    cd homebase
    ```

3. **Run Docker Compose to start the Django and Express servers:**
    ```bash
    docker-compose up
    ```

4. **Django Admin:**
    - **Username:** thanhnhan
    - **Password:** 123456
    - **Access the Django Admin interface:** [http://localhost:8000/admin/](http://localhost:8000/admin/)

5. **Django API:**
    - **API Endpoint:** (GET) [http://localhost:8000/users](http://localhost:8000/users)
    - Use this endpoint to get all users.

6. **Proxy Setup:**
    - The proxy is set up to redirect requests to the Express server.
    - **Proxy Endpoint:** [http://localhost:5000/api/v1](http://localhost:5000/api/v1)
    - Requests to this endpoint will be redirected to the Express server.

7. **Express Server:**
    - **Express Server URL:** [http://localhost:3000](http://localhost:3000)

8. **Express API:**
    - **API Endpoint:** (GET) [http://localhost:3000/users](http://localhost:3000/users)
    - Use this endpoint to get all users.
    - **API Endpoint:** (GET) [http://localhost:3000/users/{id}](http://localhost:3000/users/{id})
    - Use this endpoint to get specific user.
    - **API Endpoint:** (PATCH) [http://localhost:3000/users/{id}](http://localhost:3000/users/{id})
    - Use this endpoint to edit user.
    - **API Endpoint:** (DELETE) [http://localhost:3000/users/{id}](http://localhost:3000/users/{id})
    - Use this endpoint to delete user.
    - **API Endpoint:** (POST) [http://localhost:3000/users/{id}](http://localhost:3000/users/{id})
    - Use this endpoint to create user.

    **POSTMAN EXPRESS API:**
    To test the API using Postman, you can import the following Postman collection:
    [View Postman Collection](Homebase%20express.postman_collection.json)

9. **Additional Notes:**
    - Ensure Docker is installed and running on your machine before running `docker-compose up`.