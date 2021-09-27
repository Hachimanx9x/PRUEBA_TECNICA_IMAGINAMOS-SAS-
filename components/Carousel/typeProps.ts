import { type } from "os";
import React from "react";
export type AddPropsCategories = {
  categories: { id: number; name: string; icon: string }[];
  products: {
    id: number;
    name: string;
    qualification: number;
    time: string;
    price: number;
    image: string;
  }[];
};

export type addPropsOptions = {
  optionsDelivery: number[];
};

export type addPropsCardCategories = {
  name: string;
  icon: string;
};

export type addPropsCarousel = {
  children?: JSX.Element[] | JSX.Element;
  numItems: number;
  transitionTime?: number; // motion animation time
};

export type addPropsCardProducts = {
  name: string;
  qualification: number;
  time: string;
  price: number;
  image: string;
};
