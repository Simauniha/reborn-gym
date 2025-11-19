import "../../../Styles/UserDashboard.css"
import { FaAppleAlt, FaEgg, FaBreadSlice, FaDrumstickBite, FaIceCream } from "react-icons/fa";

function Diet_Plan() {
  const meals = [
    {
      name: "Breakfast",
      icon: <FaEgg />,
      color: "#f59e0b",
      calories: 380,
      items: ["2 Eggs Omelette", "Brown Bread (2 slices)", "1 Glass Milk"],
    },
    {
      name: "Lunch",
      icon: <FaDrumstickBite />,
      color: "#ef4444",
      calories: 520,
      items: ["Grilled Chicken", "Rice (1 bowl)", "Green Salad"],
    },
    {
      name: "Snacks",
      icon: <FaAppleAlt />,
      color: "#22c55e",
      calories: 160,
      items: ["1 Apple", "Dry Fruits (handful)", "Green Tea"],
    },
    {
      name: "Dinner",
      icon: <FaBreadSlice />,
      color: "#3b82f6",
      calories: 460,
      items: ["Chapati (2)", "Paneer Curry", "Boiled Veggies"],
    },
    {
      name: "Cheat Meal",
      icon: <FaIceCream />,
      color: "#a855f7",
      calories: 270,
      items: ["Ice Cream (1 scoop)", "Chocolate (small piece)"],
    },
  ];

  return (
    <div className="diet-page">

      {/* Header */}
      <div className="diet-header-card">
        <h2 className="diet-title">Your Diet Plan</h2>
        <p className="diet-desc">
          Personalized meal plan to accelerate your fitness transformation.
        </p>
      </div>

      <div className="diet-macro-grid">
        <div className="macro-box">
          <h3>1800 kcal</h3>
          <p>Daily Target</p>
        </div>
        <div className="macro-box">
          <h3>112g</h3>
          <p>Protein</p>
        </div>
        <div className="macro-box">
          <h3>140g</h3>
          <p>Carbs</p>
        </div>
        <div className="macro-box">
          <h3>55g</h3>
          <p>Fat</p>
        </div>
      </div>

      {/* Meal Cards */}
      <div className="diet-grid-advanced">
        {meals.map((m, i) => (
          <div className="diet-card-adv" key={i}>
            <div
              className="diet-icon"
              style={{ background: m.color + "22", color: m.color }}
            >
              {m.icon}
            </div>

            <h4>{m.name}</h4>
            <p className="calorie-tag" style={{ color: m.color }}>
              {m.calories} kcal
            </p>

            <ul>
              {m.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button className="start-btn">View Details</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Diet_Plan;
