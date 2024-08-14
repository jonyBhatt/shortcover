import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GB from "../../assets/gb.png";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
export const TempModal = ({
  triggerButton,
  className,
}: {
  triggerButton: string;
  className?: string;
}) => {
  const [regNumber, setRegNumber] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegNumber(e.target.value.toUpperCase());
  };

  const handleGetQuote = () => {
    if (regNumber) {
      // Encode the registration number to handle special characters
      const encodedRegNumber = encodeURIComponent(regNumber);
      // Navigate to the cover page with the registration number as a URL parameter
      navigate(`/cover?reg=${encodedRegNumber}`);
      // console.log(encodedRegNumber);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className={cn(className)}>{triggerButton}</DialogTrigger>
        <DialogContent className="my-4 bg-muted">
          <div className="flex items-start py-8 lg:items-center w-full flex-col lg:flex-row gap-6 ">
            <div className="  bg-white flex items-center w-full lg:w-auto rounded">
              <img src={GB} alt="gb" className="w-12 h-12" />
              <input
                type="text"
                placeholder="Enter Reg"
                className="font-lato font-light  bg-transparent  uppercase text-center outline-0"
                value={regNumber}
                onChange={handleInputChange}
              />
            </div>
            <Button
              className="py-6 w-[230px] bg-white px-4 flex items-center justify-center gap-10 group border-2 hover:bg-primary hover:text-white duration-300 ease-in-out transition-colors"
              onClick={handleGetQuote}
            >
              <span
                className="font-lato font-light 
                 capitalize text-center text-black group-hover:text-white"
              >
                Get a quote
              </span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
