import { IconMenu } from "../Icons";
import styled from "styled-components";

const ContentMenu = styled.div`
  font-weight: 600;
  margin: 0 0.5rem;
`;

export default function Menu() {
  return (
    <ContentMenu className="flex  justify-between  items-center p-1 lg:w-48 text-xl lg:text-3xl">
      <div className="pt-1">
        <IconMenu className="w-6 lg:w-8 cursor-pointer " fill="#000" />
      </div>
      Chukwudi
    </ContentMenu>
  );
}
