import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { addPropsCardCategories } from "./typeProps";

const CustoBgCard = styled.div<{ focus: boolean }>`
  :hover {
    cursor: pointer;
  }

  background-color: ${(props) => (props.focus ? colors.yellow : "#fff")};
`;
export default function CardCategorie({ name, icon }: addPropsCardCategories) {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <CustoBgCard
      focus={focus}
      className=" w-20 h-36 rounded-full  py-2 flex flex-col items-center mr-5"
      onClick={() => {
        setFocus(!focus);
      }}
    >
      <div className="bg-white w-16 h-16 rounded-full p-2 border-2 ">
        <Image src={icon} width="100%" height="100%" layout="responsive" />
      </div>
      <div className="font-bold ">{name}</div>
    </CustoBgCard>
  );
}
