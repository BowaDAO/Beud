import React from "react";

const Copyright = () => {
  const date = new Date().getFullYear();

  return (
    <p className="text-white text-base md:text-lg font-medium">
      Copyright &copy; {date} Beud. All Rights Reserved
    </p>
  );
};

export default Copyright;
