import React from "react";
import AnimatedNumbers from "react-animated-numbers";
// import TabButton from '@/'

const TestAnimation = () => {
  return (
    <div>
      <AnimatedNumbers
        includeComma
        animateToNumber={12345}
        locale="en-US"
        configs={[{ mass: 1, tension: 180, friction: 12 }]}
      />
    </div>
  );
};

export default TestAnimation;
