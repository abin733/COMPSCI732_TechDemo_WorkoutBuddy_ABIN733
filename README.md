# Workout Buddy MERN App

## Introduction

Welcome to the Workout Buddy MERN (MongoDB, Express.js, React.js, Node.js) App! This application is designed to help users manage their workout routines and track their progress effectively. The app includes features such as creating new workouts, viewing existing workouts, and managing memberships.

## Installation and Setup

To get started with the Workout Buddy MERN App, follow these steps by running this command from a terminal on your machine:

1. Clone the repository to your local machine:

```
git clone https://github.com/abin733/COMPSCI732_TechDemo_WorkoutBuddy_ABIN733
```

2. Navigate to the backend directory:

```
cd COMPSCI732_TechDemo_WorkoutBuddy_ABIN733/backend
```

3. Install dependencies using npm:

```
npm install
```

4. Start the backend server:

```
npm run dev
```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000).


6. Navigate to the fronted directory:

```
cd ../../COMPSCI732_TechDemo_WorkoutBuddy_ABIN733/frontend
```

7. Install frontend ependencies using npm:

```
npm install
```

8. Start the frontend client:

```
npm run dev
```

## Features

### Add New Workout

The app allows users to add new workouts easily. Simply click on the "Add New Workout" button, fill in the required information such as exercise title, load, and number of reps, then click "Add Workout" to save the new workout.

### View Workouts

Users can view their existing workouts in a visually appealing layout. The workouts are displayed as cards, with alternating colors for better readability. Each card includes details such as exercise title, load, and number of reps.

## Directory Structure

The directory structure of the frontend of Workout Buddy MERN App is as follows:

- `src/components`: Contains reusable React components used throughout the app.
- `src/context`: Contains context providers and hooks for managing global state.
- `src/hooks`: Contains custom React hooks used for various functionalities.
- `src/pages`: Contains the main pages of the app, such as the Home page.
- `public`: Contains public assets such as images and favicon.
- `server`: Contains the backend server files, including routes and controllers.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **State Management**: React Context API
- **Database**: MongoDB Atlas (Cloud-hosted MongoDB)

## Deployment

The Workout Buddy MERN App is deployed on Vercel. The frontend is accessible at [https://frontend-blue-rho.vercel.app/](https://frontend-blue-rho.vercel.app/), and the backend API is accessible at [https://backend-eta-smoky.vercel.app/api/workouts](https://backend-eta-smoky.vercel.app/api/workouts).

### Vercel Deployment

To deploy the Workout Buddy MERN App on Vercel, follow these steps:

1. Create an account on Vercel if you haven't already.
2. Install the Vercel CLI globally:

   ```
   npm install -g vercel
   ```

3. Log in to your Vercel account:

   ```
   vercel login
   ```

4. Navigate to your project directory:

   ```
   cd path/to/your/project
   ```

5. Deploy your project to Vercel:

   ```
   vercel
   ```

6. Follow the prompts to configure your deployment settings. Ensure you specify the correct build and output directories for both the frontend and backend.

7. Once the deployment is complete, Vercel will provide you with the URLs for your frontend and backend deployments.

## References

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/en/5x/api.html)
- [MongoDB Documentation](https://docs.mongodb.com/)

Thank you for exploring the Workout Buddy MERN App! If you have any questions or feedback, feel free to reach out to us. Happy exercising! 🏋️‍♂️💪