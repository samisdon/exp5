import React from "react";
import Button from "./Button";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>React Testing Application</h1>
        <p style={styles.text}>
          Experiment 2.1 – Unit, Snapshot & Performance Testing
        </p>
        <Button />
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1f1c2c, #928dab)",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    backgroundColor: "#2c2c3e",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    textAlign: "center",
    width: "400px",
  },
  heading: {
    color: "#ffffff",
    marginBottom: "15px",
  },
  text: {
    color: "#cccccc",
    marginBottom: "25px",
    fontSize: "15px",
  },
};

export default App;
