import React from "react";
import { useState } from "react";
import { icons } from "../constants";

const FAQ = ({ answer, question }) => {
  const [show, setShow] = useState(false);

  //Function that opens and closes a FAQ card
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4 md:w-[786px] lg:w-[924px] rounded-[5px] bg-primary px-4 py-6 ">
      <div
        onClick={handleShow}
        className="flex justify-between items-center lg:gap-3  gap-2"
      >
        <h6 className="text-black text-base md:text-lg">{question}</h6>
        <button>
          <img
            src={show ? icons.minus : icons.plus}
            className="md:h-6 md:w-6 h-4 w-6 object-contain"
          />
        </button>
      </div>

      {show && <p className="text-black text-base md:text-lg">{answer}</p>}
    </div>
  );
};

export default FAQ;
