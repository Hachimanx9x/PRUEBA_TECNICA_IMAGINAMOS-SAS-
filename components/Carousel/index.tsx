import React from "react";
import ContentCarousel from "./ContentCarousel";
import NavBarCarousel from "./NavBarCarousel";
import CardCategorie from "./CardCategories";
import CardProduct from "./CardProduct";
import { AddPropsCategories } from "./typeProps";

const optionsDelivery = [0, 1, 2, 3];
const qqq: number = 4.6;
const qqq2: number = 14.99;
export default function Carousel({ categories, products }: AddPropsCategories) {
  return (
    <div className="lg:mt-6">
      <NavBarCarousel optionsDelivery={optionsDelivery} />
      <ContentCarousel transitionTime={0.5} numItems={categories.length}>
        {categories.map((ele) => (
          <CardCategorie key={ele.id} name={ele.name} icon={ele.icon} />
        ))}
      </ContentCarousel>
      <ContentCarousel transitionTime={0.5} numItems={categories.length}>
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
    </div>
  );
}
{
  /*   
     <ContentCarousel transitionTime={0.5} numItems={categories.length}>
        {categories.map((ele) => (
          <CardCategorie key={ele.id} name={ele.name} icon={ele.icon} />
        ))}
      </ContentCarousel>
      <ContentCarousel transitionTime={0.5} numItems={categories.length}>
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
       */
}
