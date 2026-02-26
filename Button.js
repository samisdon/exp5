import React from "react";

function Button({ label = "Submit" }) {
  return (
    <button style={styles.button}>
      {label}
    </button>
  );
}

const styles = {
  button: {
    padding: "12px 25px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(45deg, #ff512f, #dd2476)",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Button;