import React from "react";
import ExpertImage from "../../assets/user.jpg";

interface Testimonial {
  image: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    image: ExpertImage,
    name: "John Doe",
    rating: 5,
    text: "Shortcover provided excellent service. The process was quick and easy!",
    date: "2024-07-05",
  },
  {
    image: ExpertImage,
    name: "Jane Smith",
    rating: 4,
    text: "Very satisfied with the service. Affordable and flexible insurance options.",
    date: "2024-07-04",
  },
];

export const TestimonialSection: React.FC = () => {
  return (
    <div className="py-16 container mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-2">
        Customer Satisfaction
      </h2>
      <p className="text-center mb-8">
        Shortcover has provided temporary vehicle insurance to hundreds of
        thousands of drivers for over 15 years.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex items-center justify-between w-full">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-500 mr-1"></i>
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <i key={i} className="far fa-star text-yellow-500 mr-1"></i>
                  ))}
                </div>
              </div>
            </div>
            <p className="mb-4 text-center">" {testimonial.text} "</p>
            <div className="text-right text-gray-500">{testimonial.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <TestimonialSection />
    </div>
  );
};

export default App;
