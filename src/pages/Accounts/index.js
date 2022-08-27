import React from "react";

import { Row, Column, Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const AccountsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-center mx-[auto] w-[100%]">
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
              </Column>
              <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[78%]">
                <Line className="bg-indigo_600 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <Img
                  src="images/img_user_25X20.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[12%]"
                  alt="user"
                />
                <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_600 w-[auto]">
                  Accounts
                </Text>
              </Row>
              <Column className="lg:mb-[237px] xl:mb-[271px] 2xl:mb-[305px] 3xl:mb-[366px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[75%]">
                <Row className="w-[94%]">
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
        <Line className="bg-gray_101 2xl:h-[1063px] 3xl:h-[1276px] lg:h-[826px] xl:h-[945px] w-[1px]" />
        <Column className="items-center w-[83%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 w-[auto]">
              Accounts
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:ml-[470px] 3xl:ml-[564px] flex lg:ml-[365px] w-[22%] xl:ml-[418px]"
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
          <Column className="items-center lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[93%]">
            <Row className="items-center justify-between w-[100%]">
              <List
                className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] w-[49%]"
                orientation="horizontal"
              >
                <Row className="bg-white_A700 items-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]">
                  <Button
                    className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_info.svg"
                      className="flex items-center justify-center"
                      alt="info"
                    />
                  </Button>
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[48%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      My Balance
                    </Text>
                    <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-indigo_600 w-[auto]">
                      $12,750
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700 items-center justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]">
                  <Button
                    className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_group400.svg"
                      className="flex items-center justify-center"
                      alt="Group400"
                    />
                  </Button>
                  <Column className="lg:mx-[11px] xl:mx-[13px] 2xl:mx-[15px] 3xl:mx-[18px] w-[43%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Income
                    </Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-indigo_600 w-[auto]">
                      $5,600
                    </Text>
                  </Column>
                </Row>
              </List>
              <Row className="bg-white_A700 items-center justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[23%]">
                <Button
                  className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_clock_70X70.svg"
                    className="flex items-center justify-center"
                    alt="clock"
                  />
                </Button>
                <Column className="lg:mx-[11px] xl:mx-[13px] 2xl:mx-[15px] 3xl:mx-[18px] w-[43%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Expense
                  </Text>
                  <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-indigo_600 w-[auto]">
                    $3,460
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[23%]">
                <Button
                  className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_ticket.svg"
                    className="flex items-center justify-center"
                    alt="ticket"
                  />
                </Button>
                <Column className="lg:mx-[10px] xl:mx-[12px] 2xl:mx-[14px] 3xl:mx-[16px] w-[45%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Total Saving
                  </Text>
                  <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-indigo_600 w-[auto]">
                    $7,920
                  </Text>
                </Column>
              </Row>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] pt-[2px] w-[100%]">
              <Column className="w-[68%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Last Transaction
                </Text>
                <List
                  className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[96%]"
                  orientation="vertical"
                >
                  <Row className="lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      shape="icbRoundedBorder20"
                      size="mdIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_alarm.svg"
                        className="flex items-center justify-center"
                        alt="alarm"
                      />
                    </Button>
                    <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[24%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Spotify Subscription
                      </Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        25 Jan 2021
                      </Text>
                    </Column>
                    <Text className="font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Shopping
                    </Text>
                    <Text className="font-normal lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      1234 ****
                    </Text>
                    <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Pending
                    </Text>
                    <Text className="font-medium lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                      -$150
                    </Text>
                  </Row>
                  <Row className="items-center lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_group327.svg"
                        className="flex items-center justify-center lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="Group327"
                      />
                    </Button>
                    <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[24%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Mobile Service
                      </Text>
                      <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        25 Jan 2021
                      </Text>
                    </Column>
                    <Text className="font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Service
                    </Text>
                    <Text className="font-normal lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      1234 ****
                    </Text>
                    <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Completed
                    </Text>
                    <Text className="font-medium lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                      -$340
                    </Text>
                  </Row>
                  <Row className="items-center lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_group326.svg"
                        className="flex items-center justify-center lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="Group326"
                      />
                    </Button>
                    <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[24%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Emilly Wilson
                      </Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        25 Jan 2021
                      </Text>
                    </Column>
                    <Text className="font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Transfer
                    </Text>
                    <Text className="font-normal lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      1234 ****
                    </Text>
                    <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Completed
                    </Text>
                    <Text className="font-medium lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                      +$780
                    </Text>
                  </Row>
                </List>
              </Column>
              <Column className="items-center w-[32%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                    My Card
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_900 w-[auto]">
                    See All
                  </Text>
                </Row>
                <Column className="bg-indigo_600 items-center justify-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:pt-[18px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[100%]">
                  <Column className="w-[85%]">
                    <Row className="justify-evenly pt-[1px] w-[100%]">
                      <Column className="mt-[2px] w-[89%]">
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
                    <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[76%]">
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
                    wrapClassName="2xl:mt-[37px] 3xl:mt-[44px] flex lg:mt-[28px] w-[100%] xl:mt-[32px]"
                    name="Group1033"
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
              </Column>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[2px] w-[100%]">
              <Column className="w-[68%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Debit & Credit Overview
                </Text>
                <Column className="bg-white_A700 items-center justify-end lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius25 w-[96%]">
                  <Row className="mt-[1px] w-[99%]">
                    <Text className="font-normal mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      <span className="text-bluegray_801 font-inter">
                        $7,560
                      </span>
                      <span className="text-bluegray_400 font-inter">
                        {" "}
                        Debited &{" "}
                      </span>
                      <span className="text-bluegray_801 font-inter">
                        $5,420
                      </span>
                      <span className="text-bluegray_400 font-inter">
                        {" "}
                        Credited in this Week
                      </span>
                    </Text>
                    <div className="bg-indigo_600 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[118px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] mt-[2px] rounded-radius5 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Debit
                    </Text>
                    <div className="bg-indigo_200 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[2px] rounded-radius5 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Credit
                    </Text>
                  </Row>
                  <Row className="items-end lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[99%]">
                    <div className="bg-indigo_600 lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_200 lg:h-[182px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_600 2xl:h-[107px] 3xl:h-[128px] lg:h-[83px] xl:h-[95px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[99px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_200 lg:h-[145px] xl:h-[166px] 2xl:h-[187px] 3xl:h-[224px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_600 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[91px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[102px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_200 lg:h-[109px] xl:h-[124px] 2xl:h-[140px] 3xl:h-[167px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[114px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[95px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_600 lg:h-[165px] xl:h-[189px] 2xl:h-[213px] 3xl:h-[255px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_200 xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] lg:h-[96px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[98px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_600 lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[84px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_200 lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[257px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_600 lg:h-[123px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_200 2xl:h-[106px] 3xl:h-[127px] lg:h-[82px] xl:h-[94px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[100px] xl:mt-[114px] 2xl:mt-[129px] 3xl:mt-[154px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_600 lg:h-[140px] xl:h-[160px] 2xl:h-[180px] 3xl:h-[215px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] rounded-radius10 w-[4%]"></div>
                    <div className="bg-indigo_200 lg:h-[168px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[260px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius10 w-[4%]"></div>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[91%]">
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Sat
                    </Text>
                    <Text className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Sun
                    </Text>
                    <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Mon
                    </Text>
                    <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Tue
                    </Text>
                    <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Wed
                    </Text>
                    <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Thu
                    </Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Fri
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="mt-[1px] w-[32%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Invoices Sent
                </Text>
                <List
                  className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_refresh.svg"
                        className="flex items-center justify-center"
                        alt="refresh"
                      />
                    </Button>
                    <Column className="w-[52%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Apple Store
                      </Text>
                      <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        5h ago
                      </Text>
                    </Column>
                    <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_600 w-[auto]">
                      $450
                    </Text>
                  </Row>
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_group326.svg"
                        className="flex items-center justify-center lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="Group934"
                      />
                    </Button>
                    <Column className="w-[53%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Michael
                      </Text>
                      <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        2 days ago
                      </Text>
                    </Column>
                    <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_600 w-[auto]">
                      $160
                    </Text>
                  </Row>
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_volume.svg"
                        className="flex items-center justify-center lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="volume"
                      />
                    </Button>
                    <Column className="w-[50%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Playstation
                      </Text>
                      <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        5 days ago
                      </Text>
                    </Column>
                    <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_600 w-[auto]">
                      $1085
                    </Text>
                  </Row>
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_group326.svg"
                        className="flex items-center justify-center lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="Group936"
                      />
                    </Button>
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        William
                      </Text>
                      <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        10 days ago
                      </Text>
                    </Column>
                    <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_600 w-[auto]">
                      $90
                    </Text>
                  </Row>
                </List>
              </Column>
            </Row>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default AccountsPage;
