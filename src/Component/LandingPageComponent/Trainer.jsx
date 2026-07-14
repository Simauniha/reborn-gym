import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

const trainers = [
    {
        id: 1,
        name: "Jhon Sunsaev",
        role: "Creative Director",
        img: "/images/team1.png",
    },
    {
        id: 2,
        name: "Jhon Sunsaev",
        role: "Creative Director",
        img: "/images/team2.png",
    },
    {
        id: 3,
        name: "Jhon Sunsaev",
        role: "Creative Director",
        img: "/images/team3.png",
    },
];

function Trainer() {
    return (
        <div className="trainer-container">
            <div className="trainer-header d-flex">
                <div>
                    <p className="trainer-subTitle">OUR TEAM MEMBERS</p>

                    <h2 className="trainer-title">
                        OUR MOST EXPRIENCED <br />  TRAINERS
                    </h2>
                </div>

                <button className="btn nav-last-hover-button hover-button trainer-btn">
                    <p className="btn-text services-btn">MORE SERVICES</p>
                </button>
            </div>

            <div className="trainer-cards">
                {trainers.map((t) => (
                    <HoverCard
                        key={t.id}
                        name={t.name}
                        role={t.role}
                        img={t.img}
                    />
                ))}
            </div>
        </div>
    );
}

function HoverCard({ img, name, role }) {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="trainer-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="trainer-imageWrapper">
                <img src={img} alt={name} className="trainer-image" />
                <div className="trainer-r">
                    <div className="trainer-line"></div>
                    <p className="trainer-role">{role}</p>
                    <h3 className="trainer-name">{name}</h3>
                </div>
            </div>

            <div
                className={`trainer-redOverlay ${hover ? "active" : ""}`}
            ></div>

            <div className={`trainer-hoverContent ${hover ? "active" : ""}`}>
                <div className="trainer-line"></div>
                <p className="trainer-role">{role}</p>
                <h3 className="trainer-name">{name}</h3>

                <ul className="trainer-socialList">
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                    <li><a href="#"><FaGlobe /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Trainer;