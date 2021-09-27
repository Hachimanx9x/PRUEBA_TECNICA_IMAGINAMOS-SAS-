import Image from "next/image";
import { User } from "../Icons";
import icon_user from "../../assets/icons/user.svg";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const ContainerNumber = styled.div`
  background-color: ${colors.yellow};

  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

function InfoUser() {
  return (
    <div className=" lg:w-full lg:pt-12">
      <div className="h-14 flex  items-center  justify-end px-1">
        nombre de usuario
        <User className="w-5 mr-4 ml-4 pt-1" />
        <ContainerNumber>3</ContainerNumber>
      </div>
    </div>
  );
}

export default InfoUser;
