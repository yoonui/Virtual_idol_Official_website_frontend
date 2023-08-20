const Header = () => {
  return (
    <div className="w-[100%] bg-[#393E46] justify-center flex items-center">
      <div className="w-[70%]">
        <div className="text-center my-8"> 여기에 로고가 들어갑니다 </div>

        <div className="text-[#EEEEEE] font-bold text-2xl justify-between flex">
          <button className="relative group p-4">
            <span>HOME</span>
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-[#00ADB5] transition-all group-hover:w-full"></span>
          </button>
          <button className="relative group p-4">
            <span>PROFILE</span>
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-[#00ADB5] transition-all group-hover:w-full"></span>
          </button>
          <button className="relative group p-4">
            <span>GALLERY</span>
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-[#00ADB5] transition-all group-hover:w-full"></span>
          </button>
          <button className="relative group p-4">
            <span>ALBUM</span>
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-[#00ADB5] transition-all group-hover:w-full"></span>
          </button>
          <button className="relative group p-4">
            <span>BOARD</span>
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-[#00ADB5] transition-all group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
