"use client";

export default function TaskCard({ task, onDelete, onComplete, onEdit }: any) {
  const priorityConfig: Record<string, { color: string; bg: string; label: string }> = {
    High:   { color: "#EF4444", bg: "#FEF2F2", label: "High" },
    Medium: { color: "#F59E0B", bg: "#FFFBEB", label: "Medium" },
    Low:    { color: "#10B981", bg: "#ECFDF5", label: "Low" },
  };

  const statusConfig: Record<string, { color: string; bg: string }> = {
    Pending:    { color: "#6366F1", bg: "#EEF2FF" },
    Completed:  { color: "#10B981", bg: "#ECFDF5" },
    "In Progress": { color: "#F59E0B", bg: "#FFFBEB" },
  };

  const priority = priorityConfig[task.priority] ?? { color: "#6366F1", bg: "#EEF2FF", label: task.priority };
  const status   = statusConfig[task.status]     ?? { color: "#64748B", bg: "#F1F5F9" };

  const isCompleted = task.status === "Completed";

  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(15,23,42,0.07)",
        border: "1px solid #F1F5F9",
        overflow: "hidden",
        transition: "box-shadow 0.2s, transform 0.2s",
        opacity: isCompleted ? 0.75 : 1,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(99,102,241,0.15)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(15,23,42,0.07)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Priority accent bar */}
      <div
        style={{
          height: "4px",
          background: `linear-gradient(90deg, ${priority.color}, ${priority.color}88)`,
        }}
      />

      <div style={{ padding: "20px" }}>
        {/* Title */}
        <h2
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#0F172A",
            letterSpacing: "-0.01em",
            marginBottom: "6px",
            textDecoration: isCompleted ? "line-through" : "none",
          }}
        >
          {task.title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "#64748B",
            lineHeight: 1.5,
            marginBottom: "16px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {task.description}
        </p>

        {/* Priority + Status badges */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: priority.color,
              background: priority.bg,
              borderRadius: "6px",
              padding: "3px 10px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: priority.color,
                flexShrink: 0,
              }}
            />
            {priority.label}
          </span>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: status.color,
              background: status.bg,
              borderRadius: "6px",
              padding: "3px 10px",
            }}
          >
            {task.status}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#F1F5F9", marginBottom: "16px" }} />

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          {/* Edit */}
          <button
            onClick={() => onEdit(task)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#6366F1",
              background: "#EEF2FF",
              border: "none",
              borderRadius: "8px",
              padding: "7px 13px",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#E0E7FF")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#EEF2FF")}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M9 2l2 2-7 7H2V9l7-7z" stroke="#6366F1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Edit
          </button>

          {/* Complete */}
          <button
            onClick={() => onComplete(task._id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#10B981",
              background: "#ECFDF5",
              border: "none",
              borderRadius: "8px",
              padding: "7px 13px",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#D1FAE5")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#ECFDF5")}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 7l3.5 3.5L11 3" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Done
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(task._id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#EF4444",
              background: "#FEF2F2",
              border: "none",
              borderRadius: "8px",
              padding: "7px 13px",
              cursor: "pointer",
              transition: "background 0.15s",
              marginLeft: "auto",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#FEE2E2")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#FEF2F2")}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 3.5h9M5 3.5V2.5h3v1M5.5 6v3.5M7.5 6v3.5M3 3.5l.5 7h6l.5-7" stroke="#EF4444" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}