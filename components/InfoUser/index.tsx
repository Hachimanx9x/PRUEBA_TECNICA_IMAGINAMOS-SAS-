import { User } from "../Icons";

import styled from "styled-components";
import { colors } from "../../styles/colors";
//redux
import { useAppSelector } from "../../redux";
import React from "react";
interface Props {
  nameuser: string;
  modalActive: () => void;
}
const ContainerNumber = styled.div`
  background-color: ${colors.yellow};

  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

function InfoUser(props: Props) {
  const [numProducts, setNumProducts] = React.useState(0);
  const products = useAppSelector(
    (state) => state.shoppingList.setShoopingList
  );

  React.useEffect(() => {
    let tempnum = 0;
    products.forEach((ele) => (tempnum += ele.amount));
    setNumProducts(tempnum);
  }, [products]);
  return (
    <div className=" lg:w-full lg:pt-12">
      <div className="h-14 flex  items-center  justify-end px-1">
        {props.nameuser !== "" ? (
          <div className="flex flex-row">
            Welcome {props.nameuser} <User className="w-5 mr-4 ml-4 pt-1" />{" "}
          </div>
        ) : (
          <button
            className=" bg-gray-200 py-1 px-3 mr-2 font-semibold rounded-md  text-center"
            onClick={props.modalActive}
          >
            Login
          </button>
        )}
        <ContainerNumber>{numProducts}</ContainerNumber>
      </div>
    </div>
  );
}

export default InfoUser;
