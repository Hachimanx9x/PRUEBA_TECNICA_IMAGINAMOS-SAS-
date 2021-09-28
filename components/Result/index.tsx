import React, { ReactElement } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ArrorRigth, Minus, Plus } from "../Icons";
//rulex
import { useAppSelector } from "../../redux";

const CustomButtonCheckout = styled.button`
  background-color: ${colors.yellow};

  width: 173px;
  height: 75px;
  border-radius: 11px 0px 0px 11px;

  font-weight: bold;
`;

export default function Result(): ReactElement {
  const [prices, setPrices] = React.useState(0);
  const products = useAppSelector(
    (state) => state.shoppingList.setShoopingList
  );
  React.useEffect(() => {
    let tempnum = 0;
    products.forEach((ele) => (tempnum += ele.price * ele.amount));

    setPrices(tempnum);
  }, [products]);
  return (
    <div className=" mt-10  lg:mt-14 lg:w-80">
      {/*--------- */}
      <div className=" flex justify-start">
        <div className="w-64 flex items-center justify-between border-b-2 border-solid border-gray-300">
          <div className="text-lg"> Total</div>{" "}
          <div className="font-semibold text-xl">
            {" "}
            ${Number.parseFloat(`${prices}`).toFixed(2)}
          </div>
        </div>
      </div>

      {/*--------- */}
      <div className="py-4 pl-4 lg:mt-7 w-full flex flex-row justify-between">
        <div>
          <div>Persons</div>
          <div className="flex justify-between items-center border-gray-200 rounded-lg border-2 ">
            <button className="w-5 mr-2">
              {" "}
              <Minus className="w-full" />
            </button>
            <div>1</div>
            <button className="w-5 ml-2">
              <Plus className="w-full" />
            </button>
          </div>
        </div>
        <CustomButtonCheckout className="flex items-center justify-center">
          <div className="flex flex-row items-center">
            checkout
            <ArrorRigth className="w-5 ml-2" />
          </div>
        </CustomButtonCheckout>
        {/*--------- */}
      </div>
    </div>
  );
}
