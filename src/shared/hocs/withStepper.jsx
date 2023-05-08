import React, { useState } from 'react';

export default function withStepper(components) {
  const Stepper = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const CurrentComponent = components[currentIndex];

    const goNext = () => {
      if (currentIndex < components.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const goPrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    return <CurrentComponent {...props} stepControl={{ goNext, goPrev }} />;
  };
  return Stepper;
}
