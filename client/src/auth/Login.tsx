import { Link } from "react-router-dom";
import { LoginForm } from "../components/Auth/LoginForm";
import LoginImage from "../assets/loginImage.png";
export default function Login() {
  return (
    <div className="min-h-svh container mx-auto py-16">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4  ">
        <div className="h-full px-8 flex items-center justify-center text-white  w-full">
          <img src={LoginImage} alt="Login Image" />
        </div>
        <div className="p-8 h-full flex flex-col items-center justify-center w-full">
          <h3 className="font-medium text-lg ">Sign In</h3>
          <div className="py-10 max-w-sm w-full">
            <LoginForm />
            <span className="text-muted-foreground text-sm font-lato text-center flex items-center justify-center gap-1 mt-5">
              New user?{" "}
              <Link to="/register" className="font-bold text-primary underline">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
