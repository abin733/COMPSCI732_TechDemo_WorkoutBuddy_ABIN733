import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('api/workouts');
        const json = await response.json();

        if (response.ok) {
          dispatch({type: 'SET_WORKOUTS', payload: json});
        } else {
          console.log('Error fetching workouts:', json); // Log error with console.log()
        }
      } catch (error) {
        console.log('Error fetching workouts:', error.message); // Log error with console.log()
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
