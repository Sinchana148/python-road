import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isPaid", "true");
    setTimeout(() => {
      navigate("/roadmap");
    }, 1500);
  }, [navigate]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>🎉 Payment Successful!</h2>
      <p>Unlocking your course...</p>
    </div>
  );
}

export default PaymentSuccess;