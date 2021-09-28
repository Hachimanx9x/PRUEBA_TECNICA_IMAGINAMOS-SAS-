import React from "react";
import styled, { keyframes } from "styled-components";

import { addPropsCarousel } from "./typeProps";
import { ArrowSimpleRigth, ArrowLeft } from "../Icons";

const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #f5f5f5 90%,
    #f3f3f3 100%
  );
  overflow-x: hidden;
  @media (max-width: 640px) {
    width: 90vw;
  }
  @media (min-width: 1024px) {
    width: 888px;
  }
`;

const ConatinerCarousel = styled.div<{
  animation: boolean;
  transitionTime: number;
  movXPre: number;
  movX: number;
}>`
  ${(props) =>
    props.animation
      ? "animation: movel " + props.transitionTime + "s linear normal; "
      : "transform:translateX(" + props.movX + "px);"}

  @keyframes movel {
    0% {
      transform: translateX(${(props) => props.movXPre}px);
    }
    100% {
      transform: translateX(${(props) => props.movX}px);
    }
  }
`;

const CustoButton = styled.button<{ displayCustom: boolean }>`
  background-color: #f8f8f8;
  display: ${(props) => (props.displayCustom ? "contents" : "none")};
`;
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
export default function ContentCarousel({
  children,
  numItems,
  transitionTime = 1,
}: addPropsCarousel) {
  const refContent = React.createRef<HTMLDivElement>();
  const refElements = React.createRef<HTMLDivElement>();
  const [fractionWitdth, setFractionWidth] = React.useState<number>(0);
  const [movX, setMovX] = React.useState(0);
  const [movXPre, setMovXPre] = React.useState(0);
  const [animation, setAnimation] = React.useState(false);
  const [max, setMaxX] = React.useState(0);
  const [maxContent, setMaxmaxContent] = React.useState(0);
  const [displayRigth, setDisplayRigth] = React.useState(true);
  const [displayLeft, setDisplayLeft] = React.useState(true);
  const { width } = useWindowDimensions();
  React.useEffect(() => {
    setMovXPre(0);
    setMovX(0);
    setAnimation(false);

    const widthE = refElements.current ? refElements.current.offsetWidth : 0;
    setMaxmaxContent(refContent.current ? refContent.current.offsetWidth : 0);
    setFractionWidth(widthE / numItems);
    setMaxX(widthE);
  }, [refElements.current, refContent.current, children, numItems, width]);

  const next = () => {
    const newmove = movX - fractionWitdth;
    if (movX < 1 && movX >= maxContent - max) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, transitionTime * 1000);

      setMovXPre(movX);
      setMovX(newmove);
    }
    const future = newmove - fractionWitdth;

    if (future <= maxContent - max) {
    }

    if (future !== 0) {
      setDisplayLeft(true);
    }
  };
  const back = () => {
    if (movX < 0) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 1000);

      setMovXPre(movX);
      setMovX((prev) => prev + fractionWitdth);
    }
    if (movX + fractionWitdth >= 0) {
      // setDisplayLeft(false);
    }

    const newmove = movX - fractionWitdth;

    if (movX < 1 && newmove >= maxContent - max) {
      setDisplayRigth(true);
    }
  };

  return (
    <div className="w-full">
      <Container
        ref={refContent}
        className="mt-3 lg:mt-9 py-1 px-1 flex flex-row items-center relative"
      >
        <div className="absolute z-10 w-full  ">
          <div className="flex flex-row justify-between ">
            <div className="bg-gray-300 rounded-md">
              <CustoButton displayCustom={displayLeft} onClick={back}>
                <ArrowLeft className="w-6" />
              </CustoButton>
            </div>

            <div className="bg-gray-300 rounded-md">
              <CustoButton displayCustom={displayRigth} onClick={next}>
                <ArrowSimpleRigth className="w-6 " />
              </CustoButton>
            </div>
          </div>
        </div>
        <ConatinerCarousel
          animation={animation}
          transitionTime={transitionTime}
          movX={movX}
          movXPre={movXPre}
          ref={refElements}
          className="flex flex-row  items-center"
        >
          {children}
        </ConatinerCarousel>
      </Container>
    </div>
  );
}
