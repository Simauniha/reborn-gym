import "../../../Styles/UserDashboard.css"
import { Line } from "react-chartjs-2";
import {
  FaFire,
  FaHeartbeat,
  FaChartLine,
  FaWeight,
  FaRunning,
} from "react-icons/fa";

function Analysis() {
  const weeklyWorkoutData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Workout Minutes",
        data: [40, 30, 45, 60, 35, 50, 20],
        fill: false,
        borderColor: "#d21b1b",
        tension: 0.3,
        borderWidth: 3,
      },
    ],
  };

  const calorieBurnData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Calories Burned",
        data: [300, 280, 350, 400, 290, 330, 200],
        fill: false,
        borderColor: "#292929",
        tension: 0.3,
        borderWidth: 3,
      },
    ],
  };

  const bmiValue = 22.3;

  return (
    <div className="analysis-page">

      {/* HEADER */}
      <div className="analysis-header-card">
        <h2 className="analysis-title">Fitness Analysis</h2>
        <p className="analysis-desc">
          Track your overall progress, performance & weekly activity.
        </p>
      </div>
      
      <div className="analysis-metric-grid">
        <div className="analysis-metric-box">
          <FaRunning className="metric-icon" />
          <h3>280 min</h3>
          <p>Weekly Workout</p>
        </div>

        <div className="analysis-metric-box">
          <FaFire className="metric-icon" />
          <h3>2180 kcal</h3>
          <p>Calories Burned</p>
        </div>

        <div className="analysis-metric-box">
          <FaHeartbeat className="metric-icon" />
          <h3>72 bpm</h3>
          <p>Avg Heart Rate</p>
        </div>

        <div className="analysis-metric-box">
          <FaWeight className="metric-icon" />
          <h3>{bmiValue}</h3>
          <p>BMI Score</p>
        </div>
      </div>

      {/* CHARTS SECTION */}
      <div className="analysis-chart-grid">
        <div className="chart-card">
          <h4>Weekly Workout Activity</h4>
          <Line data={weeklyWorkoutData} />
        </div>

        <div className="chart-card">
          <h4>Calories Burned</h4>
          <Line data={calorieBurnData} />
        </div>
      </div>
    </div>
  );
}

export default Analysis;
