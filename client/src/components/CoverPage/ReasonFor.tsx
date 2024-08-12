import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const reasons = [
  {
    title: "Borrowing A Car",
  },
  {
    title: "Drive away cover",
  },
  {
    title: "Learning to drive someone's else car",
  },
  {
    title: "Learning to drive in your own car",
  },
  {
    title: "Obtain road tax",
  },
  {
    title: "Need cover in a emergency",
  },
  {
    title: "back from working away ",
  },
  {
    title: "Problem with annual policy",
  },
  {
    title: "Sharing driving on a long trip",
  },
  {
    title: "Test Drive",
  },
  {
    title: "Temp cover for business use",
  },
  {
    title: "Moving House",
  },
  {
    title: "Back from or going to university, college, school",
  },
  {
    title: "Courtesy vehicle",
  },
  {
    title: "Pre-Booked MOT",
  },
  {
    title: "Drive own vehicle",
  },
  {
    title: "Add a driver",
  },
  {
    title: "Buying a vehicle",
  },
  {
    title: "Impound vehicle release",
  },
  {
    title: "Immediate Start",
  },
];

interface ReasonProps {
  setReason: (value: string) => void;
  reason: string;
}

export const ReasonFor = ({ setReason, reason }: ReasonProps) => {
  const handleReason = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReason(event.target.value);
  };
  console.log(reason);

  return (
    <Select onValueChange={() => handleReason} defaultValue={reason}>
      <SelectTrigger className="">
        <SelectValue placeholder="-Select-" className="text-muted-foreground" />
      </SelectTrigger>
      <SelectContent>
        {reasons.map((reason, index) => (
          <SelectItem key={index} value={reason.title}>
            {reason.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
