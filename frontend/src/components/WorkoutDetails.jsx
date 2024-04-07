import React from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const url = '/api/workouts/' + workout._id;
    console.log('Query sent to backend:', url); // Log the query
    const response = await fetch(url, {
      method: 'DELETE'
    });
    const json = await response.json();
  
    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };
  

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
