import React from "react";

import { Row, Column, Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const LoanPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter mx-[auto] w-[100%]">
        <aside className="items-center w-[17%]">
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
                <Row className="lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[95%]">
                  <Img
                    src="images/img_glyph.svg"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="Glyph"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    Transactions
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pl-[2px] w-[77%]">
                  <Img
                    src="images/img_user.svg"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[16%]"
                    alt="user"
                  />
                  <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    Accounts
                  </Text>
                </Row>
                <Row className="lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[91%]">
                  <Img
                    src="images/img_map.svg"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="map"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    Investments
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[93%]">
                  <Img
                    src="images/img_group.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[16%]"
                    alt="Group"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    Credit Cards
                  </Text>
                </Row>
              </Column>
              <Row className="items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[64%]">
                <Line className="bg-indigo_600 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <Img
                  src="images/img_question_25X24.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[18%]"
                  alt="question"
                />
                <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_600 w-[auto]">
                  Loans
                </Text>
              </Row>
              <Column className="lg:mb-[237px] xl:mb-[271px] 2xl:mb-[305px] 3xl:mb-[366px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[75%]">
                <Row className="w-[75%]">
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
        <Column className="items-center w-[83%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 w-[auto]">
              Loan
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:ml-[533px] 3xl:ml-[639px] flex lg:ml-[414px] w-[22%] xl:ml-[474px]"
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
          <Column className="lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[93%]">
            <List
              className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-4 min-h-[auto] w-[100%]"
              orientation="horizontal"
            >
              <Row className="bg-white_A700 items-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]">
                <Button
                  className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center ml-[2px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_user_60X60.svg"
                    className="flex items-center justify-center"
                    alt="user One"
                  />
                </Button>
                <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[57%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Personal Loans
                  </Text>
                  <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    $50,000
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius25 w-[100%]">
                <Button
                  className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center my-[4px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_bag_60X60.svg"
                    className="flex items-center justify-center"
                    alt="bag"
                  />
                </Button>
                <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[60%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Corporate Loans
                  </Text>
                  <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    $100,000
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]">
                <Button
                  className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center ml-[1px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_group_60X60.svg"
                    className="flex items-center justify-center"
                    alt="Group One"
                  />
                </Button>
                <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mr-[1px] w-[58%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Business Loans
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    $500,000
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius25 w-[100%]">
                <Button
                  className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center my-[4px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_airplane.svg"
                    className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="airplane"
                  />
                </Button>
                <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[62%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Custom Loans
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Choose Money
                  </Text>
                </Column>
              </Row>
            </List>
            <Text className="font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
              Active Loans Overview
            </Text>
            <Column className="bg-white_A700 justify-end lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius25 w-[100%]">
              <Row className="3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mr-[auto] mt-[1px] w-[92%]">
                <Text className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  SL No
                </Text>
                <Text className="font-medium lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Loan Money
                </Text>
                <Text className="font-medium lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Left to repay
                </Text>
                <Text className="font-medium lg:ml-[59px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Duration
                </Text>
                <Text className="font-medium 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[81px] xl:ml-[93px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Interest rate
                </Text>
                <Text className="font-medium lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Installment
                </Text>
                <Text className="font-medium 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Repay
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[97%]"
                orientation="vertical"
              >
                <Row className="items-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    01.
                  </Text>
                  <Text className="font-normal lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $100,000
                  </Text>
                  <Text className="font-normal 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $40,500
                  </Text>
                  <Text className="font-normal 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    8 Months
                  </Text>
                  <Text className="font-normal 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    12%
                  </Text>
                  <Text className="font-normal xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $2,000 / month
                  </Text>
                  <Button
                    className="font-medium lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    Repay
                  </Button>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                <Row className="items-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    02.
                  </Text>
                  <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $500,000
                  </Text>
                  <Text className="font-normal 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] 2xl:ml-[94px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $250,000
                  </Text>
                  <Text className="font-normal 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    36 Months
                  </Text>
                  <Text className="font-normal 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    10%
                  </Text>
                  <Text className="font-normal xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $8,000 / month
                  </Text>
                  <Button
                    className="font-medium lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    Repay
                  </Button>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                <Row className="items-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    03.
                  </Text>
                  <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $900,000
                  </Text>
                  <Text className="font-normal 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] 2xl:ml-[94px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $40,500
                  </Text>
                  <Text className="font-normal 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    12 Months
                  </Text>
                  <Text className="font-normal 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    12%
                  </Text>
                  <Text className="font-normal xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $5,000 / month
                  </Text>
                  <Button
                    className="font-medium lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    Repay
                  </Button>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                <Row className="items-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    04.
                  </Text>
                  <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $50,000
                  </Text>
                  <Text className="font-normal 2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $40,500
                  </Text>
                  <Text className="font-normal 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    25 Months
                  </Text>
                  <Text className="font-normal 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    5%
                  </Text>
                  <Text className="font-normal xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $2,000 / month
                  </Text>
                  <Button
                    className="font-medium lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    Repay
                  </Button>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                <Row className="items-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    05.
                  </Text>
                  <Text className="font-normal lg:ml-[59px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $50,000
                  </Text>
                  <Text className="font-normal 2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $40,500
                  </Text>
                  <Text className="font-normal 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    5 Months
                  </Text>
                  <Text className="font-normal 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    16%
                  </Text>
                  <Text className="font-normal xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $10,000 / month
                  </Text>
                  <Button
                    className="font-medium lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    Repay
                  </Button>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                <Row className="items-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    06.
                  </Text>
                  <Text className="font-normal lg:ml-[59px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $80,000
                  </Text>
                  <Text className="font-normal 2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $25,500
                  </Text>
                  <Text className="font-normal 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[97px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    14 Months
                  </Text>
                  <Text className="font-normal 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[91px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    8%
                  </Text>
                  <Text className="font-normal xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $2,000 / month
                  </Text>
                  <Button
                    className="font-medium lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    Repay
                  </Button>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                <Row className="items-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    07.
                  </Text>
                  <Text className="font-normal lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $12,000
                  </Text>
                  <Text className="font-normal 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $5,500
                  </Text>
                  <Text className="font-normal xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    9 Months
                  </Text>
                  <Text className="font-normal 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    13%
                  </Text>
                  <Text className="font-normal xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $500 / month
                  </Text>
                  <Button
                    className="font-medium lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    Repay
                  </Button>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                <Row className="items-center lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    08.
                  </Text>
                  <Text className="font-normal lg:ml-[59px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $160,000
                  </Text>
                  <Text className="font-normal 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $100,800
                  </Text>
                  <Text className="font-normal 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    3 Months
                  </Text>
                  <Text className="font-normal 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    12%
                  </Text>
                  <Text className="font-normal xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    $900 / month
                  </Text>
                  <Button
                    className="font-medium lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    Repay
                  </Button>
                </Row>
              </List>
              <Row className="items-center 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mr-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[83%]">
                <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                  Total
                </Text>
                <Text className="font-medium lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                  $125,0000
                </Text>
                <Text className="font-medium 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] 2xl:ml-[85px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                  $750,000
                </Text>
                <Text className="font-medium lg:ml-[324px] xl:ml-[370px] 2xl:ml-[417px] 3xl:ml-[500px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                  $50,000 / month
                </Text>
              </Row>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default LoanPage;
