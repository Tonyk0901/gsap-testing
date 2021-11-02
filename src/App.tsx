import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.scss";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const zoomRef = useRef<HTMLDivElement>(null);

  const g = gsap.utils.selector(containerRef);

  useEffect(() => {
    const scaleFactor = window.innerHeight;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          markers: true, // 개발할 때 켜놓으면 start 지점 볼 수 있음
          pin: true, // 스크롤 내려가도 그 자리에 고정
          scrub: true, // 애니메이션 자동으로 되는게 아니라 스크롤 위치에 따라 고정
        },
      })
      .to(g(".zoom_window"), { scale: 0.5 }, 0);
    // .to(g(".user1"), { scale: 0.4, x: 1250, y: 500, opacity: 1 }, 0)
    // .to(g(".user2"), { scale: 0.4, y: 200, opacity: 1 }, 0)
    // .to(g(".user3"), { scale: 0.4, y: 200, x: -500 }, 0)
    // .to(g("zoom"), { opacity: 1 }, 0);
  }, []);

  return (
    <section className="online-class" ref={containerRef}>
      <div className="zoom_window" ref={zoomRef}>
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user1" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user2" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user3" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user4" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="center_user" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user5" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user6" alt="user" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/user.jpg" className="user7" alt="user" />
        {/* <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/v2/fullstack/Zoom.png" className="zoom" alt="zoom" /> */}
      </div>
    </section>
  );
};

export default App;
