import React from "react";

import {
  Row,
  Column,
  Img,
  Text,
  Line,
  Input,
  Button,
  List,
  Stack,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MainDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-center mx-[auto] w-[100%]">
        <aside className="items-center w-[17%]">
          <Column className="">
            <Column className="bg-white_A700 border border-gray_300 border-solid lg:pr-[28px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] lg:py-[28px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] w-[100%]">
              <Row className="items-center justify-center lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] pb-[1px] w-[76%]">
                <Img
                  src="images/img_group1016.png"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[24%]"
                  alt="Group1016"
                />
                <Text className="font-bold ml-[4px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-indigo_600 w-[auto]">
                  FirstBank
                </Text>
              </Row>
              <Row className="items-center lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[84%]">
                <Line className="bg-indigo_600 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <Img
                  src="images/img_home_25X25.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                  alt="home"
                />
                <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_600 w-[auto]">
                  Dashboard
                </Text>
              </Row>
              <Column className="lg:mb-[354px] xl:mb-[405px] 2xl:mb-[456px] 3xl:mb-[547px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[75%]">
                <Row className="w-[98%]">
                  <Img
                    src="images/img_glyph.svg"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="Glyph"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    Transactions
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pl-[2px] w-[79%]">
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
        <Line className="bg-gray_101 xl:h-[1054px] 2xl:h-[1185px] 3xl:h-[1422px] lg:h-[921px] w-[1px]" />
        <Column className="items-center w-[83%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 w-[auto]">
              Overview
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:ml-[471px] 3xl:ml-[565px] flex lg:ml-[366px] w-[22%] xl:ml-[418px]"
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
          <Column className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[93%]">
            <Row className="items-center justify-evenly pt-[2px] w-[100%]">
              <Column className="items-center w-[68%]">
                <Row className="justify-between w-[96%]">
                  <Text className="font-normal mt-[1px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                    My Cards
                  </Text>
                  <Text className="font-normal lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_900 w-[auto]">
                    See All
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[96%]">
                  <Column className="bg-indigo_600 items-center lg:pt-[18px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[48%]">
                    <Column className="w-[86%]">
                      <Row className="justify-evenly w-[100%]">
                        <Column className="mt-[2px] w-[89%]">
                          <Text className="font-lato font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                            Balance
                          </Text>
                          <Text className="font-inter font-normal mt-[3px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                            $5,756
                          </Text>
                        </Column>
                        <Img
                          src="images/img_chipcard.png"
                          className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:w-[26px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[40px]"
                          alt="ChipCard"
                        />
                      </Row>
                      <Row className="items-center ml-[2px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[75%]">
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
                        <Column className="mt-[2px] w-[89%]">
                          <Text className="font-lato font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                            Balance
                          </Text>
                          <Text className="font-inter font-normal mt-[3px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                            $5,756
                          </Text>
                        </Column>
                        <Img
                          src="images/img_chipcard.png"
                          className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:w-[26px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[40px]"
                          alt="ChipCard One"
                        />
                      </Row>
                      <Row className="items-center ml-[2px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[75%]">
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
              <Column className="w-[32%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Recent Transaction
                </Text>
                <List
                  className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius25 w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mt-[5px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_printer.svg"
                        className="flex items-center justify-center"
                        alt="printer"
                      />
                    </Button>
                    <Column className="lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[55%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                        Deposit from my Card
                      </Text>
                      <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        28 January 2021
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                      -$850
                    </Text>
                  </Row>
                  <Row className="items-center lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_call_55X55.svg"
                        className="flex items-center justify-center"
                        alt="call"
                      />
                    </Button>
                    <Column className="lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[49%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                        Deposit Paypal
                      </Text>
                      <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        25 January 2021
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                      +$2,500
                    </Text>
                  </Row>
                  <Row className="items-center mb-[5px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_group315.svg"
                        className="flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                        alt="Group315"
                      />
                    </Button>
                    <Column className="lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[48%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                        Jemi Wilson
                      </Text>
                      <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        21 January 2021
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                      +$5,400
                    </Text>
                  </Row>
                </List>
              </Column>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
              <Column className="w-[68%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Weekly Activity
                </Text>
                <Column className="bg-white_A700 items-end justify-end lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] rounded-radius25 w-[96%]">
                  <Row className="justify-end mr-[2px] mt-[1px] w-[29%]">
                    <div className="bg-indigo_200 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] rounded-radius50 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                      Diposit
                    </Text>
                    <div className="bg-indigo_600 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] mt-[2px] rounded-radius50 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                      Withdraw
                    </Text>
                  </Row>
                  <Row className="items-center mr-[2px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[99%]">
                    <Column className="w-[4%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        500
                      </Text>
                      <Text className="font-normal ml-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        400
                      </Text>
                      <Text className="font-normal ml-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        300
                      </Text>
                      <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        200
                      </Text>
                      <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        100
                      </Text>
                      <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        0
                      </Text>
                    </Column>
                    <Img
                      src="images/img_group899.svg"
                      className="lg:h-[145px] xl:h-[166px] 2xl:h-[187px] 3xl:h-[224px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[95%]"
                      alt="Group899"
                    />
                  </Row>
                  <Row className="items-center justify-end lg:mr-[30px] xl:mr-[34px] 2xl:mr-[39px] 3xl:mr-[46px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[83%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                      Sat
                    </Text>
                    <Text className="font-normal lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] my-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                      Sun
                    </Text>
                    <Text className="font-normal lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                      Mon
                    </Text>
                    <Text className="font-normal lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                      Tue
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                      Wed
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                      Thu
                    </Text>
                    <Text className="font-normal mb-[1px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                      Fri
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="w-[32%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Expense Statistics
                </Text>
                <Stack className="bg-white_A700 lg:h-[251px] xl:h-[287px] 2xl:h-[323px] 3xl:h-[387px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:px-[24px] xl:px-[27px] 2xl:px-[31px] 3xl:px-[37px] rounded-radius25 w-[100%]">
                  <Column
                    className="absolute bg-cover bg-repeat items-center left-[9%] lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] top-[0] w-[53%]"
                    style={{
                      backgroundImage: "url('images/img_group900.svg')",
                    }}
                  >
                    <Text className="font-medium lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center text-white_A700 w-[76%]">
                      <span className="text-white_A700 font-inter font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        30%
                        <br />
                      </span>
                      <span className="text-white_A700 font-inter font-bold">
                        Entertainment
                      </span>
                    </Text>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[3%] items-center left-[3%] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[31%]"
                    style={{
                      backgroundImage: "url('images/img_group903.svg')",
                    }}
                  >
                    <Text className="font-medium lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center text-white_A700 w-[97%]">
                      <span className="text-white_A700 font-inter font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        20%
                        <br />
                      </span>
                      <span className="text-white_A700 font-inter font-bold">
                        Investment
                      </span>
                    </Text>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-repeat items-end justify-end 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] right-[2%] top-[9%] w-[41%]"
                    style={{
                      backgroundImage: "url('images/img_group901.svg')",
                    }}
                  >
                    <Text className="font-medium lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mr-[14px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center text-white_A700 w-[61%]">
                      <span className="text-white_A700 font-inter font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        15%
                        <br />
                      </span>
                      <span className="text-white_A700 font-inter font-bold">
                        Bill Expense
                      </span>
                    </Text>
                  </Column>
                  <Column className="absolute bg-indigo_200 bottom-[0] xl:h-[106px] 2xl:h-[120px] 3xl:h-[143px] lg:h-[93px] items-center lg:px-[17px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] right-[12%] xl:w-[105px] 2xl:w-[119px] 3xl:w-[142px] lg:w-[92px]">
                    <Text className="font-medium lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mb-[31px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[48px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center text-white_A700 w-[66%]">
                      <span className="text-white_A700 font-inter font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        35%
                        <br />
                      </span>
                      <span className="text-white_A700 font-inter font-bold">
                        Others
                      </span>
                    </Text>
                  </Column>
                </Stack>
              </Column>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[3px] w-[100%]">
              <Column className="w-[43%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_800 w-[auto]">
                  Quick Transfer
                </Text>
                <Column className="bg-white_A700 items-center justify-center lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[94%]">
                  <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                    <List
                      className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 min-h-[auto] w-[79%]"
                      orientation="horizontal"
                    >
                      <Column className="items-center pb-[3px] w-[100%]">
                        <Img
                          src="images/img_ellipse18.png"
                          className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                          alt="EllipseEighteen"
                        />
                        <Text className="font-bold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_700 w-[auto]">
                          Livia Bator
                        </Text>
                        <Text className="font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          CEO
                        </Text>
                      </Column>
                      <Column className="items-center pb-[3px] w-[100%]">
                        <Img
                          src="images/img_ellipse19.png"
                          className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                          alt="EllipseNineteen"
                        />
                        <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
                          Randy Press
                        </Text>
                        <Text className="font-normal mt-[4px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          Director
                        </Text>
                      </Column>
                      <Column className="items-center w-[100%]">
                        <Img
                          src="images/img_ellipse17.png"
                          className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                          alt="EllipseSeventeen"
                        />
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]">
                          Workman
                        </Text>
                        <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          Designer
                        </Text>
                      </Column>
                    </List>
                    <Button
                      className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                      size="xlIcn"
                      variant="icbOutlineGray300cc"
                    >
                      <Img
                        src="images/img_arrowdown.svg"
                        className="flex items-center justify-center"
                        alt="arrowright"
                      />
                    </Button>
                  </Row>
                  <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Write Amount
                    </Text>
                    <Row className="bg-gray_103 items-center justify-between lg:pl-[23px] xl:pl-[26px] 2xl:pl-[30px] 3xl:pl-[36px] rounded-radius25 w-[67%]">
                      <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_700 w-[auto]">
                        525.50
                      </Text>
                      <Button
                        className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[53%]"
                        shape="CircleBorder25"
                        size="md"
                        variant="OutlineGray300cc"
                      >
                        Send
                      </Button>
                    </Row>
                  </Row>
                </Column>
              </Column>
              <Column className="w-[57%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Balance History
                </Text>
                <Stack className="bg-white_A700 lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius25 w-[100%]">
                  <Column className="absolute bottom-[3%] inset-x-[0] mx-[auto] w-[78%]">
                    <Row className="items-center ml-[1px] w-[95%]">
                      <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] w-[1px]"></div>
                      <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] w-[1px]"></div>
                      <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] w-[1px]"></div>
                      <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] w-[1px]"></div>
                      <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] w-[1px]"></div>
                      <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] w-[1px]"></div>
                      <div className="bg-bluegray_400 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] w-[1px]"></div>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                      <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                        Jul
                      </Text>
                      <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                        Aug
                      </Text>
                      <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                        Sep
                      </Text>
                      <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                        Oct
                      </Text>
                      <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                        Nov{" "}
                      </Text>
                      <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                        Dec
                      </Text>
                      <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                        Jan
                      </Text>
                    </Row>
                  </Column>
                  <Column className="absolute left-[0] pl-[4px] top-[4%] w-[7%]">
                    <Row className="items-center justify-between ml-[auto] w-[95%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        800
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[16%]"></div>
                    </Row>
                    <Row className="items-center justify-between ml-[auto] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[95%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        600
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[16%]"></div>
                    </Row>
                    <Row className="items-center justify-between ml-[auto] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[97%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        400
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[16%]"></div>
                    </Row>
                    <Row className="items-center justify-between ml-[auto] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[95%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        200
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[16%]"></div>
                    </Row>
                    <Row className="items-end justify-end ml-[auto] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[56%]">
                      <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]">
                        0
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[27%]"></div>
                    </Row>
                  </Column>
                  <Stack
                    className="absolute bg-cover bg-repeat lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] pr-[1px] right-[1%] top-[5%] w-[86%]"
                    style={{ backgroundImage: "url('images/img_group3.svg')" }}
                  >
                    <Img
                      src="images/img_vector_indigo_600.png"
                      className="absolute lg:h-[138px] xl:h-[158px] 2xl:h-[178px] 3xl:h-[213px] inset-y-[2%] w-[100%]"
                      alt="Vector Twelve"
                    />
                  </Stack>
                </Stack>
              </Column>
            </Row>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default MainDashboardPage;
