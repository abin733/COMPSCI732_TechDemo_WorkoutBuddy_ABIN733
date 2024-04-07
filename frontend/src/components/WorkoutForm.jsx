import React, { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = ({ onCancel }) => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch('http://localhost:3000/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTitle('');
      setLoad('');
      setReps('');
      dispatch({ type: 'CREATE_WORKOUT', payload: json });
    }
  };

  return (
    <form className="create p-4 rounded-lg shadow-md bg-white" onSubmit={handleSubmit}> 
      <h3 className="text-lg font-semibold mb-4">Add a New Workout</h3>

      <label className="block mb-2">Exercise Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={`input ${emptyFields.includes('title') ? 'border-red-500' : ''}`}
      />

      <label className="block mb-2">Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
        className={`input ${emptyFields.includes('load') ? 'border-red-500' : ''}`}
      />

      <label className="block mb-2">Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps}
        className={`input ${emptyFields.includes('reps') ? 'border-red-500' : ''}`}
      />

      <div className="flex justify-between mt-4">
        <button 
          type="submit" 
          className="btn btn-primary hover:bg-blue-700"
        >
          Add Workout
        </button>
        <button 
          type="button" 
          className="btn btn-danger hover:bg-red-700"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
      
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
