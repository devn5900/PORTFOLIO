import React from "react";
import Typewriter from "typewriter-effect";

const TypingText = ({ text }) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(text)

          .pauseFor(2500)
          .changeDeleteSpeed(3000)
          .deleteAll()

          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
        deleteSpeed: 3000,
      }}
    />
  );
};

export default TypingText;
