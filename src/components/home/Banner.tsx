
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-emboga-accent py-3 overflow-hidden">
      <div className="animate-banner-slide whitespace-nowrap">
        <span className="inline-block mx-4 text-lg font-semibold text-emboga-dark">
          Fresh produce at your doorstep
        </span>
        <span className="inline-block mx-4 text-lg font-semibold text-emboga-dark">
          Same-day delivery on orders before 10 AM
        </span>
        <span className="inline-block mx-4 text-lg font-semibold text-emboga-dark">
          Free delivery on orders above KSh 2,000
        </span>
        <span className="inline-block mx-4 text-lg font-semibold text-emboga-dark">
          Fresh from farm to table
        </span>
        <span className="inline-block mx-4 text-lg font-semibold text-emboga-dark">
          Supporting local farmers
        </span>
      </div>
    </div>
  );
};

export default Banner;
