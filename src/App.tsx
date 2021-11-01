import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLImageElement>(null);
  const user1Ref = useRef<HTMLImageElement>(null);
  const user2Ref = useRef<HTMLImageElement>(null);
  const user3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // markers: true, // 개발할 때 켜놓으면 start 지점 볼 수 있음
          pin: true, // 스크롤 내려가도 그 자리에 고정
          scrub: true, // 애니메이션 자동으로 되는게 아니라 스크롤 위치에 따라 고정
        },
      })
      .to(userRef.current, { scale: 0.2 }, 0);
    // .to(user1Ref.current, { scale: 0.4, y: 200, x: 500, opacity: 1 }, 0)
    // .to(user2Ref.current, { scale: 0.4, y: 200, opacity: 1 }, 0)
    // .to(user3Ref.current, { scale: 0.4, y: 200, x: -500 }, 0)
    // .to(".zoom", { opacity: 1 }, 0);
  }, []);

  return (
    <OnlineClass ref={containerRef}>
      <User ref={userRef} />
      {/* <User1 ref={user1Ref} />
      <User2 ref={user2Ref} />
      <User3 ref={user3Ref} /> */}
      <Zoom />
    </OnlineClass>
  );
};

export default App;

const OnlineClass = styled.div`
  width: 100%;
  height: 455vh;
  position: relative;
`;

const User = styled.img.attrs({
  src: "https://images.unsplash.com/photo-1635630869261-37be96721bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1475&q=80",
  alt: "user",
})`
  width: 100%;
`;

const User1 = styled.img.attrs({
  src: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg",
  alt: "user",
})`
  position: absolute;
  width: 50%;
  opacity: 0.3;
  top: -200px;
  left: -500px;
`;

const User2 = styled.img.attrs({
  src: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg",
  alt: "user",
})`
  position: absolute;
  width: 50%;
  top: -200px;
  left: 25%;
  opacity: 0;
`;

const User3 = styled.img.attrs({
  src: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg",
  alt: "user",
})`
  position: absolute;
  width: 50%;
  top: -200px;
  right: -500px;
`;

const Zoom = styled.img.attrs({
  src: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/Zoom.png",
  alt: "Zoom",
})`
  position: fixed;
  top: 0;
  left: 0;
  /* width: 200%; */
  /* transform: translate3d(-50%, -50%, 0); */
  z-index: -1;
`;
