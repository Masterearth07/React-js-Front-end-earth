import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';

const Background = (props) => {
  const myRef = useRef(null);

  useEffect(() => {
    const net = NET({
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x6e01,
      backgroundColor: 0x0,
      points: 12.00,
      maxDistance: 24.00,
      spacing: 20.00
    });

    return () => {
      if (net) {
        net.destroy();
      }
    };
  }, []);

  return <div ref={myRef}>{props.children}</div>;
};

export default Background;