import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Row,
  Stack,
  Line,
  Column,
  Img,
  Text,
  Input,
  Button,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const InvestmentsPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter mx-[auto] w-[100%]">
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[17%]">
          <Line className="absolute bg-gray_101 2xl:h-[1000px] 3xl:h-[1200px] lg:h-[777px] xl:h-[889px] inset-y-[0] my-[auto] right-[0] w-[1px]" />
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
                </Column>
                <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[89%]">
                  <Line className="bg-indigo_600 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                  <Img
                    src="images/img_upload.svg"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="upload"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_600 w-[auto]">
                    Investments
                  </Text>
                </Row>
                <Column className="lg:mb-[237px] xl:mb-[271px] 2xl:mb-[305px] 3xl:mb-[366px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[75%]">
                  <Row className="w-[96%]">
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
        <Stack className="3xl:h-[1169px] lg:h-[757px] xl:h-[866px] 2xl:h-[974px] w-[83%]">
          <Line className="absolute bg-gray_101 h-[1px] top-[10%] w-[100%]" />
          <Column className="absolute items-center w-[100%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
              <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 w-[auto]">
                Investments
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="2xl:ml-[433px] 3xl:ml-[519px] flex lg:ml-[336px] w-[22%] xl:ml-[385px]"
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
              <List
                className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 min-h-[auto] w-[100%]"
                orientation="horizontal"
              >
                <Row className="bg-white_A700 items-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]">
                  <Button
                    className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_clock.svg"
                      className="flex items-center justify-center"
                      alt="clock"
                    />
                  </Button>
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[57%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Total Invested Amount
                    </Text>
                    <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-indigo_600 w-[auto]">
                      $150,000
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700 items-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]">
                  <Button
                    className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_minimize.svg"
                      className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                      alt="minimize"
                    />
                  </Button>
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[59%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Number of Investments
                    </Text>
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-indigo_600 w-[auto]">
                      1,250
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700 items-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]">
                  <Button
                    className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_reply.svg"
                      className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                      alt="reply"
                    />
                  </Button>
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[36%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Rate of Return
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-indigo_600 w-[auto]">
                      +5.80%
                    </Text>
                  </Column>
                </Row>
              </List>
              <List
                className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="w-[100%]">
                  <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                    Yearly Total Investment
                  </Text>
                  <Row className="bg-white_A700 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius25 w-[100%]">
                    <Column className="ml-[2px] w-[11%]">
                      <Text className="font-normal ml-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $40,000
                      </Text>
                      <Text className="font-normal ml-[1px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $30,000
                      </Text>
                      <Text className="font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $20,000
                      </Text>
                      <Text className="font-normal ml-[1px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $10,000
                      </Text>
                      <Text className="flex font-normal items-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $0
                      </Text>
                    </Column>
                    <Column className="items-center mb-[1px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[86%]">
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[100%]"></div>
                      <Stack className="lg:h-[126px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                        <Column className="absolute bottom-[14%] items-center w-[100%]">
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[100%]"></div>
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]"></div>
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]"></div>
                        </Column>
                        <Img
                          src="images/img_statistics.svg"
                          className="absolute lg:h-[126px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] left-[3%] right-[5%] w-[92%]"
                          alt="Statistics"
                        />
                      </Stack>
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]"></div>
                      <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2016
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2017
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2018
                        </Text>
                        <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2019
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2020
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2021
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column className="w-[100%]">
                  <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                    Monthly Revenue
                  </Text>
                  <Row className="bg-white_A700 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius25 w-[100%]">
                    <Column className="ml-[3px] w-[11%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $40,000
                      </Text>
                      <Text className="font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $30,000
                      </Text>
                      <Text className="font-normal ml-[1px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $20,000
                      </Text>
                      <Text className="font-normal ml-[3px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $10,000
                      </Text>
                      <Text className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                        $0
                      </Text>
                    </Column>
                    <Column className="items-center mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[86%]">
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[100%]"></div>
                      <Stack className="2xl:h-[112px] 3xl:h-[134px] lg:h-[87px] xl:h-[99px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                        <Column className="absolute items-center top-[20%] w-[100%]">
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[100%]"></div>
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]"></div>
                        </Column>
                        <Img
                          src="images/img_vector6.svg"
                          className="absolute 2xl:h-[112px] 3xl:h-[134px] lg:h-[87px] xl:h-[99px] inset-x-[0] w-[99%]"
                          alt="VectorSix"
                        />
                      </Stack>
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"></div>
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]"></div>
                      <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[97%]">
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2016
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2017
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2018
                        </Text>
                        <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2019
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2020
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_400 w-[auto]">
                          2021
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </List>
              <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
                <Column className="mt-[1px] w-[60%]">
                  <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                    My Investment
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[95%]"
                    orientation="vertical"
                  >
                    <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray103"
                      >
                        <Img
                          src="images/img_eye.svg"
                          className="flex items-center justify-center"
                          alt="eye"
                        />
                      </Button>
                      <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[37%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          Apple Store
                        </Text>
                        <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          E-commerce, Marketplace
                        </Text>
                      </Column>
                      <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[25%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          $54,000
                        </Text>
                        <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          Envestment Value
                        </Text>
                      </Column>
                      <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[15%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                          +16%
                        </Text>
                        <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          Return Value
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                      <Button
                        className="common-pointer flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                        onClick={handleNavigate2}
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray103"
                      >
                        <Img
                          src="images/img_google.svg"
                          className="flex items-center justify-center"
                          alt="google"
                        />
                      </Button>
                      <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[37%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          Samsung Mobile
                        </Text>
                        <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          E-commerce, Marketplace
                        </Text>
                      </Column>
                      <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[25%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          $25,300
                        </Text>
                        <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          Envestment Value
                        </Text>
                      </Column>
                      <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[15%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                          -4%
                        </Text>
                        <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          Return Value
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray103"
                      >
                        <Img
                          src="images/img_signal.svg"
                          className="flex items-center justify-center lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                          alt="signal"
                        />
                      </Button>
                      <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[37%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          Tesla Motors
                        </Text>
                        <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          Electric Vehicles
                        </Text>
                      </Column>
                      <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[25%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          $8,200
                        </Text>
                        <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          Envestment Value
                        </Text>
                      </Column>
                      <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[15%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                          +25%
                        </Text>
                        <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                          Return Value
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
                <Column className="w-[40%]">
                  <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                    Trending Stock
                  </Text>
                  <Column className="bg-white_A700 justify-end lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]">
                    <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] w-[93%]">
                      <Text className="font-medium my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        SL No
                      </Text>
                      <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        Name
                      </Text>
                      <Text className="font-medium mb-[1px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        Price
                      </Text>
                      <Text className="font-medium lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        Return
                      </Text>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[91%]"
                      orientation="vertical"
                    >
                      <Row className="items-center justify-between lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] w-[98%]">
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          01.
                        </Text>
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          Trivago
                        </Text>
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          $520
                        </Text>
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                          +5%
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                      <Row className="items-center lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] w-[100%]">
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          02.
                        </Text>
                        <Text className="font-normal lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          Canon
                        </Text>
                        <Text className="font-normal lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          $480
                        </Text>
                        <Text className="font-medium lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                          +10%
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                      <Row className="items-center justify-between 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] w-[97%]">
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          03.
                        </Text>
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          Uber Food
                        </Text>
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          $350
                        </Text>
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                          -3%
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                      <Row className="lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] w-[98%]">
                        <Text className="font-normal mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          04.
                        </Text>
                        <Text className="font-normal lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          Nokia
                        </Text>
                        <Text className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                          $940
                        </Text>
                        <Text className="font-medium lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_600 w-[auto]">
                          +2%
                        </Text>
                      </Row>
                    </List>
                    <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[90%]">
                      <Text className="font-normal mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        05.
                      </Text>
                      <Text className="font-normal lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Tiktok
                      </Text>
                      <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        $670
                      </Text>
                      <Text className="font-medium lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                        -12%
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default InvestmentsPage;
