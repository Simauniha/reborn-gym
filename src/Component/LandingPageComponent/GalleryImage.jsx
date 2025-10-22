import HoverImage from './HoverImage'
import { FaArrowRight } from "react-icons/fa";

function GalleryImage() {
    const images = [
        {
            src: "/images/gallery1.png",
            title: "Best fitness gallery",
            subtitle: "Fitness, Body",
        },
        {
            src: "/images/gallery2.png",
            title: "Stay Strong",
            subtitle: "Training, Focus",
        },
        {
            src: "/images/gallery2.png",
            title: "Push Harder",
            subtitle: "Gym, Workout",
        },
        {
            src: "/images/gallery2.png",
            title: "Lift Heavy",
            subtitle: "Power, Muscle",
        },
        {
            src: "/images/gallery2.png",
            title: "Never Quit",
            subtitle: "Motivation, Life",
        },
    ];

    return (
        <>
            <div className="row ">
                <div className="col-sm-6 gallery-container">
                    <div className="about-img1 gallery-item">
                        <HoverImage src="/images/gallery1.png" alt="" />
                        <div className="overlay">
                            <FaArrowRight className="arrow-icon" size={50} />
                            <div className="text">
                                <h3>Best fitness gallery</h3>
                                <p>Fitness, Body</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 galley-container" style={{paddingTop:"20px"}}>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="about-img2 gallery-item">
                                <HoverImage src="/images/gallery2.png" alt="" />
                                <div className="overlay">
                                    <FaArrowRight className="arrow-icon" size={50} />
                                    <div className="text">
                                        <h3>Best fitness gallery</h3>
                                        <p>Fitness, Body</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-img2 gallery-item">
                                <HoverImage src="/images/gallery3.png" alt="" />
                                <div className="overlay">
                                    <FaArrowRight className="arrow-icon" size={50} />
                                    <div className="text">
                                        <h3>Best fitness gallery</h3>
                                        <p>Fitness, Body</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6" >
                            <div className="about-img2 gallery-item">
                                <HoverImage src="/images/gallery4.png" alt="" />
                                <div className="overlay">
                                    <FaArrowRight className="arrow-icon" size={50} />
                                    <div className="text">
                                        <h3>Best fitness gallery</h3>
                                        <p>Fitness, Body</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-img2 gallery-item">
                                <HoverImage src="/images/gallery5.png" alt="" />
                                <div className="overlay">
                                    <FaArrowRight className="arrow-icon" size={50} />
                                    <div className="text">
                                        <h3>Best fitness gallery</h3>
                                        <p>Fitness, Body</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryImage