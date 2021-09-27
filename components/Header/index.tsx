import Image from "next/image";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import img_Header from "../../assets/images/headerimage.png";
import img_d from "../../assets/images/d.png";
import { ArrorRigth } from "../Icons";

const InfoHeader = styled.div`
  border-radius: 25px;
  background-color: ${colors.backgroundSlideColor};

  @media (max-width: 640px) {
    height: 120px;
    width: 90%;
  }
  @media (min-width: 1024px) {
    height: 203px;
    width: 888px;
  }
`;
const ContainerImg = styled.div`
  transform: translate(0px, 4px);
`;

const TitleHeader = styled.h1`
  font-size: 28px;
  @media (max-width: 640px) {
    font-size: 18px;
  }
  color: ${colors.colorSlideText};
`;
const SubTitleHeader = styled.h5`
  color: rgba(0, 0, 0, 0.5);
`;
/*
const ArrowRigth = styled.div`
  width: 25px;
  height: 25px;
  -webkit-mask: url(${icon_RowR});
  mask: url(${icon_RowR});
  mask-size: cover;
  background: red;
`;*/
export default function Header() {
  return (
    <div className="flex flex-col items-center mt-7 lg:mt-12 w-full">
      <InfoHeader className="flex justify-between items-end py-0 lg:px-11">
        {/*img */}
        <ContainerImg className="w-32  lg:w-64">
          <Image src={img_Header} />
        </ContainerImg>

        {/*text center*/}
        <div className="flex w-full lg:w-2/3 h-full ">
          <div className=" flex flex-col lg:pl-6 items-start justify-center lg:w-3/4 ">
            <TitleHeader className="flex font-bold ">
              $0 delivery for 30 days!
              <ContainerImg className="w-6 ml-1 lg:w-8 lg:ml-3">
                <Image src={img_d} />
              </ContainerImg>
            </TitleHeader>
            <SubTitleHeader className="">
              $0 delivery for 30 days!
            </SubTitleHeader>
          </div>
          {/*button*/}
          <div className="flex  pb-3 pr-1 items-end lg:pb-7 lg:w-1/4 ">
            <div className="lg:flex lg:w-full lg:justify-between lg:items-center">
              <div
                className="hidden lg:flex"
                style={{ color: colors.colorSlideText }}
              >
                Learn More
              </div>
              <ArrorRigth className="w-5 lg:w-7" fill={colors.colorSlideText} />
            </div>
          </div>
        </div>
      </InfoHeader>
    </div>
  );
}
