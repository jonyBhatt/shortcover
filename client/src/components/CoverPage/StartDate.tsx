import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
export const StartDate = () => {
  const [dates, setDates] = useState<{ value: string; label: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const nextMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
      );
      const dateArray: { value: string; label: string }[] = [];

      for (
        let d = new Date(today);
        d <= nextMonth;
        d.setDate(d.getDate() + 1)
      ) {
        const value = d.toISOString().split("T")[0];
        let label = "";

        if (d.getDate() === today.getDate()) {
          label = `Today, the ${d.getDate()}${getOrdinalSuffix(
            d.getDate()
          )} of ${d.toLocaleString("default", { month: "long" })}`;
        } else if (d.getDate() === today.getDate() + 1) {
          label = `Tomorrow, the ${d.getDate()}${getOrdinalSuffix(
            d.getDate()
          )} of ${d.toLocaleString("default", { month: "long" })}`;
        } else {
          label = `${d.toLocaleString("default", {
            weekday: "short",
          })} the ${d.getDate()}${getOrdinalSuffix(
            d.getDate()
          )} of ${d.toLocaleString("default", { month: "long" })}`;
        }

        dateArray.push({ value, label });
      }

      setDates(dateArray);
    };

    generateDates();
  }, []);

  const getOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Select onValueChange={() => handleDateChange} defaultValue={selectedDate}>
      <SelectTrigger className="">
        <SelectValue placeholder="-Select-" className="text-muted-foreground" />
      </SelectTrigger>
      <SelectContent>
        {dates.map((date, i) => (
          <SelectItem key={i} value={date.value}>
            {date.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
