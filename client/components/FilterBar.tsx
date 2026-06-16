"use client";

export default function FilterBar({
  priorityFilter,
  setPriorityFilter,
  statusFilter,
  setStatusFilter,
}: any) {
  const priorityColors: Record<string, string> = {
    All: "#6366F1",
    High: "#EF4444",
    Medium: "#F59E0B",
    Low: "#10B981",
  };

  const statusColors: Record<string, string> = {
    All: "#6366F1",
    Pending: "#F59E0B",
    Completed: "#10B981",
  };

  const selectWrap: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
  };

  const selectStyle = (activeColor: string): React.CSSProperties => ({
    appearance: "none",
    WebkitAppearance: "none",
    background: "white",
    border: `1.5px solid ${activeColor}`,
    borderRadius: "10px",
    padding: "8px 36px 8px 36px",
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#0F172A",
    cursor: "pointer",
    outline: "none",
    boxShadow: `0 2px 8px ${activeColor}22`,
    transition: "border-color 0.2s, box-shadow 0.2s",
    minWidth: "148px",
    fontFamily: "inherit",
  });

  return (
    <div
      style={{
        background: "white",
        borderRadius: "14px",
        padding: "16px 20px",
        boxShadow: "0 2px 10px rgba(15,23,42,0.06)",
        border: "1px solid #F1F5F9",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        alignItems: "center",
      }}
    >
      {/* ── Priority dropdown ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "#94A3B8",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Priority
        </span>

        <div style={selectWrap}>
          {/* left dot */}
          <span
            style={{
              position: "absolute",
              left: "12px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: priorityColors[priorityFilter] ?? "#6366F1",
              pointerEvents: "none",
              transition: "background 0.2s",
              zIndex: 1,
            }}
          />

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            style={selectStyle(priorityColors[priorityFilter] ?? "#6366F1")}
          >
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {/* chevron */}
          <svg
            style={{
              position: "absolute",
              right: "11px",
              pointerEvents: "none",
              flexShrink: 0,
            }}
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path
              d="M3 5l4 4 4-4"
              stroke={priorityColors[priorityFilter] ?? "#6366F1"}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* divider */}
      <div style={{ width: "1px", height: "28px", background: "#E2E8F0", flexShrink: 0 }} />

      {/* ── Status dropdown ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "#94A3B8",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Status
        </span>

        <div style={selectWrap}>
          {/* left dot */}
          <span
            style={{
              position: "absolute",
              left: "12px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: statusColors[statusFilter] ?? "#6366F1",
              pointerEvents: "none",
              transition: "background 0.2s",
              zIndex: 1,
            }}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={selectStyle(statusColors[statusFilter] ?? "#6366F1")}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>

          {/* chevron */}
          <svg
            style={{
              position: "absolute",
              right: "11px",
              pointerEvents: "none",
              flexShrink: 0,
            }}
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path
              d="M3 5l4 4 4-4"
              stroke={statusColors[statusFilter] ?? "#6366F1"}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}