import React, { ReactElement } from "react";
import styled from "styled-components";
//import authGoogle from "../../utils/autoGoogle";
import GoogleLogo from "../Icons/GoogleLogo";
//redux
import {
  useAppDispatch,
  authUserMethods,
  useAppSelector,
  userActions,
} from "../../redux";
interface Props {
  active: boolean;
  activeModal: () => void;
}

const CustomCard = styled.div`
  @media (max-width: 640px) {
    width: 90vw;
  }
  @media (min-width: 1024px) {
    width: 450px;
  }
`;

export default function Modal({ active, activeModal }: Props): ReactElement {
  const dispatch = useAppDispatch();
  const onClickauthGoogle = () => {
    dispatch(authUserMethods.authUser());
  };
  const name = useAppSelector((state) => state.authUser.displayName);
  React.useEffect(() => {
    if (name !== "") {
      activeModal();
    }
  }, [name]);
  if (active) {
    return (
      <div className="fixed w-screen h-screen z-50 bg-black bg-opacity-25">
        <div className=" w-full h-full flex justify-center items-center">
          <CustomCard className="bg-white rounded-3xl overflow-hidden flex flex-col ">
            <div className=" bg-yellow-600 bg-opacity-50 font-bold lg:text-4xl text-white w-full text-center py-3">
              Register
            </div>
            <div className=" w-full py-4 px-2  ">
              <button
                onClick={onClickauthGoogle}
                className=" rounded-md flex flex-row items-center justify-start w-full bg-blue-700 text-white"
              >
                <div className="w-7 h-7 m-1 bg-white">
                  {" "}
                  <GoogleLogo className="w-full" />
                </div>
                <div className="w-full  text-center">
                  {" "}
                  Sign in with Google {name}
                </div>
              </button>
              <button
                className="w-full py-1 font-bold text-center bg-gray-300 mt-3 rounded-md"
                onClick={activeModal}
              >
                {" "}
                Cancel
              </button>
            </div>
          </CustomCard>
        </div>
      </div>
    );
  }
  return <div></div>;
}
