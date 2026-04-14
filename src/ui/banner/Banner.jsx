import React from 'react';

const Banner = () => {
    return (
      <div className="w-full max-w-277.5 mx-auto text-center mt-20 my-10 px-5 xl:px-0">
        <h2 className="text-[#1F2937] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Friends to keep close in your life
        </h2>
        <p className="text-[#64748B] mb-4 lg:mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] font-semibold text-white">+ Add Friends</button>
      </div>
    );
};

export default Banner;