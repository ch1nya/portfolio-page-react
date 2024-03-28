import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Frontend developer", "Product manager", "Just a kind person"],
          autoStart: true,
          loop: true,
          delay: 80,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
};

export default Type;
