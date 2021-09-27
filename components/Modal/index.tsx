import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  active: boolean;
}

const CustomCard = styled.div`
  @media (max-width: 640px) {
    width: 90vw;
  }
  @media (min-width: 1024px) {
    width: 450px;
  }
`;

export default function Modal({ active = false }: Props): ReactElement {
  return (
    <div
      className={` ${
        active
          ? "fixed w-screen h-screen z-50 bg-black bg-opacity-25"
          : "hidden h-0"
      } `}
    >
      <div className=" w-full h-full flex justify-center items-center">
        <CustomCard className="bg-white rounded-3xl overflow-hidden flex flex-col ">
          <div className=" bg-yellow-600 bg-opacity-50 font-bold lg:text-4xl text-white w-full text-center py-3">
            Register
          </div>
          <div className=" w-full my-4 mx-2 ">
            <form className="flex flex-col items-center">
              <input type="email" placeholder="Your Mail" />
              <input type="password" placeholder="Your Password" />
              <input type="text" placeholder="Your Name" />
              <button> Continue</button>
            </form>
          </div>
        </CustomCard>
      </div>
    </div>
  );
}
