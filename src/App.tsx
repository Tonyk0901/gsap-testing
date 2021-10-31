import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.scss";

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  // const q = gsap.utils.selector(containerRef);

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          // start: "top 200px", // trigger 시작 지점, viewport에서 시작될 위치
          markers: true, // 개발할 때 켜놓으면 start 지점 볼 수 있음
          end: "end top",
          pin: true, // 스크롤 내려가도 그 자리에 고정
          scrub: true, // 애니메이션 자동으로 되는게 아니라 스크롤 위치에 따라 고정
        },
      })
      .to(".user", { scale: 0.2 }, 0)
      .to(".user1", { scale: 0.4, y: 200, x: 500, opacity: 1 }, 0)
      .to(".user2", { scale: 0.4, y: 200, opacity: 1 }, 0)
      .to(".user3", { scale: 0.4, y: 200, x: -500 }, 0)
      .to(".zoom", { opacity: 1 }, 0);
  }, []);

  return (
    <div>
      {/* <div className="box" ref={boxRef}>
        Hello
      </div> */}

      <div className="online-class" ref={containerRef}>
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user1 zoom-user" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user2 zoom-user" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user3 zoom-user" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/Zoom.png" className="zoom" alt="zoom" />
      </div>
    </div>
  );
};

export default App;
