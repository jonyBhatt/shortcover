import { FaChevronDown } from "react-icons/fa";
import Facebook from "../assets/Facebook - Original.png";
import Instagram from "../assets/Instagram - Original.png";
import Linkedin from "../assets/LinkedIn - Original.png";
import StarIcon from "../assets/star-icon.png";
import Twitter from "../assets/Twitter - Original.png";
import Star from "../assets/yellow-start.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import CustomLink from "./CustomLink";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;
  const logOut = async () => {
    //Implement logout logic here
    await fetch("https://shortcover-server.onrender.com/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        navigate("/");
      }
    });
  };
  return (
    <nav>
      {/** Top Nav */}
      <div className="py-2 bg-black w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="font-medium text-white text-sm">Excellent</p>
            <div className="flex items-center gap-1">
              <img src={StarIcon} alt="staricon" className="w-4 h-4" />
              <img src={StarIcon} alt="staricon" className="w-4 h-4" />
              <img src={StarIcon} alt="staricon" className="w-4 h-4" />
              <img src={StarIcon} alt="staricon" className="w-4 h-4" />
              <img src={StarIcon} alt="staricon" className="w-4 h-4" />
              <img src={Star} alt="staricon" className="w-4 h-4" />
            </div>
            <p className="font-medium text-white text-sm">Trustpilot</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={Facebook} alt="staricon" className="w-4 h-4" />
            <img src={Twitter} alt="staricon" className="w-4 h-4" />
            <img src={Instagram} alt="staricon" className="w-4 h-4" />
            <img src={Linkedin} alt="staricon" className="w-4 h-4" />
          </div>
        </div>
      </div>
      {/** Main Nav */}
      <div className="py-4 container mx-auto font-lato">
        <div className="flex justify-between items-center">
          <a href="/" className="font-bold font-lato text-2xl">
            ShortCover
          </a>
          {/** Desktop Screen */}

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              <CustomLink to="/" className="font-medium text-lg">
                Home
              </CustomLink>
              <CustomLink to="/about" className="font-medium text-lg">
                About us
              </CustomLink>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1.5 justify-center outline-none">
                  <span className="font-medium text-lg">Car</span>
                  <FaChevronDown className="w-4 h-3 font-light" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <CustomLink to="/cars" className="">
                      Hourly car insurance
                    </CustomLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <CustomLink to="/claims" className="font-medium text-lg">
                Claims
              </CustomLink>
              <CustomLink to="/help" className="font-medium text-lg">
                Help Center
              </CustomLink>
              <CustomLink to="/contact" className="font-medium text-lg">
                Contact us
              </CustomLink>
            </div>
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>user name</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-secondary">
                  <DropdownMenuItem>
                    <Link to={"/profile"}>Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-blue-300" />
                  <DropdownMenuItem>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-blue-300" />
                  <DropdownMenuItem>
                    <Button
                      size={"lg"}
                      variant={"destructive"}
                      onClick={logOut}
                    >
                      Log Out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button size={"lg"} className="font-bold">
                  Log In
                </Button>
              </Link>
            )}
          </div>

          {/** Mobile Tablet Screen */}
          <div className="flex lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 justify-center outline-none">
                <Menu size={25} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <CustomLink to="/" className="">
                    Home
                  </CustomLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <CustomLink to="/about" className="">
                    About Us
                  </CustomLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <CustomLink to="/car" className="">
                    Car
                  </CustomLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <CustomLink to="/claims" className="">
                    Claims
                  </CustomLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <CustomLink to="/help" className="">
                    Help Center
                  </CustomLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <CustomLink to="/contact" className="">
                    Contact Us
                  </CustomLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>user name</AvatarFallback>
                      </Avatar>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Link to={"/profile"}>Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-blue-300" />
                      <DropdownMenuItem>
                        <Link to={"/dashboard"}>Dashboard</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-blue-300" />
                      <DropdownMenuItem>
                        <Button
                          size={"lg"}
                          variant={"destructive"}
                          onClick={logOut}
                        >
                          Log Out
                        </Button>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
