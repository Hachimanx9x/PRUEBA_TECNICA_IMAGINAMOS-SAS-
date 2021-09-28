import React from "react";
import ContentCarousel from "./ContentCarousel";
import NavBarCarousel from "./NavBarCarousel";
import CardCategorie from "./CardCategories";
import CardProduct from "./CardProduct";
import { AddPropsCategories } from "./typeProps";
import { EmojiSad } from "../Icons";
//redux
import { useAppSelector } from "../../redux";
const optionsDelivery = [0, 1, 2, 3];

export default function Carousel({ categories, products }: AddPropsCategories) {
  const state = useAppSelector((state) => state.selectCategory.setCategory);
  return (
    <div className="lg:mt-6">
      <NavBarCarousel optionsDelivery={optionsDelivery} />
      <ContentCarousel transitionTime={0.5} numItems={categories.length}>
        {categories.map((ele) => (
          <CardCategorie
            key={ele.id}
            name={ele.name}
            icon={ele.icon}
            active={state === ele.name}
          />
        ))}
      </ContentCarousel>
      {products.length > 0 ? (
        <ContentCarousel transitionTime={0.5} numItems={products.length}>
          {products.map((ele) => (
            <CardProduct
              key={ele.id}
              name={ele.name}
              qualification={ele.qualification}
              time={ele.time}
              price={ele.price}
              image={ele.image}
            />
          ))}
        </ContentCarousel>
      ) : (
        <div className="w-52 h-44 p-3">
          <div className="rounded-md w-full h-full flex flex-col items-center justify-center bg-gray-300">
            <EmojiSad className="w-10" />
            <div className="p-2 text-center font-bold">
              {" "}
              Sorry, but there are no foods with that category
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
