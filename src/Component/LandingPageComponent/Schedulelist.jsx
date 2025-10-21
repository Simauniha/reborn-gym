
import Footer from "./Footer"
const Schedulelist = ()=>{
  return (

    <>
     <div className="schedule-list">
                        <h5>OUR TEAM MEMBERS</h5>
                       <h2><strong>SELECT THE PERFECT TIME</strong><h3 ><strong>YOU NEED NOW</strong></h3> </h2>
                    </div>

    <div className="App mt-5">
     
      <ul className="nav justify-content-center days-nav py-3" id="daysNav" role="tablist">
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#saturday" type="button">
            Saturday
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#sunday" type="button">
            Sunday
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#monday" type="button">
            Monday
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tuesday" type="button">
            Tuesday
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#wednesday" type="button">
            Wednesday
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#thursday" type="button">
            Thursday
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#friday" type="button">
            Friday
          </button>
        </li>
      </ul>

     
      <div className="container my-4">
        <div className="tab-content">
         
          <div className="tab-pane fade" id="saturday">
            <div className="row g-3">
              <div className="col-md"><div className="schedule-card card"><span className="time">7am - 9am</span><h5>Yoga</h5><p>by Anna Smith</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">10am - 12pm</span><h5>Crossfit</h5><p>by John Doe</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">3pm - 5pm</span><h5>Dance</h5><p>by Emma Stone</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">6pm - 8pm</span><h5>Boxing</h5><p>by David Kim</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">8pm - 9pm</span><h5>Meditation</h5><p>by Sara Lee</p></div></div>
            </div>
          </div>

         
          <div className="tab-pane fade" id="sunday">
            <div className="row g-3">
              <div className="col-md"><div className="schedule-card card"><span className="time">8am - 10am</span><h5>Aerobics</h5><p>by Emily Rose</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">4pm - 6pm</span><h5>Zumba</h5><p>by Michael Lee</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">6pm - 7pm</span><h5>Yoga</h5><p>by Anna Smith</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">7pm - 9pm</span><h5>Cardio</h5><p>by Alex Brown</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">9pm - 10pm</span><h5>Meditation</h5><p>by Sarah White</p></div></div>
            </div>
          </div>

         
          <div className="tab-pane fade show active" id="monday">
            <div className="row g-3">
              <div className="col-md"><div className="schedule-card card"><span className="time">6am - 8am</span><h5>Kick Boxing</h5><p>by Jhos Kusam</p></div></div>
              <div className="col-md"><div className="schedule-card card active"><span className="time">6am - 8am</span><h5>Kick Boxing</h5><p>by Jhos Kusam</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">6am - 8am</span><h5>Kick Boxing</h5><p>by Jhos Kusam</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">6am - 8am</span><h5>Kick Boxing</h5><p>by Jhos Kusam</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">6am - 8am</span><h5>Kick Boxing</h5><p>by Jhos Kusam</p></div></div>
            </div>
          </div>

         
          <div className="tab-pane fade" id="tuesday">
            <div className="row g-3">
              <div className="col-md"><div className="schedule-card card"><span className="time">7am - 9am</span><h5>Strength Training</h5><p>by Alex Brown</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">10am - 12pm</span><h5>Yoga</h5><p>by Anna Smith</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">1pm - 3pm</span><h5>Pilates</h5><p>by Sarah White</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">5pm - 7pm</span><h5>Dance</h5><p>by Emma Stone</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">7pm - 8pm</span><h5>Meditation</h5><p>by David Kim</p></div></div>
            </div>
          </div>

          
          <div className="tab-pane fade" id="wednesday">
            <div className="row g-3">
              <div className="col-md"><div className="schedule-card card"><span className="time">6pm - 8pm</span><h5>Pilates</h5><p>by Sarah White</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">8pm - 9pm</span><h5>Boxing</h5><p>by David Kim</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">9pm - 10pm</span><h5>Yoga</h5><p>by Anna Smith</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">10pm - 11pm</span><h5>Cardio</h5><p>by Alex Brown</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">11pm - 12am</span><h5>Meditation</h5><p>by John Doe</p></div></div>
            </div>
          </div>

         
          <div className="tab-pane fade" id="thursday">
            <div className="row g-3">
              <div className="col-md"><div className="schedule-card card"><span className="time">5am - 7am</span><h5>Meditation</h5><p>by David Kim</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">7am - 9am</span><h5>Pilates</h5><p>by Sarah White</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">9am - 10am</span><h5>Crossfit</h5><p>by John Doe</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">11am - 1pm</span><h5>Dance</h5><p>by Emma Stone</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">3pm - 5pm</span><h5>Yoga</h5><p>by Anna Smith</p></div></div>
            </div>
          </div>

          
          <div className="tab-pane fade" id="friday">
            <div className="row g-3">
              <div className="col-md"><div className="schedule-card card"><span className="time">5pm - 7pm</span><h5>Zumba</h5><p>by John Doe</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">7pm - 8pm</span><h5>Pilates</h5><p>by Sarah White</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">8pm - 9pm</span><h5>Dance</h5><p>by Emma Stone</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">9pm - 10pm</span><h5>Boxing</h5><p>by David Kim</p></div></div>
              <div className="col-md"><div className="schedule-card card"><span className="time">10pm - 11pm</span><h5>Cardio</h5><p>by Alex Brown</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  

   <Footer></Footer>
    </>
  );
};

export default Schedulelist;