import React from "react";
import ResultCard from "./resultCard";
const hotels = [
  {
    name: "Grand View Hotel",
    img: "url('/destinations (1).jpg')",
    rating: 8.5,
    star: 5,
    description:
      "Experience the breathtaking views of the city from Grand View Hotel. Relax in our luxurious rooms and enjoy top-notch amenities.",
    distance: 2.5,
    city: "Islamabad",
    reviews: 250,
  },
  {
    name: "Cozy Corner Guesthouse",
    img: "url('/destinations (1).jpg')",
    rating: 4.8,
    star: 4,
    description:
      "A charming, family-run guesthouse offering comfortable accommodations and a warm atmosphere in the heart of the city.",
    distance: 1.0,
    city: "Islamabad",
    reviews: 120,
  },
  {
    name: "Modern City Suites",
    img: "url('/destinations (1).jpg')",
    rating: 9.2,
    star: 1,
    description:
      "Modern, stylish apartments equipped with all the amenities you need for a comfortable and convenient stay.",
    distance: 0.8,
    city: "Islamabad",
    reviews: 480,
  },
  {
    name: "Green Haven Boutique Hotel",
    img: "url('/destinations (1).jpg')",
    rating: 4.3,
    star: 4,
    description:
      "A peaceful oasis in the city, surrounded by lush greenery. Perfect for nature lovers and relaxation seekers.",
    distance: 4.0,
    city: "Islamabad",
    reviews: 80,
  },
  {
    name: "Historical Palace Hotel",
    img: "url('/destinations (1).jpg')",
    rating: 8.8,
    star: 2,
    description:
      "Immerse yourself in history at this beautifully restored palace, offering luxurious accommodations and unique experiences.",
    distance: 3.2,
    city: "Islamabad",
    reviews: 350,
  },
  {
    name: "Budget Inn",
    img: "url('/destinations (1).jpg')",
    rating: 3.7,
    star: 3,
    description:
      "A basic and affordable option for budget-conscious travelers in a convenient location.",
    distance: 1.5,
    city: "Islamabad",
    reviews: 600,
  },
  {
    name: "The Family Lodge",
    img: "url('/destinations (1).jpg')",
    rating: 4.5,
    star: 4,
    description:
      "Spacious and comfortable accommodations perfect for families, with play areas and amenities for children.",
    distance: 5.0,
    city: "Islamabad",
    reviews: 180,
  },
  {
    name: "Riverside Retreat",
    img: "url('/destinations (1).jpg')",
    rating: 4.2,
    star: 2,
    description:
      "Relax and enjoy the scenic river views from this peaceful retreat, offering activities like kayaking and fishing.",
    distance: 6.0,
    city: "Islamabad",
    reviews: 150,
  },
  {
    name: "Luxury Spa Hotel",
    img: "url('/destinations (1).jpg')",
    rating: 9.7,
    star: 1,
    description:
      "Indulge in ultimate pampering at this luxurious spa hotel, offering world-class treatments and amenities.",
    distance: 0.5,
    city: "Islamabad",
    reviews: 700,
  },
  {
    name: "Eco-Friendly B&B",
    img: "url('/destinations (1).jpg')",
    rating: 4.9,
    star: 5,
    description:
      "A sustainable and eco-friendly option offering comfortable accommodations and promoting environmental awareness.",
    distance: 2.0,
    city: "Islamabad",
    reviews: 220,
  },
];

const ResultsList = ({ ratingFilter }) => {
  return (
    <div className="space-y-3">
      {hotels
        .filter((hotel) => ratingFilter? hotel.star == ratingFilter : true)
        .map((hotel, index) => {
          return <ResultCard key={index} {...hotel} />;
        })}
    </div>
  );
};

export default ResultsList;
