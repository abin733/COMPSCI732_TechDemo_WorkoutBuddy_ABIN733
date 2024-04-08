import React from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the workout "${workout.title}"?`
    );

    if (confirmDelete) {
      const url = 'https://backend-eta-smoky.vercel.app/api/workouts/' + workout._id;
      console.log('Query sent to backend:', url); // Log the query
      const response = await fetch(url, {
        method: 'DELETE'
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'DELETE_WORKOUT', payload: json });
      }
    }
  };

  return (
    <div className="workout-details bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h4 className="text-lg font-semibold">{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span
        className="material-symbols-outlined text-red-600 hover:text-red-700 cursor-pointer transition-colors duration-300"
        onClick={handleDelete}
      >
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
