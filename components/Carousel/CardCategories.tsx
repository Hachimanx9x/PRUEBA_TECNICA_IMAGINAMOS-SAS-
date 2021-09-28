import Image from "next/image";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { addPropsCardCategories } from "./typeProps";
import { useAppDispatch, categoryMethods, productsMethods } from "../../redux";

const CustoBgCard = styled.div<{ focus: boolean }>`
  :hover {
    cursor: pointer;
  }

  background-color: ${(props) => (props.focus ? colors.yellow : "#fff")};
`;

type TextOptions =
  | "All"
  | "Pizza"
  | "Asian"
  | "Burgers"
  | "Barbecue"
  | "Dessers"
  | "Thai"
  | "Sushi";
export default function CardCategorie({
  name,
  icon,
  active,
}: addPropsCardCategories) {
  const [focus, setFocus] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setFocus(active);
  }, [active]);
  return (
    <CustoBgCard
      focus={focus}
      className=" w-20 h-36 rounded-full  py-2 flex flex-col items-center mr-5"
      onClick={() => {
        // setFocus(!focus);
        let category: TextOptions = "All";
        if (
          name === "All" ||
          name === "Pizza" ||
          name === "Asian" ||
          name === "Burgers" ||
          name === "Barbecue" ||
          name === "Dessers" ||
          name === "Thai" ||
          name === "Sushi"
        ) {
          category = name;
        }

        dispatch(categoryMethods.setCategoryName(category));
        dispatch(productsMethods.filterProductsmethod(category));
      }}
    >
      <div className="bg-white w-16 h-16 rounded-full p-2 border-2 ">
        <Image src={icon} width="100%" height="100%" layout="responsive" />
      </div>
      <div className="font-bold ">{name}</div>
    </CustoBgCard>
  );
}
