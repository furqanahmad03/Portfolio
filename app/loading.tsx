import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-80px)] text-center">
      <div className="mx-auto w-screen max-w-4xl px-4 sm:px-9 xl:max-w-6xl xl:px-0">
        <div className="-mt-10 md:-mt-20">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Loading;
