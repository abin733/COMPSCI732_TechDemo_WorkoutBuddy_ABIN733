import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/workouts');
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

  return (
    <div className="home container mx-auto px-4">
      <div>
        {/* Render each workout detail */}
        {workouts && workouts.map((workout, index) => (
          <div
            key={workout._id}
            className={`p-4 rounded-lg shadow-md ${
              index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
            } mb-4`}
          >
            <WorkoutDetails workout={workout} />
          </div>
        ))}
      </div>
      <div className="mt-4 mb-4">
        {/* Conditionally render the WorkoutForm or the Add New Workout button */}
        {showForm ? (
          <WorkoutForm />
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowForm(true)}
          >
            Add New Workout
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
