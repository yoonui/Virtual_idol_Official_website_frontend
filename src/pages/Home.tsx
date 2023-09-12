import test1 from "../image/test1.jpg";
import test2 from "../image/test2.jpg";
import test3 from "../image/test3.jpg";

const Home = () => {
  return (
    <div className="w-[100%] text-center flex justify-center">
      <div className="py-20">
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
        <div className="px-10 py-10 text-left">
          <div>설명 들어갈 곳</div>
          {/* <div>
            실험실에서 자란 5명의 아이들... 그들은 실험실에서 온갖 고통스러운
            훈련과 실험을 받는다.
          </div>
          <div>
            힘든 일상에도 불구하고 그들을 버티게 하는 것은, 부모처럼 그들을
            대해주는 연구원 A.
          </div>
          <div>그러던 어느날... 갑자기 사라진 ■■.</div> */}
        </div>
      </div>
    </div>
  );
};

/* 그 5명의 애들이 정부기관에서 하던 실험실? 개체 혹은 고아들을 군수무기로 사용하려고 데려와서 걔네들한테 이것저것 훈련과 실험을 시켯음
하지만 바깥세계에 대해서는 일절 말을 안해주고 통신매체나 여러 매체들도 일체 안보여줌
근데 그 실험실에서 걔네들한테 유일하게 잘해준 사람이 잇엇단말야
그 사람(a라고 부를게)이 얘네들한테 라디오를 몰래줫어
그래서 놀것이 없는 이 다섯아이들이 이 라디오에 나오는 노래도 몰래흥얼거리면서 지들끼리 놀앗단말이지
그러면서 지금그리고잇는 4명의 애들을 뺀 나머지 한명(이름 안정해져서 b라고 부를게)이 자기도 이런 노래를 부르고싶다고 얘기를 한단말야
그러면서 서로서로 친해지고 각별한 사이가 된단말이지
그런데 어느날 b가 연구원들 손에 이끌려서 실험실을 나가게 되는데 며칠이 지나도 안 돌아오는거
심지어 이 4명이 자기들이 어떤 이유로 여기에 들어왓고 앞으로 이곳에 있다가 어떻게 되는지 알게됨
그리고 b가 사라졌다는걸 알게되면서
이 4명이 실험실을 탈출하고, b가 좋아햇던 가수가 되서 그 애를 찾는다는 내용쓰 근데 그 과정에서 a가 도와주지만
나중에 a가 흑막이엇고...이 친구들은 a에게 배신감을 느끼게되고 */
export default Home;
