import HoverImage from './HoverImage'

function Trainer() {
    return (
        <>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                    <div className="section-title">
                        <h5>OUR TEAM MEMBERS</h5>
                        <h1><strong> OUR MOST EXPERIENCED <br /> TRAINERS</strong>
                           
                        </h1>
                    </div>
                </div>
                <div className="col-sm-4">
                    <button className="hi Trainer btn nav-last-hover-button  hover-button mt-5">
                        <p className="btn-text trainer">BECOME A MEMBER</p>
                    </button>
                </div>
                <div className="col-sm-2"></div>


            </div>
            <div className="row">
                <div className="col-sm-4 team-img1">
                    <HoverImage src="/images/team1.png" alt="Team1" />
                    <div className="team-info">
                        <p>Creative Director</p>
                        <h5>John Sunsev</h5>
                    </div>
                </div>
                <div className="col-sm-4 team-img2">
                    <HoverImage src="/images/team2.png" alt="Team2" />
                    <div className="team-info">
                        <p>Creative Director</p>
                        <h5>John Sunsev</h5>
                    </div>
                </div>
                <div className="col-sm-4 team-img3">
                    <HoverImage src="/images/team3.png" alt="Team3" />
                    <div className="team-info">
                        <p>Creative Director</p>
                        <h5>John Sunsev</h5>
                    </div>
                </div>
            </div>
        </>
    )
}





export default Trainer;