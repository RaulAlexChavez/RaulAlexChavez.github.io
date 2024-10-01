import React from "react";
import styled, { css } from 'styled-components';

const createRotatingStyle = (rotatingClass:string, rotateOnHoverClass:string, hoverableParent:string, rotateSpeed:number, rotateOnHoverExtraSpeed:number, counterClockWise:boolean) => css`
  .${rotatingClass} {
    animation: rotate ${rotateSpeed}s linear infinite;
    position: relative;
  }

  .${rotateOnHoverClass} {
    animation: rotate ${rotateOnHoverExtraSpeed}s linear infinite;
    position: relative;
    animation-play-state: paused;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .${hoverableParent}:hover .${rotateOnHoverClass} {
    animation-play-state: running;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(${counterClockWise ? "-" : ""}360deg);
    }
  }
`;

interface HoverableRotationProps {
  rotatingClassName: string,
  rotateOnHoverClassName: string,
  hoverableParent: string,
  rotateSpeed: number,
  rotateOnHoverExtraSpeed: number,
  counterClockWise?: boolean,
  children: JSX.Element
}

const HoverableRotation = (props: HoverableRotationProps):JSX.Element => {

  const RotatingStyle = styled.div`
    ${
      createRotatingStyle(
        props.rotatingClassName,
        props.rotateOnHoverClassName,
        props.hoverableParent,
        1/props.rotateSpeed,
        1/props.rotateOnHoverExtraSpeed,
        props.counterClockWise ?? false,
      )
    }
  `;

  return (
    <RotatingStyle>
      {props.children}
    </RotatingStyle>
  );
}

export default HoverableRotation;