import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Photos", to: "back" },
  { label: "Amenities", to: "amenities" },
  { label: "Services", to: "services" },
  { label: "Reviews", to: "reviews" },
  { label: "Opening times", to: "times" },
  { label: "FAQ", to: "FAQ" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (target) => {
    if (target === "back") {
      navigate("/#photos-section"); // This scrolls to Header1 when user goes back
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 bg-white z-50 shadow px-6 py-3">
      <ul className="flex gap-5 text-sm font-medium text-gray-700">
        {navLinks.map((item) => (
          <li
            key={item.to}
            onClick={() => handleClick(item.to)}
            className="cursor-pointer hover:underline hover:text-black"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
