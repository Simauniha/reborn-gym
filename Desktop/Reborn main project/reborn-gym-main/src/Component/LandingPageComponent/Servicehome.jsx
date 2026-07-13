import { CiDumbbell } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiStopwatch } from "react-icons/gi";



const services = [
    {
        icon: <CiDumbbell className="service-icon" style={{ height: 50, width: 100 }} />,
        title: "QUALITY EQUIPMENT",
        text: "The sea freight service has grown considerably in recent years. We spend timetting to kn."
    },
    {
        icon: <FaHandHoldingHeart className="service-icon" style={{ height: 50, width: 100 }} />,
        title: "HEALTH CARING",
        text: "The sea freight service has grown considerably in recent years. We spend timetting to kn."
    },
    {
        icon: <GiStopwatch className="service-icon" style={{ height: 50, width: 100 }} />,
        title: "GYM STRATEGIES",
        text: "The sea freight service has grown considerably in recent years. We spend timetting to kn."
    }
];

function Services() {
    return (
        <>
            <div className="row service-img-conatainer mt-5 mb-5">
                <div className="col-sm-2"></div>
                <div className="col-sm-8" style={{padding:"46px"}}>
                    <div className="d-flex">
                        <div>
                            <p className="section-subtitle">OUR SERVICES FOR YOU</p>
                            <h1 className="text-white">
                                PUSH YOUR LIMITS FORWARD <br /> WE OFFER TO YOU
                            </h1>
                        </div>
                        <div className="btn-wrapper">
                            <button className="Gym2 btn nav-last-hover-button  hover-button mt-5">
                                <p className="btn-text services-btn">MORE SERVICES</p>
                            </button>
                        </div>
                    </div>

                    <div className="m-2 mt-5 d-flex">
                        {services.map((service, index) => (
                            <div className="col-sm-4 mb-4" key={index}>
                                <div className="service-card">
                                    <div className="row d-flex align-items-center justify-content-center py-3">
                                        {service.icon}
                                    </div>
                                    <h5 className="service-title">{service.title}</h5>
                                    <p className="service-text">{service.text}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>

        </>)
}


export default Services;
