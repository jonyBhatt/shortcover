import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { Button } from "./ui/button";
export const Footer = () => {
  return (
    <footer className="py-16 bg-black text-white">
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 items-start md:grid-cols-4 md:items-center gap-8">
          <div className="flex items-start flex-col gap-4">
            <a href="/" className="font-bold font-lato text-xl md:text-4xl">
              ShortCover
            </a>
            <p className="font-lato text-sm">
              2nd floor, Admiral House. Harlington <br /> Way, Fleet, Hampshire,
              GU51 4BB
            </p>
            <div className="flex items-center gap-2">
              <a href="#">
                <IoLogoInstagram className="text-white w-6 h-6" />
              </a>
              <a href="#">
                <IoLogoFacebook className="text-white w-6 h-6" />
              </a>
              <a href="#">
                <IoLogoTwitter className="text-white w-6 h-6" />
              </a>
              <a href="#">
                <IoLogoLinkedin className="text-white w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <ul>
              <li>About Us</li>
              <li>Claims</li>
              <li>Help Center</li>
              <li>Contact us</li>
              <li>Get a quote</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Who we cover – eligibility</li>
              <li>Customer reviews</li>
              <li>Website terms of use</li>
              <li>Privacy notice</li>
              <li>See Your Quotes & Purchases</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg mb-4">Stay Updated</h3>
            <div className="border border-white py-2 px-4 justify-between  rounded-md flex items-center ">
              <input
                type="text"
                className="border-none outline-0 bg-transparent md:w-1/2"
              />
              <Button
                size={"lg"}
                className="bg-white text-black  font-work font-bold
              "
              >
                SignUp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
