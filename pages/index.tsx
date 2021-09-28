import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
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
//redux

import { useAppSelector, useAppDispatch, productsMethods } from "../redux";
//
const SideBar = styled.div`
  background-color: ${colors.backgroundSideBar};
`;

const Home: NextPage = () => {
  const [categories] = React.useState(categoriesFile);
  //const [products] = React.useState(productsFile);

  const [show, setShow] = React.useState(false);
  const name = useAppSelector((state) => state.authUser.displayName);
  const products = useAppSelector((state) => state.products.fiterProducts);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(productsMethods.setProductsmethod(productsFile));
    dispatch(productsMethods.filterProductsmethod("All"));
  }, []);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Head>
        <title>PRUEBA_TECNICA_IMAGINAMOS-SAS-</title>
      </Head>
      <Modal active={show} activeModal={showModal} />
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
              <InfoUser nameuser={name} modalActive={showModal} />
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
