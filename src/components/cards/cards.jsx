import React from "react";
import {
  FaGraduationCap,
  FaGlobe,
  FaBookOpen,
  FaHouseChimney,
} from "react-icons/fa6";
import "../../components/cards/cards.scss";

const info_card = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "Skilled Instructors",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 2,
    icon: <FaGlobe />,
    title: "Online Classes",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 3,
    icon: <FaHouseChimney />,
    title: "Home Projects",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 4,
    icon: <FaBookOpen />,
    title: "Book Library",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

export const CardsCamp = () => {
  return (
    <section>
      <div className="container">
        {info_card.map((c) => (
          <div className={`card-${c.id} cards`}>
            {c.icon}
            <br />
            <h1>{c.title}</h1>
            <br />
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
