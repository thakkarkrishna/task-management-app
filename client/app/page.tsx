"use client";

import { useEffect, useState } from "react";

import TaskForm from "@/components/TaskForm";
import TaskCard from "@/components/TaskCard";
import EditTaskModal from "@/components/EditTaskModal";
import FilterBar from "@/components/FilterBar";

import {
  getTasks,
  createTask,
  deleteTask,
  markComplete,
  updateTask,
} from "@/services/taskService";

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([]);

  const [selectedTask, setSelectedTask] =
    useState<any>(null);

  const [priorityFilter, setPriorityFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (task: any) => {
    try {
      await createTask(task);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async (id: string) => {
    try {
      await markComplete(id);
      fetchTasks();
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
        "Unable to complete task"
      );
    }
  };

  const handleUpdateTask = async (id: string, data: any) => {
    try {
      await updateTask(id, data);
      setSelectedTask(null);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredTasks = tasks.filter((task: any) => {
    const priorityMatch =
      priorityFilter === "All" ? true : task.priority === priorityFilter;
    const statusMatch =
      statusFilter === "All" ? true : task.status === statusFilter;
    return priorityMatch && statusMatch;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F1F5F9" }}>

      {/* ── Header ── */}
      <header
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #312E81 100%)",
          boxShadow: "0 4px 24px rgba(99,102,241,0.18)",
        }}
        className="relative overflow-hidden"
      >
        {/* subtle shimmer orb */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-40px",
            right: "10%",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="relative z-10 py-6 px-8 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            {/* logo mark */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366F1, #818CF8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 16px rgba(99,102,241,0.5)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white" />
                <rect x="10" y="2" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.6" />
                <rect x="2" y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.6" />
                <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" />
              </svg>
            </div>
            <span
              className="text-white font-bold tracking-tight"
              style={{ fontSize: "1.35rem", letterSpacing: "-0.02em" }}
            >
              TaskFlow
            </span>
          </div>
          <span
            style={{
              fontSize: "0.75rem",
              color: "#A5B4FC",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Task Management
          </span>
        </div>
      </header>

      {/* ── Page body ── */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Task creation form */}
        <section className="mb-8">
          <TaskForm onAddTask={handleAddTask} />
        </section>

        {/* Filters */}
        <section className="mb-8">
          <FilterBar
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </section>

        {/* Task grid / empty state */}
        {filteredTasks.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 rounded-2xl"
            style={{
              background: "white",
              border: "1.5px dashed #CBD5E1",
              boxShadow: "0 1px 6px rgba(15,23,42,0.04)",
            }}
          >
            {/* icon */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #EEF2FF, #E0E7FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <h2
              className="font-semibold"
              style={{ color: "#0F172A", fontSize: "1.1rem" }}
            >
              No tasks found
            </h2>
            <p
              className="mt-1"
              style={{ color: "#94A3B8", fontSize: "0.9rem" }}
            >
              Create a task above or adjust your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTasks.map((task: any) => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={handleDelete}
                onComplete={handleComplete}
                onEdit={setSelectedTask}
              />
            ))}
          </div>
        )}
      </main>

      {/* Edit modal — unchanged */}
      {selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSave={handleUpdateTask}
        />
      )}
    </div>
  );
}