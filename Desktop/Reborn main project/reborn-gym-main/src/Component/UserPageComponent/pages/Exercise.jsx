import "../../../Styles/UserDashboard.css"
import { FaRunning, FaDumbbell, FaBiking, FaHeartbeat } from "react-icons/fa";

function Exercise() {
  const workouts = [
    {
      title: "Chest & Triceps",
      icon: <FaDumbbell />,
      level: "Intermediate",
      color: "#ff3b3b",
      list: ["Bench Press – 4 sets", "Incline DB Press – 3 sets", "Cable Fly – 3 sets"],
    },
    {
      title: "Back & Biceps",
      icon: <FaRunning />,
      level: "Advanced",
      color: "#3b82f6",
      list: ["Deadlift – 4 sets", "Lat Pulldown – 3 sets", "Seated Row – 3 sets"],
    },
    {
      title: "Leg Strength",
      icon: <FaBiking />,
      level: "Beginner",
      color: "#22c55e",
      list: ["Squats – 4 sets", "Leg Press – 3 sets", "Calf Raises – 4 sets"],
    },
    {
      title: "Cardio & Core",
      icon: <FaHeartbeat />,
      level: "Intermediate",
      color: "#eab308",
      list: ["Plank – 3 min", "Mountain Climber – 3 sets", "Cycle – 15 mins"],
    },
  ];

  return (
    <div className="exercise-page">

      {/* Header section */}
      <div className="exercise-header-card">
        <h2 className="exercise-title">Your Workout Routine</h2>
        <p className="exercise-desc">Customized training plan based on your fitness goals.</p>
      </div>

      {/* Weekly stats */}
      <div className="exercise-stats-grid">
        <div className="exercise-stat">
          <h3>5</h3>
          <p>Workouts this week</p>
        </div>
        <div className="exercise-stat">
          <h3>684</h3>
          <p>Calories burned</p>
        </div>
        <div className="exercise-stat">
          <h3>3h 21m</h3>
          <p>Active time</p>
        </div>
      </div>

      {/* Workout Cards */}
      <div className="exercise-grid-advanced">
        {workouts.map((w, i) => (
          <div className="exercise-card-adv" key={i}>
            <div className="exercise-icon" style={{ background: w.color + "22", color: w.color }}>
              {w.icon}
            </div>

            <h4>{w.title}</h4>
            <p className="level-tag" style={{ borderColor: w.color, color: w.color }}>
              {w.level}
            </p>

            <ul>
              {w.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button className="start-btn">Start</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercise;
