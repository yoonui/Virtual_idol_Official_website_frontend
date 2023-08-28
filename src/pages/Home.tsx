import test1 from "../image/test1.jpg";
import test2 from "../image/test2.jpg";
import test3 from "../image/test3.jpg";

const Home = () => {
  return (
    <div className="w-[100%] px-20 py-10 flex justify-center">
      <div className="flex overflow-hidden">
        <div className="w-[300px] h-[500px] overflow-hidden">
          <img
            alt="test1"
            className="w-[300px] h-[500px] transition-all duration-150 hover:transform hover:scale-150"
            src={test1}
          />
        </div>

        <div className="w-[300px] h-[500px] overflow-hidden">
          <img
            alt="test2"
            className="w-[300px] h-[500px] transition-all duration-150 hover:transform hover:scale-150"
            src={test2}
          />
        </div>

        <div className="w-[300px] h-[500px] overflow-hidden">
          <img
            alt="test3"
            className="w-[300px] h-[500px] transition-all duration-150 hover:transform hover:scale-150"
            src={test3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
