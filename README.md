# Workout Buddy MERN App + Tailwind CSS + Vercel Deployment

Author: Syahiiid Rasidi (abin733)

## Introduction

Welcome to the Workout Buddy MERN (MongoDB, Express.js, React.js, Node.js) App! This application is designed to help users manage their workout routines and track their progress effectively. The app includes features such as creating new workouts, viewing existing workouts and deleting exisiting workouts.

To deploy the Workout Buddy MERN App using GitHub Desktop instead of the CLI, you can follow these steps:

### Option A: Installation and Setup (using Github Desktop)

1. **Clone the Repository:**
   Open GitHub Desktop, click on "File" in the menu, then select "Clone Repository". Paste the repository URL (`https://github.com/abin733/COMPSCI732_TechDemo_WorkoutBuddy_ABIN733`) and choose the local directory where you want to clone the repository. Click "Clone".
   ![alt text](<Screenshot 2024-04-09 at 12.04.53 PM.png>)

2. **Switch to the 'local' Branch:**
   In GitHub Desktop, select the 'local' branch from the branch dropdown menu.
   ![alt text](<Screenshot 2024-04-09 at 12.06.37 PM.png>)

3. **Open on Visual Studio Code:**
   Open on Visual Studio COde
   ![alt text](<Screenshot 2024-04-09 at 12.09.14 PM.png>)

4. **Navigate to Backend Directory:**
   Within Code, navigate to the backend directory and open a terminal by right-clicking it.
   ![alt text](<Screenshot 2024-04-09 at 12.14.06 PM.png>)

5. **Install Backend Dependencies:**
   Open a terminal (or command prompt) in the backend directory. You can do this by right-clicking inside the directory and selecting "Open in Terminal". Then run:
   ```
   npm install
   ```

6. **Start the Backend Server:**
   After the dependencies are installed, run the following command in the terminal:
   ```
   npm run dev
   ```

7. **Access Backend API:**
   Open your browser and go to [http://localhost:3000/api/workouts](http://localhost:3000/api/workouts) to emulate the GET query.

8. **Open Another Terminal for Frontend:**
    Within Code, navigate to the frontend directory and open a terminal by right-clicking it.
   ![alt text](<Screenshot 2024-04-09 at 12.12.28 PM.png>)

9. **Install Frontend Dependencies:**
   Open a terminal (or command prompt) in the frontend directory. You can do this by right-clicking inside the directory and selecting "Open in Terminal". Then run:
   ```
   npm install
   ```

10. **Start the Frontend Client:**
    After the dependencies are installed, start the frontend client with:
    ```
    npm run dev
    ```

By following these steps, you'll be able to set up and run the Workout Buddy MERN App using GitHub Desktop instead of the command line interface.

## Option B: Installation and Setup (using Git Terminal). Please skip if you have done cloning using GitHub Desktop.

To get started with the Workout Buddy MERN App, follow these steps by running this command from a terminal on your machine:

1. Clone the repository to your local machine:

```
git clone https://github.com/abin733/COMPSCI732_TechDemo_WorkoutBuddy_ABIN733
```

2. IMPORTANT! Checkout to 'local' branch for localhost deployment!
```
git checkout local
```

3. Navigate to the project directory:
```
cd COMPSCI732_TechDemo_WorkoutBuddy_ABIN733
```

4. Navigate to the backend directory:
```
cd backend
```

5. Install dependencies using npm: (prerequisite: NodeJS and MongoDB Community version are installed on the same machine)
```
npm install
```

6. Start the backend server:
```
npm run dev
```

7. Open your browser and go to [http://localhost:3000/api/workouts](http://localhost:3000/api/workouts) for emulating the GET query.


8. Open another terminal from project directory (COMPSCI732_TechDemo_WorkoutBuddy_ABIN733) and navigate to the frontend directory:

```
cd frontend
```

9. Install frontend ependencies using npm:

```
npm install
```

10. Start the frontend client:

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

The Workout Buddy MERN App is deployed on Vercel. The frontend is accessible at [https://frontend-seven-sigma-33.vercel.app/](https://frontend-seven-sigma-33.vercel.app/), and the backend API is accessible at [https://backend-eta-smoky.vercel.app/api/workouts](https://backend-eta-smoky.vercel.app/api/workouts).

### Vercel Deployment

To deploy the backend and frontend of a GitHub project separately on Vercel using their website, you can follow these general steps:

1. **Create a Vercel Account:**
   If you haven't already, sign up for an account on Vercel.

2. **Connect Your GitHub Repository:**
   Once logged in, navigate to your Vercel dashboard and click on the "Import Project" button. Then select the GitHub repository you want to deploy.
   ![alt text](<Screenshot 2024-04-09 at 11.46.07 AM.png>)

3. **Configure the Project:**
   After importing your repository, Vercel will analyze it and provide configuration options. Here, you can specify settings such as the branch to deploy, build settings, environment variables, etc.
   ![alt text](<Screenshot 2024-04-09 at 11.47.46 AM.png>)

4. **Deploy the Backend:**
   In the project settings or deployment configurations, specify the directory containing your backend code. This might be a subdirectory within your repository where your backend code resides.
   ![alt text](<Screenshot 2024-04-09 at 11.47.00 AM.png>)

5. **Deploy the Frontend:**
   Similarly, configure another deployment for your frontend code. Specify the directory containing your frontend code (e.g., the `build` folder for React applications).
   ![alt text](<Screenshot 2024-04-09 at 11.47.46 AM-1.png>)

6. **Environment Variables:**
   Set any required environment variables for both the backend and frontend deployments if needed.
   In my case, my MONGO_URI for Backend deployment.

7. **Review and Deploy:**
   Once configurations are set, review your settings and click the "Deploy" button for each deployment.

8. **Wait for Deployment:**
   Vercel will start building and deploying your projects separately. You can monitor the progress in the Vercel dashboard.

9. **Test Your Deployments:**
   Once deployed, test both your backend and frontend deployments to ensure everything is working as expected.

By following these steps, you'll be able to deploy the backend and frontend of your GitHub project separately on Vercel without using the CLI, directly through their website.

## References

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/en/5x/api.html)
- [MongoDB Documentation](https://docs.mongodb.com/)

Thank you for exploring the Workout Buddy MERN App! If you have any questions or feedback, feel free to reach out to us. Happy exercising! 🏋️‍♂️💪