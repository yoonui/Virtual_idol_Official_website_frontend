import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const headerArr = [
    { name: "HOME", link: "/" },
    { name: "PROFILE", link: "/" },
    { name: "GALLERY", link: "/" },
    { name: "ALBUM", link: "/" },
    { name: "BOARD", link: "/" },
  ];

  return (
    <div className="w-[100%] bg-symbolic-color text-symbolic-color-black justify-center flex items-center">
      <div className="w-[70%]">
        <div className="flex justify-end my-4">
          <button className="mr-4 font-bold hover:text-symbolic-color-black-dark hover:underline">
            로그인
          </button>
          <button className="px-2 py-1 font-bold border-2 rounded border-symbolic-color-darkgray-light text-symbolic-color-darkgray-light hover:border-symbolic-color-darkgray hover:text-symbolic-color-darkgray">
            회원가입
          </button>
        </div>
        <div className="my-10 text-center">여기에 아이돌 로고가 들어갑니다</div>

        <div className="flex justify-between text-2xl font-bold">
          {headerArr.map((item, index) => {
            return (
              <button
                className="relative p-4 group"
                onClick={() => {
                  navigate(item.link);
                }}
              >
                <span>{item.name}</span>
                <span className="absolute left-0 w-0 h-2 transition-all -bottom-0 bg-symbolic-color-blue group-hover:w-full"></span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
