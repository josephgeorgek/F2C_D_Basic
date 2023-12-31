import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, FloatingInput, Img, Input, Text } from "components";
import ApplyCardOneCardbreakdown from "components/ApplyCardOneCardbreakdown";
import ApplyCardOneColumninputtextOne from "components/ApplyCardOneColumninputtextOne";
import ApplyCardOneDropdownfields from "components/ApplyCardOneDropdownfields";
import ApplyCardOneHeader from "components/ApplyCardOneHeader";

const ApplyCardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100_02 flex flex-col font-opensans items-center justify-start mx-auto pb-[39px] w-full">
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <ApplyCardOneHeader className="flex flex-col h-[103px] md:h-auto items-start justify-start max-w-[1440px] w-full" />
          <div className="flex flex-col gap-6 items-start justify-start md:px-10 sm:px-5 px-[156px] w-auto md:w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row gap-4 items-start justify-center max-w-[1128px] mx-auto px-20 md:px-5 py-16 rounded-[12px] shadow-bs2 w-full">
              <Text
                className="text-blue_gray-800 text-lg w-auto"
                size="txtOpenSansSemiBold18"
              >
                Card details
              </Text>
              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-blue_gray-700 text-xl w-auto"
                      size="txtOpenSansBold20Bluegray700"
                    >
                      You are eligible for 2 cards
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start max-w-[771px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-blue_gray-500_02 text-sm w-auto"
                          size="txtOpenSansRegular14Bluegray50002"
                        >
                          Preferred credit limit (SGD)
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[279px]">
                        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-lg w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-1 items-center justify-start w-full">
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_menu.svg"
                                  alt="menu"
                                />
                                <Text
                                  className="flex-1 text-2xl md:text-[22px] text-blue_gray-800 text-center sm:text-xl w-auto"
                                  size="txtOpenSansBold24"
                                >
                                  25,000
                                </Text>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_plus_gray_400_02.svg"
                                  alt="plus"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-blue_gray-500_02 text-sm w-auto"
                          size="txtOpenSansRegular14Bluegray50002"
                        >
                          Entity name on card
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-col h-[50px] md:h-auto items-start justify-start w-[279px] sm:w-full">
                          <Input
                            name="content"
                            placeholder="Gastronomy Pte Ltd"
                            className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-left uppercase w-full"
                            wrapClassName="border border-blue_gray-100 border-solid w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-col items-start justify-start px-4 w-[279px]">
                          <Text
                            className="text-blue_gray-600 text-sm w-auto"
                            size="txtOpenSansRegular14Bluegray600"
                          >
                            18/19
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100_7f border border-gray-300_01 border-solid flex flex-col items-start justify-start p-6 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-blue_gray-800 text-lg w-auto"
                              size="txtOpenSansBold18"
                            >
                              Card 1 - Natalie Lee Xin Mei
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto md:w-full">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="leading-[18.00px] max-w-[709px] md:max-w-full text-blue_gray-600 text-xs"
                                size="txtOpenSansRegular12"
                              >
                                <span className="text-blue_gray-600 font-opensans text-left font-normal">
                                  Lorem ipsum
                                </span>
                                <span className="text-blue_gray-600 font-opensans text-left font-normal">
                                  <>
                                    <br />
                                    Lorem ipsum
                                  </>
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                          <ApplyCardOneColumninputtextOne className="flex flex-1 flex-col gap-1 h-[81px] md:h-auto items-start justify-start w-full" />
                          <ApplyCardOneDropdownfields className="flex flex-1 flex-col items-start justify-start w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ApplyCardOneCardbreakdown className="bg-gray-100_7f border border-gray-300_01 border-solid flex flex-col gap-2 items-start justify-start p-6 sm:px-5 rounded-lg w-full" />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1128px] mx-auto px-20 md:px-5 py-16 rounded-[12px] shadow-bs2 w-full">
              <div className="flex flex-col items-start justify-start w-[181px]">
                <Text
                  className="text-blue_gray-800 text-lg w-full"
                  size="txtOpenSansSemiBold18"
                >
                  Contact details
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-start justify-start max-w-[771px] w-full">
                <Text
                  className="text-base text-blue_gray-700 w-full"
                  size="txtOpenSansRegular16"
                >
                  We will use the details below to contact you for this offer.
                </Text>
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-[377px] sm:w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-[5px] rounded-lg w-full">
                      <FloatingInput
                        wrapClassName="placeholder:bg-white-A700 font-semibold placeholder:left-[0] p-0 sm:pr-5 text-base placeholder:text-blue_gray-500_02 text-blue_gray-800 text-left placeholder:top-[0] w-full"
                        className="font-semibold p-0 sm:pr-5 text-base text-blue_gray-800 text-left w-full"
                        name="inputtext_Three"
                        labelClasses="bg-white-A700 left-[0] top-[0] text-blue_gray-500_02"
                        focusedClasses="translate-y-[23px] scale-[1]"
                        wrapperClasses="sm:mx-0 w-full top-[0]"
                        labelText="Contact no."
                        defaultText="9876 5432"
                      ></FloatingInput>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[377px] sm:w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-[5px] rounded-lg w-full">
                      <FloatingInput
                        wrapClassName="placeholder:bg-white-A700 font-semibold placeholder:left-[0] p-0 sm:pr-5 text-base placeholder:text-blue_gray-500_02 text-blue_gray-800 text-left placeholder:top-[0] w-full"
                        className="font-semibold p-0 sm:pr-5 text-base text-blue_gray-800 text-left w-full"
                        name="email"
                        labelClasses="bg-white-A700 left-[0] top-[0] text-blue_gray-500_02"
                        focusedClasses="translate-y-[24px] scale-[1]"
                        wrapperClasses="sm:mx-0 w-full top-[0]"
                        labelText="Email"
                        defaultText="email1@gmail.com"
                      ></FloatingInput>
                    </div>
                  </div>
                  <Text
                    className="common-pointer text-base text-light_blue-A700 w-auto"
                    size="txtOpenSansSemiBold16LightblueA700"
                    onClick={() => navigate("/applycardone")}
                  >
                    Done
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col h-[184px] md:h-auto items-end justify-center max-w-[1440px] md:px-10 sm:px-5 px-[156px] py-6 w-full">
              <Button
                className="cursor-pointer font-semibold text-base text-center w-[196px]"
                shape="round"
                color="blue_gray_800_02_blue_gray_600_01"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyCardPage;
