import React from 'react';

function Profile() {
  return (
    <div className='container flex absolute right-0 bg-[#f0f9f0] w-[85%] h-full '>
      <div className='border-r-[0.1px] border-gray-400 w-[72%] p-[3dvw] h-full'>
      <div className='flex justify-between items-center w-[55dvw]'>
      <input 
        type='text'
        placeholder={`Search for course`}
        className='h-[3.3dvw] border-[0.5px] bg-transparent border-gray-300 rounded-lg p-4 w-[35dvw]' 
      />
      <button className='p-[0.9dvw] rounded-md bg-[#ff8400] text-[#fafffa] text-[0.9dvw]'>
        Add New  +
      </button>
      </div>

      <div className='flex w-[55dvw] h-[26dvh] bg-[#28595a] mt-[3.5dvh] rounded-3xl pr-[1dvw] box-border'>
          <img 
            src="/images/profile-vector.png" 
            alt="" 
            className='aspect-auto h-[36vh] flex relative left-[-3dvw]' 
          />
          <div className='flex flex-col justify-center items-start h-full w-full ml-[-3dvw]'>
            <span className='text-[#fafffa] text-[1dvw] mb-[-0.8dvw]'>Welcome back</span>
            <h1 className='text-[4dvw] text-[#fafffa]'>John Snow</h1>
            <p className='text-[#fafffa] text-sm text-[1dvw] mt-[0.8dvw]'>Go back to the courses &rarr;</p>
          </div>
        </div>
        <div className='flex justify-between items-center w-[55dvw] mt-[10dvh]'>
          <div className="w-[32.5dvw] h-[30dvh] border-[1px] border-gray-300 rounded-2xl p-[1.5dvw]">
            <div className='flex justify-between items-center'>
              <h2 className='text-bold text-[1.2dvw]'>Today's Schedule</h2>
              <span className='text-[0.8dvw]' >View all &rarr;</span>
            </div>
            </div>
          <div className="w-[20dvw] h-[30dvh] border-[1px] border-gray-300 rounded-2xl p-[1.5dvw]">
          <div className='flex justify-between items-center'>
              <h2 className='text-bold text-[1.2dvw]'>Last 30 days</h2>
            </div>
            </div>
        </div>
          <div className="w-[55dvw] h-[30dvh] border-[1px] border-gray-300 rounded-2xl mt-[2dvw] p-[1.5dvw]">Leaderboard</div>
      </div>
      <div>
        <h1 className='text-bold'>Profile</h1>
      </div>
    </div>
  );
}

export default Profile;