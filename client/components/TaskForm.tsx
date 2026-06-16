"use client";

import { useState } from "react";

interface Props {
  onAddTask: (task: any) => void;
}

export default function TaskForm({ onAddTask }: Props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onAddTask(formData);
    setFormData({
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
    });
  };

  const priorityColors: Record<string, string> = {
    High: "#EF4444",
    Medium: "#F59E0B",
    Low: "#10B981",
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1.5px solid #E2E8F0",
    background: "#F8FAFC",
    fontSize: "0.9rem",
    color: "#0F172A",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "28px",
        boxShadow: "0 2px 16px rgba(15,23,42,0.07)",
        border: "1px solid #F1F5F9",
      }}
    >
      {/* Form heading */}
      <div className="flex items-center gap-2 mb-6">
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #6366F1, #818CF8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3v8M3 7h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span
          style={{
            fontWeight: 700,
            fontSize: "1rem",
            color: "#0F172A",
            letterSpacing: "-0.01em",
          }}
        >
          New Task
        </span>
      </div>

      {/* Title */}
      <div className="mb-4">
        <label
          style={{
            display: "block",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#64748B",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Title
        </label>
        <input
          style={inputBase}
          placeholder="What needs to be done?"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
          onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          style={{
            display: "block",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#64748B",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Description
        </label>
        <textarea
          style={{ ...inputBase, resize: "vertical", minHeight: "80px" }}
          placeholder="Add more details…"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
          onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
        />
      </div>

      {/* Priority + Due Date row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Priority */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#64748B",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            Priority
          </label>
          <div style={{ position: "relative" }}>
            {/* colored dot indicator */}
            <span
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: priorityColors[formData.priority] ?? "#6366F1",
                pointerEvents: "none",
                transition: "background 0.2s",
              }}
            />
            <select
              style={{
                ...inputBase,
                paddingLeft: "32px",
                appearance: "none",
                cursor: "pointer",
              }}
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
              onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            {/* chevron */}
            <svg
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
              width="14" height="14" viewBox="0 0 14 14" fill="none"
            >
              <path d="M3 5l4 4 4-4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#64748B",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            Due Date
          </label>
          <input
            type="date"
            style={{ ...inputBase, cursor: "pointer" }}
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
            onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "linear-gradient(135deg, #6366F1, #818CF8)",
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: "10px 22px",
          fontSize: "0.9rem",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 2px 12px rgba(99,102,241,0.35)",
          transition: "opacity 0.15s, transform 0.15s",
          letterSpacing: "-0.01em",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "1";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 3v8M3 7h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Add Task
      </button>
    </form>
  );
}