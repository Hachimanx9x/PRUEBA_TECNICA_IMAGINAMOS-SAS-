import React from "react";
import styled from "styled-components";
import { createPopper } from "@popperjs/core";
import { Clock, ArrorDown, ArrowTop } from "../Icons";
import { colors } from "../../styles/colors";

interface addProps {
  options: number[];
}

const CustomButton = styled.button`
  background-color: ${colors.backgroundButton}; ;
`;

const CustomContentDrop = styled.div`
  background-color: ${colors.backgroundSlideColor};
`;

const CustomOption = styled.a<{ latest?: boolean }>`
  color: ${colors.colorSlideText};
  ${(props) => (!props.latest ? "border-bottom: 1px solid #ead5b3;" : "")}

  :hover {
    cursor: pointer;
    color: #da663e;
    background-color: #ead5b3;
  }
`;

export default function Dropdown({ options }: addProps) {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] =
    React.useState<boolean>(false);
  const btnDropdownRef = React.createRef<HTMLButtonElement>();
  const popoverDropdownRef = React.createRef<HTMLDivElement>();
  const [valueNow, setValueNow] = React.useState<number>(0);
  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start",
      });
    }

    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const onClickOption = (number: number): void => {
    setValueNow(number);
  };
  return (
    <>
      <div className="flex flex-wrap mt-3 lg:mt-0">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <CustomButton
              className={
                "text-sm px-3 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <div className="text-white flex items-center justify-between w-48">
                <Clock className=" w-6" fill="#fff" />
                <div className="flex flex-row items-center">
                  Delivery:
                  <div className="ml-1 font-bold">
                    {valueNow === 0
                      ? " Now"
                      : valueNow > 1
                      ? ` ${valueNow} hours`
                      : ` ${valueNow} hour`}
                  </div>
                </div>
                {dropdownPopoverShow ? (
                  <ArrowTop className="h-5 w-5" />
                ) : (
                  <ArrorDown className="h-5 w-5" />
                )}
              </div>
            </CustomButton>
            <CustomContentDrop
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1  w-52"
              }
            >
              {options?.map((ele, id) => (
                <CustomOption
                  key={`ele__${id}`}
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
                  latest={ele === options[options.length - 1]}
                  onClick={() => {
                    onClickOption(ele);
                    closeDropdownPopover();
                  }}
                >
                  Delivery
                  {ele === 0
                    ? " Now"
                    : ele > 1
                    ? ` ${ele} hours`
                    : ` ${ele} hour`}
                </CustomOption>
              ))}
            </CustomContentDrop>
          </div>
        </div>
      </div>
    </>
  );
}
