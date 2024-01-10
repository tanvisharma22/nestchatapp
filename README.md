## Minimalistic ChatApp
The frontend and backend code are shared for a minimalistic chatapp that has a user interface where messages can be sent and received.
The backend will look for certain keywords in the received user message and respond with a pre-defined message. If a pre-defined message isn't there for the received message, it will send a default response.

The code follows Airbnb's coding standards whereever necessary.

The backend is built with NestJSs and the frontend is built with ReactJS

## How to run

### Step 1: Get the code
Download this repository, either by downloading .zip file from the code dropdown button or by git cli:
```
git clone <https://github.com/tanvisharma22/nestchatapp.git>
```
If .zip file is downloaded, extract the contents of the same.

### Step 2: Run backend code
Follow the following steps to run the backend code:
```
cd backend
npm install
```

To start the server in `development` mode:
```
npm run start
```
To start the server in `production` mode:
```
npm run start:prod
```

This should run the backend server on http://localhost:3001

### Step 3: Run frontend code
Follow the following steps to run the frontend code in the `development mode:`
```
cd frontend
npm install
```
To start the frontend code in `development` mode:
```
npm run start:prod
```
To start the frontend code in `production` mode:
```
npm install -g serve
serve -s build
```

This should start the frontend on http://localhost:3000
