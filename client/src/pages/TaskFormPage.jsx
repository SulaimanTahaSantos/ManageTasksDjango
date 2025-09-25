import React from 'react';
import { useForm } from 'react-hook-form';
import { createTask } from '../api/tasks.api';
import { useNavigate } from 'react-router-dom';
export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
     await createTask(data);
    navigate('/tasks');
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          {...register('title', { required: true })}
        />
        {errors.title && <span>Titulo es requerido</span>}
        <textarea
          rows={3}
          placeholder="Task Description"
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && <span>Descripcion es requerida</span>}
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}
