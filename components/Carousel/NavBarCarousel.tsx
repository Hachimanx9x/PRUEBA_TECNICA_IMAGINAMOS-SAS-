import React from "react";
import styled from "styled-components";
import { HamburgerColor } from "../Icons";
import Dropdown from "./DropdownMenu";
import { addPropsOptions } from "./typeProps";

const Container = styled.div`
  @media (max-width: 640px) {
    width: 95%;
  }
  @media (min-width: 1024px) {
    width: 888px;
  }
`;
export default function NavBarCarousel(props: addPropsOptions) {
  return (
    <div className=" w-full">
      <Container className="flex flex-col mt-3 lg:mt-0 lg:flex-row justify-between items-center">
        <div className="flex flex-row items-center text-xl lg:text-3xl font-bold lg:w-52">
          Restaurant
          <HamburgerColor className="ml-2 w-6 lg:w-8" />
        </div>
        <Dropdown options={props.optionsDelivery} />
      </Container>
    </div>
  );
}
