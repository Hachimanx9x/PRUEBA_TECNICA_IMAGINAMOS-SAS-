import React from "react";
import styled from "styled-components";
import { Star } from "../Icons";
import { addPropsCardProducts } from "./typeProps";
//redux
import { useAppDispatch, shoopingMethods } from "../../redux";

const CustoncontainerBackgroundImage = styled.div<{ url: string }>`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;

export default function CardProduct({
  name,
  qualification,
  time,
  price,
  image,
}: addPropsCardProducts) {
  const dispatch = useAppDispatch();
  const addProduct = () => {
    dispatch(
      shoopingMethods.setproductoShopping({
        image,
        amount: 1,
        name,
        price,
        qualification,
      })
    );
  };
  return (
    <div className="w-44 h-52   lg:w-64 lg:h-72 bg-white mr-8">
      <CustoncontainerBackgroundImage
        className="w-full h-24 lg:h-36 rounded-2xl overflow-hidden flex items-end justify-start"
        url={image}
      >
        <div className=" font-bold bg-gray-300 w-24 h-11 rounded-tr-2xl flex items-center justify-center">
          {time}
        </div>
      </CustoncontainerBackgroundImage>
      <div className="font-bold text-lg  lg:h-14 mt-2">{name}</div>
      <div className="flex flex-row items-center mt-3 mb-4 w-full justify-between">
        <div className="flex flex-row items-center">
          <div className=" flex flex-row items-center mr-3">
            <Star className="w-4 mr-1" />
            {qualification}
          </div>
          <div> $${price}</div>
        </div>
        <div>
          <button
            className="bg-yellow-400 bg-opacity-80 font-bold py-1 px-3 rounded-md"
            onClick={addProduct}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
