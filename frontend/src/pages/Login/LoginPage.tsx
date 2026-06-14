import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = () => {
    if (!email) return;

    login(email);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-8 rounded-xl w-[400px]">

        <h1 className="text-3xl font-bold text-[#D4AF37]">
          NeuroBytes KSP OS
        </h1>

        <p className="text-slate-400 mt-2">
          Secure Intelligence Portal
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full mt-6 p-3 rounded bg-slate-800"
        />

        <button
          onClick={handleLogin}
          className="w-full mt-4 bg-[#D4AF37] text-black py-3 rounded-lg font-semibold"
        >
          Login
        </button>

      </div>

    </div>
  );
}