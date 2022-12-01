import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <div className="register-page">
      <h1>Halaman Register</h1>
      <section className="register-pageI_input">
        <p>Silahkan isi data diri</p>
        <RegisterInput register={onRegisterHandler} />
        <p>
          Kembali ke <Link to="/">Login</Link>
        </p>
      </section>
    </div>
    
  );
}

export default RegisterPage;
