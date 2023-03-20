import React from 'react';
import { FcFullTrash, FcEditImage } from 'react-icons/fc';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FcEditImage onClick={() => onEdit(exercise)} /></td>
            <td>< FcFullTrash onClick={() => onDelete(exercise._id)} /></td>
        </tr >
    );
}

export default Exercise;