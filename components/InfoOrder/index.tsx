import Image from "next/image";
import React from "react";
import styled from "styled-components";

//imgs
import imagEmogi from "../../assets/images/emoji.png";
import { colors } from "../../styles/colors";
import { Clock } from "../Icons";
//components
import Products from "./Products";
//redux
import { useAppSelector } from "../../redux";
//styled-components
const CustomCardInfo = styled.div`
  background-color: ${colors.backgroundBlue};
`;

export default function InfoOrder() {
  const products = useAppSelector(
    (state) => state.shoppingList.setShoopingList
  );

  return (
    <div className="lg:mt-12 w-full flex flex-col items-center justify-between">
      <div className="lg:w-64">
        {/*text */}
        <div className="font-bold text-3xl lg:ml-3   ">
          <div className=" flex flex-row items-center ">
            My
            <div className="w-6 ml-2">
              <Image src={imagEmogi} className="w-full" />
            </div>
          </div>
          orden
        </div>
        {/*card */}
        <div className="lg:mt-9 w-full flex justify-center ">
          <CustomCardInfo className="rounded-2xl lg:w-64 py-7  px-6 flex flex-row justify-between ">
            <div className="w-1/2 flex flex-col justify-between items-start text-sm">
              <div className="  text-white w-32">625t St Marks Ave</div>
              <div className="flex flex-row w-full items-center mt-2">
                <div className="bg-yellow-300 bg-opacity-25 rounded-md p-1 flex justify-center items-center">
                  <Clock className="w-4 " fill="#73ff00" />
                </div>
                <div className="text-white font-semibold ml-2"> 35 min</div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end text-sm text-yellow-400 font-semibold">
              <div>Edit</div>
              <div className="flex items-center">
                <div>Choose time</div>
              </div>
            </div>
          </CustomCardInfo>
        </div>

        {/*Products List */}
        <div className="mt-2 w-full lg:h-full flex flex-col justify-between">
          <Products products={products} />
        </div>
      </div>
    </div>
  );
}
