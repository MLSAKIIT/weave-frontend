import  { AuthForm } from "../ui/auth-form";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <AuthForm
      title="Log In"
      buttonText="Log In"
      extraFields={[
        { name: "email", type: "email", placeholder: "Email", icon: <FaEnvelope className="text-[#E76F04]" /> },
        { name: "password", type: "password", placeholder: "Password", icon: <FaLock className="text-[#E76F04]" /> },
      ]}
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Create Account"
    />
  );
}
