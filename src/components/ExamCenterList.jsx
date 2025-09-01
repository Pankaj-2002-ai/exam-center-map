import React from "react";

function ExamCenterList({ centers, onCenterClick, selectedCenter }) {
  if (centers.length === 0) {
    return <div className="text-[#0A2540] text-[20px] font-medium font-inter">No exam centers found for this city.</div>;
  }

  return (
    <div style={{ padding: 10 }}>
      <h3 className="text-[#0A2540] text-[20px] font-semibold font-inter">Exam Centers</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {centers.map((center, i) => {
          const isSelected = selectedCenter && selectedCenter.name === center.name;
          return (
            <li
              key={i}
              onClick={() => onCenterClick(center)}
              className={`
                cursor-pointer 
                my-[10px] 
                p-2 
                rounded
                font-inter
                text-[15px]
                ${isSelected ? "bg-[#edeff1] shadow-[0_0_5px_#3d8278]" : "bg-transparent shadow-none"}
              `}
            >
              <div className="font-inter font-semibold text-[15px] text-[#0a2540]">{center.name}</div>
              <div style={{ fontSize: 12, color: "#555" }}>
                Lat: {center.lat.toFixed(4)}, Lng: {center.lng.toFixed(4)}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExamCenterList;
