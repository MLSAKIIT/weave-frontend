import  { AuthForm } from "../ui/auth-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function Signup() {
  return (
    <AuthForm
      title="Sign Up"
      buttonText="Sign Up"
      extraFields={[
        { name: "name", type: "text", placeholder: "Name", icon: <FaUser className="text-[#E76F04]" /> },
        { name: "email", type: "email", placeholder: "Email", icon: <FaEnvelope className="text-[#E76F04]" /> },
        { name: "password", type: "password", placeholder: "Password", icon: <FaLock className="text-[#E76F04]" /> },
      ]}
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Log In"
    />
  );
}
