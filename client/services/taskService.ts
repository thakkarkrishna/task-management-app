import axios from "axios";

const API = "http://localhost:5000/api/tasks";

export const getTasks = () => axios.get(API);

export const createTask = (data: any) =>
  axios.post(API, data);

export const updateTask = (
  id: string,
  data: any
) =>
  axios.put(`${API}/${id}`, data);

export const deleteTask = (id: string) =>
  axios.delete(`${API}/${id}`);

export const markComplete = (id: string) =>
  axios.patch(
    `${API}/${id}/mark-complete`
  );