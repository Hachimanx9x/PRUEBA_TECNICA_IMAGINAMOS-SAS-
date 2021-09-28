import React from "react";
import styled from "styled-components";
import { Car } from "../Icons";
import { AddPropsProducts } from "./types";

//styled-components
const CustomCardImage = styled.div<{ img: string }>`
  border-radius: 9px;
  width: 65px;
  height: 35px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const CustomCardIcons = styled.div`
  border-radius: 9px;
  width: 65px;
  height: 35px;
`;

const CustomTextDiv = styled.div`
  max-width: 102px;
`;
const CustomContainer = styled.div`
  overflow-y: auto;
  max-height: 370px;
`;

export default function Products(props: AddPropsProducts) {
  const { products } = props;
  // console.log(products);
  return (
    <CustomContainer className="w-full ">
      {products && products.length > 0
        ? products.map((ele, id) => (
            <div
              key={id}
              className="mt-8 flex flex-row items-center justify-between"
            >
              <CustomCardImage img={ele.image} />
              <div className="font-semibold flex flex-row items-center">
                {ele.amount} x{" "}
                <CustomTextDiv className="ml-1 ">{ele.name}</CustomTextDiv>
              </div>

              <div className="text-gray-500">${ele.price}</div>
            </div>
          ))
        : ""}

      <div className="mt-8 flex flex-row items-center justify-between">
        <CustomCardIcons className="bg-yellow-300 bg-opacity-25 p-1">
          <Car width="100%" height="100%" fill="#ffab2c" />
        </CustomCardIcons>
        <div className="font-semibold flex flex-row items-center justify-start">
          Delivery
        </div>
        <div className="text-gray-500">$0.0</div>
      </div>
    </CustomContainer>
  );
}
/**products.map((ele, id) => (
          <div
            key={id}
            className="mt-8 flex flex-row items-center justify-between"
          >
            <CustomCardImage img={ele.image} />
            <div className="font-semibold flex flex-row items-center">
              {ele.amount} x{" "}
              <CustomTextDiv className="ml-1 ">{ele.name}</CustomTextDiv>
            </div>
  
            <div className="text-gray-500">${ele.price}</div>
          </div>
        ))  */
