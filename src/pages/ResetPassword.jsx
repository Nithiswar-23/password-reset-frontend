import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      alert("Please enter password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
  `https://password-reset-backend-qnop.onrender.com/api/auth/reset-password/${token}`,
  { password }
);

      alert(res.data.msg || "Password updated successfully");
      setPassword("");
    } catch (err) {
      alert(err.response?.data?.msg || "Invalid or expired link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="center-container">
      <div className="card custom-card">
        <h3 className="text-center mb-3">Reset Password</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-success w-100" disabled={loading}>
            {loading ? "Updating..." : "Update Password"}
          </button>
          <div className="text-center mt-2">
  <a href="/" className="text-decoration-none">
    Go to Login
  </a>
</div>
        </form>
      </div>
    </div>
  );
}