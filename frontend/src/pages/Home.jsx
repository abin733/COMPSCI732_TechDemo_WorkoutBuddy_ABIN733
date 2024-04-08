import React, { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useThemeContext } from "../hooks/useThemeContext"; // Import useThemeContext hook

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { darkMode, toggleDarkMode } = useThemeContext(); // Use theme context hook
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('https://backend-eta-smoky.vercel.app/api/workouts');
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: 'SET_WORKOUTS', payload: json });
        } else {
          console.log('Error fetching workouts:', json);
        }
      } catch (error) {
        console.log('Error fetching workouts:', error.message);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className={`Container ${darkMode ? 'dark' : ''}`}>
       <div className="mt-4 mb-4">
        {showForm ? (
          <WorkoutForm onCancel={handleCancel} />
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowForm(true)}
          >
            Add New Workout
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {workouts && workouts.map((workout, index) => (
          <div
            key={workout._id}
            className={`p-4 rounded-lg shadow-md bg-white ${darkMode ? 'dark:bg-gray-800' : ''}`}
          >
            <WorkoutDetails workout={workout} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
