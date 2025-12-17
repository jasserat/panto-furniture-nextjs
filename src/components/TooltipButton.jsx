'use client'

import { FaCheck } from 'react-icons/fa';

const TooltipButton = ({ position = 'bottom', colors = ['bg-red-700', 'bg-green-700', 'bg-blue-700'], checkedIndex = null }) => {
  // Map position prop to different classes for positioning the tooltip and arrow
  const positionClasses = {
    bottom: {
      tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-t',
    },
    top: {
      tooltip: 'top-full left-1/2 transform -translate-x-1/2 mt-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -top-2 border-b',
    },
    left: {
      tooltip: 'left-full top-1/2 transform -translate-y-1/2 ml-3',
      arrow: 'top-1/2 transform -translate-y-1/2 -left-2 border-r',
    },
    right: {
      tooltip: 'right-full top-1/2 transform -translate-y-1/2 mr-3',
      arrow: 'top-1/2 transform -translate-y-1/2 -right-2 border-l',
    },
  };

  return (
    <div className='relative group'>
      <button className='relative p-4 bg-white/25 border border-1 border-white text-white text-xl rounded-full'>
        {/* Tooltip */}
        <div
          className={`hidden absolute px-3 py-2 gap-2 rounded-full bg-white/25 border border-white shadow-md group-hover:flex items-center ${positionClasses[position].tooltip}`}
        >
          {/* Colored dots */}
          {colors.map((color, index) => (
            <div key={index} className={`size-6 ${color} border border-white rounded-full relative flex items-center justify-center`}>
              {checkedIndex === index && (
                <FaCheck className="text-white text-xs" />
              )}
            </div>
          ))}
          {/* Tooltip arrow - rounded */}
          <div
            className={`absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 ${positionClasses[position].arrow} border-1 border-t-white/35`}
          ></div>
        </div>
      </button>
    </div>
  );
};

export default TooltipButton;
