import React from "react";

const DashboardCards = ({ bg, title, value, icon }) => {
  const color = {
    backgroundColor: bg,
  };
  return (
    <div
      className="flex w-full rounded-3xl justify-evenly items-center h-full m-0 p-8"
      style={color}
    >
      <div className="p-3 border-2 border-white border-solid rounded-xl">
        {icon}
      </div>
      <div className="text-white">
        <p className="">{title}</p>
        <p className="text-right font-bold text-3xl mt-2">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
