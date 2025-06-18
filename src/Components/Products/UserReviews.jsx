import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
 
const users = [
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 4.5,
    review:
      "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and",
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4.5,
    review:
      "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and",
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4.5,
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 4.5,
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4.5,
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=6",
    rating: 4.5,
  },
];
 
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-black" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-black" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-black" />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
};
 
const TestimonialSection = () => {
  const [user1, user2, ...rest] = users;
 
  return (
    <div className="mt-10 text-black">
      {/* Header Row (only 2 cols used) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-6">
        {/* Column 1: Heading + Rating */}
        <div>
          <h2 className="text-3xl  md:text-3xlfont-meadium mb-1">Hear from our users</h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">4.3</span>
            <FaStar className="text-black" />
            <a href="#" className="text-blue-500 underline">(32)</a>
          </div>
        </div>
 
        {/* Column 2: Button */}
        <div className="flex justify-start md:justify-end">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100">
            Write a review <HiOutlinePencil className="text-md" />
          </button>
        </div>
 
        {/* Column 3: empty */}
        <div className="hidden md:block" />
      </div>
 
      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {/* Review user 1 */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <img src={user1.avatar} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{user1.name}</p>
                <p className="text-xs text-gray-500">{user1.role}</p>
              </div>
            </div>
            <StarRating rating={user1.rating} />
            <p className="text-sm mt-2">{user1.review}</p>
            <a href="#" className="text-blue-600 text-sm mt-1 inline-block">Read more</a>
          </div>
 
          {/* Brief users */}
          {rest.slice(0, 2).map((user, i) => (
            <div key={i} className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <img src={user.avatar} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
              <StarRating rating={user.rating} />
            </div>
          ))}
        </div>
 
        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {/* Review user 2 */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <img src={user2.avatar} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{user2.name}</p>
                <p className="text-xs text-gray-500">{user2.role}</p>
              </div>
            </div>
            <StarRating rating={user2.rating} />
            <p className="text-sm mt-2">{user2.review}</p>
            <a href="#" className="text-blue-600 text-sm mt-1 inline-block">Read more</a>
          </div>
 
          {/* Brief users */}
          {rest.slice(2, 4).map((user, i) => (
            <div key={i} className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <img src={user.avatar} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
              <StarRating rating={user.rating} />
            </div>
          ))}
        </div>
 
        {/* Column 3: Empty */}
        <div className="hidden md:block" />
      </div>
    </div>
  );
};
 
export default TestimonialSection;