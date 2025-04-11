import "./registerPage.css";
import RegisterForm from "../../../components/auth/registerForm/registerForm";

export default function RegisterPage() {
  return (
    <>
      <div className="register_wrapper">
        регистрация
        <RegisterForm />
      </div>
    </>
  );
}
