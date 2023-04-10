import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInOnVisibleProps {
  children: React.ReactNode;
}

const FadeInOnVisible: React.FC<FadeInOnVisibleProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnVisible;