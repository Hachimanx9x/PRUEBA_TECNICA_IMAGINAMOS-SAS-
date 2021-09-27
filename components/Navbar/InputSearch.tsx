import Image from "next/image";
import styled from "styled-components";
import { colors } from "../../styles/colors";
//icons ot imgs
import { Search } from "../Icons";

const ContainerInput = styled.div`
  border-radius: 19px;
  height: 59px;
  background-color: ${colors.backGroundInput};

  font-weight: inherit;
`;

const InputCustom = styled.input`
  :focus {
    outline: none;
  }
`;
export default function InputSearch() {
  return (
    <ContainerInput className=" lg:w-2/3 flex items-center py-2 px-4  lg:py-2 lg:px-6">
      <Search className="w-5 mr-4 pt-1" />

      <InputCustom
        placeholder="Search"
        className="bg-transparent w-full border-none"
      />
    </ContainerInput>
  );
}
