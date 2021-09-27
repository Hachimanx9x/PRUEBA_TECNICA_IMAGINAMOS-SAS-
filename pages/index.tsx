import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import InfoUser from "../components/InfoUser";
import { colors } from "../styles/colors";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
//
import categoriesFile from "../data/categories.json";
import productsFile from "../data/products.json";
import InfoOrder from "../components/InfoOrder";
import Result from "../components/Result";
import Modal from "../components/Modal";
//
const SideBar = styled.div`
  background-color: ${colors.backgroundSideBar};
`;

const Home: NextPage = () => {
  const [categories] = React.useState(categoriesFile);
  const [products] = React.useState(productsFile);

  return (
    <>
      <Modal active={false} />
      <div className=" flex flex-wrap  lg:flex-row lg:h-screen w-full">
        {/*general content */}
        <div className="flex flex-col items-center w-full lg:w-3/4 ">
          <NavBar />
          <Header />

          <Carousel categories={categories} products={products} />
        </div>
        {/*user content*/}
        <SideBar className=" w-full  lg:w-1/4">
          <div className=" w-full flex flex-col items-center">
            <div className="lg:w-64 flex flex-col justify-between">
              <InfoUser />
              <InfoOrder />
            </div>
            <div className="w-full flex justify-end">
              <Result />
            </div>
          </div>
        </SideBar>
      </div>
    </>
  );
};

export default Home;
