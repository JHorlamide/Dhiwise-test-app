import React from "react";

import {
  Row,
  Stack,
  Line,
  Column,
  Img,
  Text,
  Input,
  Button,
  Slider,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const TransactionPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Row className="bg-gray_100 font-inter items-center mx-[auto] w-[100%]">
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[17%]">
          <Line className="absolute bg-gray_101 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] right-[0] w-[1px]" />
          <aside className="absolute items-center w-[100%]">
            <Column className="">
              <Column className="bg-white_A700 border border-gray_300 border-solid lg:pr-[28px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] lg:py-[28px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] w-[100%]">
                <Column className="lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[78%]">
                  <Row className="items-center justify-evenly ml-[4px] pb-[1px] w-[98%]">
                    <Img
                      src="images/img_group1016.png"
                      className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[24%]"
                      alt="Group1016"
                    />
                    <Text className="font-bold lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-indigo_600 w-[auto]">
                      FirstBank
                    </Text>
                  </Row>
                  <Row className="lg:mt-[56px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[84%]">
                    <Img
                      src="images/img_home.svg"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                      alt="home"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Dashboard
                    </Text>
                  </Row>
                </Column>
                <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[92%]">
                  <Line className="bg-indigo_600 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                  <Img
                    src="images/img_file.svg"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="file"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_600 w-[auto]">
                    Transactions
                  </Text>
                </Row>
                <Column className="lg:mb-[237px] xl:mb-[271px] 2xl:mb-[305px] 3xl:mb-[366px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[75%]">
                  <Row className="items-center pl-[2px] w-[79%]">
                    <Img
                      src="images/img_user.svg"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[16%]"
                      alt="user"
                    />
                    <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Accounts
                    </Text>
                  </Row>
                  <Row className="lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[94%]">
                    <Img
                      src="images/img_map.svg"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                      alt="map"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Investments
                    </Text>
                  </Row>
                  <Row className="lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[96%]">
                    <Img
                      src="images/img_group.svg"
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[16%]"
                      alt="Group"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Credit Cards
                    </Text>
                  </Row>
                  <Row className="items-center ml-[1px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[60%]">
                    <Img
                      src="images/img_question.svg"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[25%]"
                      alt="question"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Loans
                    </Text>
                  </Row>
                  <Row className="lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[75%]">
                    <Img
                      src="images/img_service1.svg"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                      alt="serviceOne"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Services
                    </Text>
                  </Row>
                  <Row className="items-end ml-[1px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[99%]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[15%]"
                      alt="lightbulb"
                    />
                    <Text className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      My Privileges
                    </Text>
                  </Row>
                  <Row className="items-end lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[66%]">
                    <Img
                      src="images/img_settings.svg"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                      alt="settings"
                    />
                    <Text className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Setting
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </aside>
        </Stack>
        <Stack className="2xl:h-[1001px] 3xl:h-[1201px] lg:h-[778px] xl:h-[890px] w-[83%]">
          <Line className="absolute bg-gray_101 h-[1px] top-[10%] w-[100%]" />
          <Column className="absolute items-center w-[100%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
              <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 w-[auto]">
                Transactions
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="2xl:ml-[424px] 3xl:ml-[509px] flex lg:ml-[329px] w-[22%] xl:ml-[377px]"
                name="GroupEight"
                placeholder="Search for something"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[7px] lg:mr-[11px] xl:w-[16px] xl:h-[17px] xl:ml-[8px] xl:mr-[13px] 2xl:w-[19px] 2xl:h-[20px] 2xl:ml-[9px] 2xl:mr-[15px] 3xl:w-[22px] 3xl:h-[23px] 3xl:ml-[10px] 3xl:mr-[18px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#888ea2"
                      className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[7px] lg:mr-[17px] xl:w-[16px] xl:h-[17px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[19px] 2xl:h-[20px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[22px] 3xl:h-[23px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcCircleBorder25"
                variant="srcFillGray102"
              ></Input>
              <Button
                className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                size="mdIcn"
                variant="icbFillGray103"
              >
                <Img
                  src="images/img_settings_50X50.svg"
                  className="flex items-center justify-center lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                  alt="settings One"
                />
              </Button>
              <Button
                className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                size="mdIcn"
                variant="icbFillGray103"
              >
                <Img
                  src="images/img_notification.svg"
                  className="flex items-center justify-center"
                  alt="notification"
                />
              </Button>
              <Img
                src="images/img_ellipse1.png"
                className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                alt="EllipseOne"
              />
            </Row>
            <Column className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[93%]">
              <Row className="items-center justify-evenly lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
                <Column className="items-center w-[68%]">
                  <Row className="justify-between w-[96%]">
                    <Text className="font-normal mt-[1px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                      My Cards
                    </Text>
                    <Text className="font-normal lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_900 w-[auto]">
                      + Add Card
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[96%]">
                    <Column className="bg-indigo_600 items-center lg:pt-[18px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[48%]">
                      <Column className="w-[86%]">
                        <Row className="justify-evenly w-[100%]">
                          <Column className="mt-[3px] w-[89%]">
                            <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                              Balance
                            </Text>
                            <Text className="font-normal mt-[3px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                              $5,756
                            </Text>
                          </Column>
                          <Img
                            src="images/img_chipcard.png"
                            className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:w-[26px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[40px]"
                            alt="ChipCard"
                          />
                        </Row>
                        <Row className="items-center ml-[2px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[75%]">
                          <Column className="w-[69%]">
                            <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700_b2 w-[auto]">
                              CARD HOLDER
                            </Text>
                            <Text className="font-normal mt-[4px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                              Eddy Cusuma
                            </Text>
                          </Column>
                          <Column className="w-[31%]">
                            <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700_b2 w-[auto]">
                              VALID THRU
                            </Text>
                            <Text className="font-normal mt-[4px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                              12/22
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                        wrapClassName="2xl:mt-[33px] 3xl:mt-[39px] flex lg:mt-[25px] w-[100%] xl:mt-[29px]"
                        name="Group319"
                        placeholder="3778 **** **** 1234"
                        suffix={
                          <Img
                            src="images/img_contrast.svg"
                            className="mr-[1px] lg:w-[34px] lg:ml-[27px] xl:w-[39px] xl:ml-[31px] 2xl:w-[44px] 2xl:ml-[35px] 3xl:w-[52px] 3xl:ml-[42px] my-[auto]"
                            alt="contrast"
                          />
                        }
                        shape="CustomBorderBL25"
                        size="lg"
                        variant="GradientWhiteA70026WhiteA70026"
                      ></Input>
                    </Column>
                    <Column className="bg-indigo_500 items-center lg:pt-[18px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[48%]">
                      <Column className="w-[86%]">
                        <Row className="justify-evenly w-[100%]">
                          <Column className="mt-[3px] w-[89%]">
                            <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                              Balance
                            </Text>
                            <Text className="font-normal mt-[3px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                              $5,756
                            </Text>
                          </Column>
                          <Img
                            src="images/img_chipcard.png"
                            className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:w-[26px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[40px]"
                            alt="ChipCard One"
                          />
                        </Row>
                        <Row className="items-center ml-[2px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[75%]">
                          <Column className="w-[69%]">
                            <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700_b2 w-[auto]">
                              CARD HOLDER
                            </Text>
                            <Text className="font-normal mt-[4px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                              Eddy Cusuma
                            </Text>
                          </Column>
                          <Column className="w-[31%]">
                            <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700_b2 w-[auto]">
                              VALID THRU
                            </Text>
                            <Text className="font-normal mt-[4px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                              12/22
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                        wrapClassName="2xl:mt-[33px] 3xl:mt-[39px] flex lg:mt-[25px] w-[100%] xl:mt-[29px]"
                        name="Group319 One"
                        placeholder="3778 **** **** 1234"
                        suffix={
                          <Img
                            src="images/img_contrast.svg"
                            className="mr-[1px] lg:w-[34px] lg:ml-[27px] xl:w-[39px] xl:ml-[31px] 2xl:w-[44px] 2xl:ml-[35px] 3xl:w-[52px] 3xl:ml-[42px] my-[auto]"
                            alt="contrast"
                          />
                        }
                        shape="CustomBorderBL25"
                        size="lg"
                        variant="GradientWhiteA70026WhiteA70026"
                      ></Input>
                    </Column>
                  </Row>
                </Column>
                <Column className="mt-[1px] w-[32%]">
                  <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                    My Expense
                  </Text>
                  <Row className="bg-white_A700 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius25 w-[100%]">
                    <Column className="items-center ml-[1px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[12%]">
                      <div className="bg-gray_103 3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] rounded-radius10 w-[100%]"></div>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        Aug
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[12%]">
                      <div className="bg-gray_103 lg:h-[111px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[171px] rounded-radius10 w-[100%]"></div>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        Sep
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[12%]">
                      <div className="bg-gray_103 3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] rounded-radius10 w-[100%]"></div>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        Oct
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[135px] lg:mt-[87px] w-[12%]">
                      <div className="bg-gray_103 lg:h-[39px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] rounded-radius10 w-[100%]"></div>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        Nov
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] w-[18%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]">
                        $12,500
                      </Text>
                      <div className="bg-indigo_600 lg:h-[107px] xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius10 w-[67%]"></div>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        Dec
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[12%]">
                      <div className="bg-gray_103 3xl:h-[106px] lg:h-[69px] xl:h-[79px] 2xl:h-[89px] rounded-radius10 w-[100%]"></div>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        Jan
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Text className="font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                Recent Transactions
              </Text>
              <Row className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[38%]">
                <Column className="items-center w-[51%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                    All Transactions
                  </Text>
                  <Line className="bg-blue_A700 h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[67%]" />
                </Column>
                <Text className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Income
                </Text>
                <Text className="font-medium lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Expense
                </Text>
              </Row>
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
            </Column>
            <Stack className="lg:h-[368px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[568px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
              <Column className="absolute bottom-[3%] w-[100%]">
                <Slider
                  slidesToShow={4}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00]"
                  ref={sliderRef}
                  className="w-[100%]"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <Column className="bg-white_A700 items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius25 w-[100%]">
                        <Row className="w-[95%]">
                          <Text className="font-medium my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                            Description
                          </Text>
                          <Text className="font-medium lg:ml-[111px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                            Transaction ID
                          </Text>
                          <Text className="font-medium lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                            Type
                          </Text>
                          <Text className="font-medium 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                            Card
                          </Text>
                          <Text className="font-medium 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                            Date
                          </Text>
                          <Text className="font-medium lg:ml-[126px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                            Amount
                          </Text>
                          <Text className="font-medium lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                            Receipt
                          </Text>
                        </Row>
                        <List
                          className="gap-[0] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] min-h-[auto] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[98%]"
                          orientation="vertical"
                        >
                          <Row className="items-end lg:my-[12px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                            <Button
                              className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center my-[2px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="smIcn"
                              variant="icbOutlineRed700"
                            >
                              <Img
                                src="images/img_arrow1.svg"
                                className="flex items-center justify-center"
                                alt="ArrowOne"
                              />
                            </Button>
                            <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Spotify Subscription
                            </Text>
                            <Text className="font-normal lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              #12548796
                            </Text>
                            <Text className="font-normal lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Shopping
                            </Text>
                            <Text className="font-normal lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              1234 ****
                            </Text>
                            <Text className="font-normal lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              28 Jan, 12.30 AM
                            </Text>
                            <Text className="font-medium lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                              -$2,500
                            </Text>
                            <Button
                              className="font-normal lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                              shape="RoundedBorder17"
                              size="sm"
                              variant="OutlineIndigo600"
                            >
                              Download
                            </Button>
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-gray_104" />
                          <Row className="items-center lg:my-[12px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                            <Button
                              className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="smIcn"
                              variant="icbOutlineGreen600"
                            >
                              <Img
                                src="images/img_arrow1_green_600.svg"
                                className="flex items-center justify-center"
                                alt="ArrowOne One"
                              />
                            </Button>
                            <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Freepik Sales
                            </Text>
                            <Text className="font-normal lg:ml-[64px] xl:ml-[73px] 2xl:ml-[83px] 3xl:ml-[99px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              #12548796
                            </Text>
                            <Text className="font-normal lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Transfer
                            </Text>
                            <Text className="font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              1234 ****
                            </Text>
                            <Text className="font-normal lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              25 Jan, 10.40 PM
                            </Text>
                            <Text className="font-medium lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                              +$750
                            </Text>
                            <Button
                              className="font-normal lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                              shape="RoundedBorder17"
                              size="sm"
                              variant="OutlineIndigo600"
                            >
                              Download
                            </Button>
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-gray_104" />
                          <Row className="items-center lg:my-[12px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                            <Button
                              className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="smIcn"
                              variant="icbOutlineRed700"
                            >
                              <Img
                                src="images/img_arrow1.svg"
                                className="flex items-center justify-center"
                                alt="ArrowOne Two"
                              />
                            </Button>
                            <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Mobile Service
                            </Text>
                            <Text className="font-normal lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              #12548796
                            </Text>
                            <Text className="font-normal lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Service
                            </Text>
                            <Text className="font-normal lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              1234 ****
                            </Text>
                            <Text className="font-normal lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              20 Jan, 10.40 PM
                            </Text>
                            <Text className="font-medium lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                              -$150
                            </Text>
                            <Button
                              className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                              shape="RoundedBorder17"
                              size="sm"
                              variant="OutlineIndigo600"
                            >
                              Download
                            </Button>
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-gray_104" />
                          <Row className="items-center lg:my-[12px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                            <Button
                              className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="smIcn"
                              variant="icbOutlineRed700"
                            >
                              <Img
                                src="images/img_arrow1.svg"
                                className="flex items-center justify-center"
                                alt="ArrowOne Three"
                              />
                            </Button>
                            <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Wilson
                            </Text>
                            <Text className="font-normal lg:ml-[104px] xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              #12548796
                            </Text>
                            <Text className="font-normal lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Transfer
                            </Text>
                            <Text className="font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              1234 ****
                            </Text>
                            <Text className="font-normal lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              15 Jan, 03.29 PM
                            </Text>
                            <Text className="font-medium lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                              -$1050
                            </Text>
                            <Button
                              className="font-normal lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                              shape="RoundedBorder17"
                              size="sm"
                              variant="OutlineIndigo600"
                            >
                              Download
                            </Button>
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-gray_104" />
                          <Row className="items-center lg:my-[12px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                            <Button
                              className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="smIcn"
                              variant="icbOutlineGreen600"
                            >
                              <Img
                                src="images/img_arrow1_green_600.svg"
                                className="flex items-center justify-center"
                                alt="ArrowOne Four"
                              />
                            </Button>
                            <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Emilly
                            </Text>
                            <Text className="font-normal lg:ml-[109px] xl:ml-[125px] 2xl:ml-[141px] 3xl:ml-[169px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              #12548796
                            </Text>
                            <Text className="font-normal lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              Transfer
                            </Text>
                            <Text className="font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              1234 ****
                            </Text>
                            <Text className="font-normal lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                              14 Jan, 10.40 PM
                            </Text>
                            <Text className="font-medium lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                              +$840
                            </Text>
                            <Button
                              className="font-normal lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                              shape="RoundedBorder17"
                              size="sm"
                              variant="OutlineIndigo600"
                            >
                              Download
                            </Button>
                          </Row>
                        </List>
                      </Column>
                    </React.Fragment>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return <div className="" />;
                    }
                    return <div className="" role="button" tabIndex={0} />;
                  }}
                />
                <Row className="items-center justify-end ml-[auto] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[23%]">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="cursor-pointer lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[2%]"
                    onClick={() => sliderRef.current?.slidePrev()}
                    alt="arrowleft"
                  />
                  <Img
                    src="images/img_arrowright.svg"
                    className="cursor-pointer lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[356px] w-[2%]"
                    onClick={() => sliderRef.current?.slideNext()}
                    alt="arrowright"
                  />
                </Row>
              </Column>
              <Row className="absolute bottom-[0] lg:px-[21px] xl:px-[24px] 2xl:px-[28px] 3xl:px-[33px] right-[0] w-[24%]">
                <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-indigo_600 w-[auto]">
                  Previous
                </Text>
                <Button
                  className="font-medium lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="FillIndigo600"
                >
                  1
                </Button>
                <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-indigo_600 w-[auto]">
                  2
                </Text>
                <Text className="font-medium lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-indigo_600 w-[auto]">
                  3
                </Text>
                <Text className="font-medium lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-indigo_600 w-[auto]">
                  4
                </Text>
                <Text className="font-medium lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-indigo_600 w-[auto]">
                  Next
                </Text>
              </Row>
            </Stack>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default TransactionPage;
