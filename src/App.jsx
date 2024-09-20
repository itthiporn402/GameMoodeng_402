import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(10);
  const [imageSize, setImageSize] = useState(200); 
  const [imageSrc, setImageSrc] = useState("https://i.ibb.co/gFYxVpv/moodeng.jpg"); 

  const increaseLevel = (amount) => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + amount;
      if (newLevel > 100) {
        setImageSrc("https://i.ibb.co/c8NH0zX/onon.jpg"); 
      }
      return newLevel;
    });
    setImageSize((prevSize) => prevSize + amount); 
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "#f0f8ff", padding: "20px" }} className="your-class"> {/* จัดให้อยู่ตรงกลาง */}
      <h1 style={{ color: "#78A3D4", fontSize: "48px", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>เกมเลี้ยงหมูเด้ง</h1> {/* หัวข้ออยู่ตรงกลาง */}
      <h2 style={{ fontSize: "32px", color: "#2f4f4f" }}>Level {level}</h2>

      {/* แถบ Level */} 
      <div style={{ width: "300px", height: "20px", backgroundColor: "#ccc", margin: "20px auto", borderRadius: "10px" }}>
        <div style={{
          width: `${level > 100 ? 100 : level}%`,
          height: "100%",
          backgroundColor: level > 100 ? "#ff4500" : "#32cd32",
          borderRadius: "10px"
        }}></div>
      </div>

      <img 
        src={imageSrc} 
        alt={level > 100 ? "หมูเด้งใหญ่" : "หมูเด้งปกติ"} 
        style={{ 
          width: `${imageSize}px`, 
          height: `${imageSize}px`,
          transition: "all 0.3s ease", 
          borderRadius: "50%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
        }} 
      /> {/* รูปหมูเด้งอยู่ตรงกลาง */}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => increaseLevel(5)} style={buttonStyle}>
          <img 
            src="https://i.ibb.co/my0tMQL/watermelonn.png" 
            alt="แตงโม" 
            style={{ width: '50px', height: '50px' }} 
          />
          ป้อนแตงโม (เพิ่ม 5)
        </button>

        <button onClick={() => increaseLevel(10)} style={buttonStyle}>
          <img 
            src="https://i.ibb.co/vdmkJrC/pumpkinn.png" 
            alt="ฟักทอง" 
            style={{ width: '50px', height: '50px' }} 
          />
          ป้อนฟักทอง (เพิ่ม 10)
        </button>

        <button onClick={() => increaseLevel(20)} style={buttonStyle}>
          <img 
            src="https://i.ibb.co/nL2bqn8/mukata.png" 
            alt="หมูกระทะ" 
            style={{ width: '50px', height: '50px' }} 
          />
          ป้อนหมูกระทะ (เพิ่ม 20)
        </button>
      </div>
    </div>
  );
}

//ปุ่ม
const buttonStyle = {
  margin: "5px",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#87ceeb",
  border: "none",
  cursor: "pointer",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "background-color 0.2s ease",
  display: "inline-block",
};
