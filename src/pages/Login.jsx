import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="center-container">
      <div className="card custom-card">
        <h3 className="text-center mb-3">Login</h3>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-dark w-100 mb-2">
          Login
        </button>

        <div className="text-center">
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}