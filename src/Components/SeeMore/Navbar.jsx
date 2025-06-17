import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Photos", to: "back" },
  { label: "Amenities", to: "amenities" },
  { label: "Services", to: "Servicesbook" }, // ID should match SalonPage section
  { label: "Hear from our users", to: "reviews" },
  { label: "Opening times", to: "times" },
  { label: "FAQ", to: "FAQ" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (target) => {
    if (target === "back") {
      navigate("/#photos-section");
    } else {
      const el = document.getElementById(target);
      if (el) {
        // Wait to ensure smooth scroll even if route just loaded
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  };

  return (
    <nav className="sticky top-0 bg-gray-700 px-6 py-5 z-50">
      <ul className="flex gap-20 text-md font-lufga text-white overflow-x-auto whitespace-nowrap">
        {navLinks.map((item) => (
          <li
            key={item.to}
            onClick={() => handleClick(item.to)}
            className="cursor-pointer hover:underline"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
