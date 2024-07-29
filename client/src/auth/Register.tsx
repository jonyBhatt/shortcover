import { Link } from "react-router-dom";
import { RegisterForm } from "../components/Auth/RegisterForm";
import RegisterImage from "../assets/regiterImage.png";
export default function Register() {
  return (
    <div className="min-h-svh container mx-auto py-16">
      <div className=" flex flex-col-reverse md:flex-row gap-x-4 gap-y-8 items-center md:justify-between w-full ">
        <div className=" h-full px-8 flex items-center justify-center text-white  w-full">
          <img src={RegisterImage} alt="" />
        </div>
        <div className="p-8 h-full flex flex-col items-start justify-center w-full">
          <h3 className="font-medium text-lg ">Create account</h3>
          <div className="py-10 md:max-w-sm w-full">
            <RegisterForm />
            <span className="text-muted-foreground text-sm font-lato text-center flex items-center justify-center gap-1 mt-5">
              Already user?{" "}
              <Link to="/register" className="font-bold text-primary underline">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
