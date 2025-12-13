import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    setMessage(data.message || data.error);
  };

  return (
    <div style={styles.body}>
      <div style={styles.card} className="animated-card">
        <h2 style={styles.title}> User Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            style={styles.input}
            className="input-animate"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            style={styles.input}
            className="input-animate"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            style={styles.input}
            className="input-animate"
          />

          <button type="submit" style={styles.button} className="btn-animate">
            Register
          </button>
        </form>

        <p style={{ marginTop: "15px", fontWeight: "bold", color: "#333" }}>
          {message}
        </p>
      </div>

      {/* CSS ANIMATIONS */}
      <style>{`
        .animated-card {
          animation: slideDown 0.8s ease forwards;
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .input-animate:focus {
          transform: scale(1.05);
          transition: 0.2s;
          border-color: #afa2bdff !important;
          box-shadow: 0 0 10px #6a11cb80;
        }

        .btn-animate:hover {
          transform: scale(1.1);
          transition: 0.2s;
          box-shadow: 0 5px 15px rgba(106,17,203,0.4);
        }

        .btn-animate:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}

// Inline styles
const styles = {
  body: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(12, 10, 10, 0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    marginTop: "15px",
    padding: "12px",
    width: "100%",
    border: "none",
    borderRadius: "10px",
    background: "#6a11cb",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default App;
