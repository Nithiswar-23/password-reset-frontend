import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
  "https://password-reset-backend-qnop.onrender.com/api/auth/forgot-password",
  { email }
);

      alert(res.data.msg || "Reset link sent to your email");
      setEmail("");
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="center-container">
      <div className="card custom-card">
        <h3 className="text-center mb-3">Forgot Password</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
          <div className="text-center mt-2">
  <Link to="/" className="text-decoration-none">
    Back to Login
  </Link>
</div>
        </form>
      </div>
    </div>
  );
}