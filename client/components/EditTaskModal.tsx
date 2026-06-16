"use client";

import { useState } from "react";

export default function EditTaskModal({ task, onClose, onSave }: any) {
  const [formData, setFormData] = useState(task);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave(task._id, formData);
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
    fontFamily: "inherit",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "16px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "480px",
          boxShadow: "0 24px 64px rgba(15,23,42,0.18)",
          overflow: "hidden",
          animation: "modalIn 0.2s ease",
        }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(12px) scale(0.98); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #312E81 100%)",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "9px",
                background: "linear-gradient(135deg, #6366F1, #818CF8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 12px rgba(99,102,241,0.5)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M11 2l2 2-8 8H3V10l8-8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ color: "white", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em" }}>
              Edit Task
            </span>
          </div>

          {/* Close X */}
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)")}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2l10 10M12 2L2 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Form body */}
        <div style={{ padding: "24px" }}>
          <form onSubmit={handleSubmit}>

            {/* Title */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#64748B",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Title
              </label>
              <input
                style={inputBase}
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
                onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
              />
            </div>

            {/* Description */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#64748B",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Description
              </label>
              <textarea
                style={{ ...inputBase, resize: "vertical", minHeight: "100px" }}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
                onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
              />
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "#F1F5F9", marginBottom: "20px" }} />

            {/* Actions */}
            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: "9px 20px",
                  borderRadius: "10px",
                  border: "1.5px solid #E2E8F0",
                  background: "white",
                  color: "#64748B",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.15s, border-color 0.15s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#F8FAFC";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#CBD5E1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "white";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#E2E8F0";
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "9px 22px",
                  borderRadius: "10px",
                  border: "none",
                  background: "linear-gradient(135deg, #6366F1, #818CF8)",
                  color: "white",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 2px 12px rgba(99,102,241,0.35)",
                  transition: "opacity 0.15s, transform 0.15s",
                  fontFamily: "inherit",
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
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 7l3.5 3.5L11 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}