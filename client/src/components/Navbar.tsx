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

import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
// import { useCurrentUser } from "../hooks/useCurrentuser";
import CustomLink from "./CustomLink";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { baseUrl } from "../lib/utils";

interface User {
  email: string;
  firstName: string;
  lastName: string;
  image?: string;
  country: string;
  postcode: string;
}
export const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/user/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("User Data:", data);
        setUser(data);

        // Set loading state to false after a 3-second delay
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchUserData();
    // navigate(0);
  }, []);

  console.log(user);

  const logOut = async () => {
    //Implement logout logic here
    localStorage.removeItem("token");
    navigate(0);
    navigate("/login");
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
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <Avatar>
                    <AvatarImage src={user.image} />
                    <AvatarFallback>
                      {user.firstName.slice(0, 1)}
                    </AvatarFallback>
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
                  {user ? (
                    <>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <Avatar>
                            <AvatarImage src={user.image} />
                            <AvatarFallback>
                              {user.firstName.slice(0, 1)}
                            </AvatarFallback>
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
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button size={"lg"} className="font-bold">
                          Log In
                        </Button>
                      </Link>
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
