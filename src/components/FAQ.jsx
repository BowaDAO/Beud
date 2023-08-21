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
    <article className="md:w-[786px] lg:w-[924px]">
      <div
        onClick={handleShow}
        className="flex justify-between items-center lg:gap-3 bg-primary px-4 py-2 rounded-[5px] h-16 md:h-[72px] lg:h-[80px] gap-2"
      >
        <h6 className="text-black text-base md:text-lg">{question}</h6>
        <button>
          <img
            src={show ? icons.minus : icons.plus}
            className="md:h-6 md:w-6 h-4 w-6"
          />
        </button>
      </div>

      {show && (
        <article className=" md:py-8 px-4 py-6 bg-main rounded-[5px]">
          <p className="text-light text-base md:text-lg">{answer}</p>
        </article>
      )}
    </article>
  );
};

export default FAQ;
