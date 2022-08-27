import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Row,
  Column,
  Img,
  Text,
  Line,
  Input,
  Button,
  List,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CreditCardsPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

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
              </Column>
              <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[91%]">
                <Line className="bg-indigo_600 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <Img
                  src="images/img_file_17X25.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[13%]"
                  alt="file"
                />
                <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_600 w-[auto]">
                  Credit Cards
                </Text>
              </Row>
              <Column className="lg:mb-[474px] xl:mb-[542px] 2xl:mb-[610px] 3xl:mb-[732px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[75%]">
                <Row className="items-center ml-[1px] w-[60%]">
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
        <Line className="bg-indigo_50 lg:h-[1026px] xl:h-[1174px] 2xl:h-[1320px] 3xl:h-[1584px] w-[1px]" />
        <Column className="items-center w-[83%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 w-[auto]">
              Credit Cards
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:ml-[429px] 3xl:ml-[515px] flex lg:ml-[333px] w-[22%] xl:ml-[381px]"
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
          <Column className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[93%]">
            <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
              My Cards
            </Text>
            <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
              <Column className="bg-indigo_600 items-center lg:pt-[18px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[32%]">
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
              <Column className="bg-indigo_500 items-center lg:pt-[18px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[32%]">
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
              <Column className="bg-indigo_300 border border-gray_101 border-solid items-center lg:pt-[18px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[32%]">
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
                      alt="ChipCard Two"
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
                  name="Group319 Two"
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
            <Row className="items-center justify-evenly lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pt-[2px] w-[100%]">
              <Column className="w-[34%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Card Expense Statistics
                </Text>
                <Column className="bg-white_A700 items-center justify-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius25 w-[92%]">
                  <Img
                    src="images/img_group346.svg"
                    className="lg:h-[145px] xl:h-[166px] 2xl:h-[187px] 3xl:h-[224px] mt-[2px] w-[64%]"
                    alt="Group346"
                  />
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[85%]"
                    orientation="vertical"
                  >
                    <Row className="mr-[3px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] pb-[1px] w-[99%]">
                      <div className="bg-indigo_100 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] my-[1px] rounded-radius50 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                      <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        DBL Bank
                      </Text>
                      <div className="bg-indigo_500 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] my-[1px] rounded-radius50 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                      <Text className="font-medium mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        BRC Bank
                      </Text>
                    </Row>
                    <Row className="lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] pb-[1px] w-[100%]">
                      <div className="bg-indigo_600 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] my-[1px] rounded-radius50 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                      <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        ABM Bank
                      </Text>
                      <div className="bg-indigo_200 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] my-[1px] rounded-radius50 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                      <Text className="font-medium mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        MCP Bank
                      </Text>
                    </Row>
                  </List>
                </Column>
              </Column>
              <Column className="w-[66%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Card List
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="bg-white_A700 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_file_17X25.svg"
                        className="flex items-center justify-center"
                        alt="file One"
                      />
                    </Button>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[15%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Card Type
                      </Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Secondary
                      </Text>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[14%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Bank
                      </Text>
                      <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        DBL Bank
                      </Text>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[20%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Card Number
                      </Text>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        **** **** 5600
                      </Text>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[17%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Namain Card
                      </Text>
                      <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        William{" "}
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-indigo_500 w-[auto]">
                      View Details
                    </Text>
                  </Row>
                  <Row className="bg-white_A700 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_file_17X25.svg"
                        className="flex items-center justify-center"
                        alt="file Two"
                      />
                    </Button>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[15%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Card Type
                      </Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Secondary
                      </Text>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[14%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Bank
                      </Text>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        BRC Bank
                      </Text>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[20%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Card Number
                      </Text>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        **** **** 4300
                      </Text>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[17%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_600 w-[auto]">
                        Namain Card
                      </Text>
                      <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Michel
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-indigo_500 w-[auto]">
                      View Details
                    </Text>
                  </Row>
                  <Row className="bg-white_A700 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_file_17X25.svg"
                        className="flex items-center justify-center"
                        alt="file Three"
                      />
                    </Button>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[15%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Card Type
                      </Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Secondary
                      </Text>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[14%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Bank
                      </Text>
                      <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        ABM Bank
                      </Text>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[20%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Card Number
                      </Text>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        **** **** 7560
                      </Text>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[17%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Namain Card
                      </Text>
                      <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Edward
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-indigo_500 w-[auto]">
                      View Details
                    </Text>
                  </Row>
                </List>
              </Column>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[3px] w-[100%]">
              <Column className="w-[68%]">
                <Text className="font-normal ml-[1px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Add New Card
                </Text>
                <Column className="bg-white_A700 lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius25 w-[96%]">
                  <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[93%]">
                    Credit Card generally means a plastic card issued by
                    Scheduled Commercial Banks assigned to a Cardholder, with a
                    credit limit, that can be used to purchase goods and
                    services on credit or obtain cash advances.
                  </Text>
                  <Row className="items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[1px] w-[100%]">
                    <Column className="w-[52%]">
                      <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        Card Type
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                        wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[91%] xl:mt-[8px]"
                        name="Group195"
                        placeholder="Classic"
                        size="sm"
                      ></Input>
                    </Column>
                    <Column className="w-[48%]">
                      <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        Name On Card
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%] xl:mt-[10px]"
                        name="Group195 One"
                        placeholder="My Cards"
                        size="md"
                      ></Input>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                    <Column className="w-[52%]">
                      <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        Card Number
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[91%] xl:mt-[10px]"
                        type="password"
                        name="Group195 Two"
                        placeholder="**** **** **** ****"
                        size="sm"
                      ></Input>
                    </Column>
                    <Column className="w-[48%]">
                      <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        Expiration Date
                      </Text>
                      <SelectBox
                        className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[100%]"
                        placeholderClassName="text-bluegray_900"
                        name="date"
                        placeholder="25 January 2025"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_indigo_301.svg"
                            className="lg:w-[9px] lg:h-[5px] lg:mr-[19px] xl:w-[10px] xl:h-[6px] xl:mr-[22px] 2xl:w-[12px] 2xl:h-[7px] 2xl:mr-[25px] 3xl:w-[14px] 3xl:h-[8px] 3xl:mr-[30px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </Column>
                  </Row>
                  <Button
                    className="font-medium lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[24%]"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillIndigo600"
                  >
                    Add Card
                  </Button>
                </Column>
              </Column>
              <Column className="w-[32%]">
                <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 w-[auto]">
                  Card Setting
                </Text>
                <List
                  className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius25 w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center lg:mr-[27px] xl:mr-[31px] 2xl:mr-[35px] 3xl:mr-[42px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[88%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="flex items-center justify-center"
                        alt="videocamera"
                      />
                    </Button>
                    <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[69%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Block Card
                      </Text>
                      <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Instantly block your card
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mr-[24px] xl:mr-[27px] 2xl:mr-[31px] 3xl:mr-[37px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[89%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_lock.svg"
                        className="flex items-center justify-center"
                        alt="lock"
                      />
                    </Button>
                    <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[69%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Change Pin Code
                      </Text>
                      <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Choose another pin code
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mr-[14px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[93%]">
                    <Button
                      className="common-pointer flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      onClick={handleNavigate1}
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_google_60X60.svg"
                        className="flex items-center justify-center"
                        alt="google"
                      />
                    </Button>
                    <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[70%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Add to Google Pay
                      </Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Withdraw without any card
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mr-[14px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[93%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_reply_60X60.svg"
                        className="flex items-center justify-center"
                        alt="reply"
                      />
                    </Button>
                    <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[70%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Add to Apple Pay
                      </Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Withdraw without any card
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mr-[14px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[93%]">
                    <Button
                      className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_reply_60X60.svg"
                        className="flex items-center justify-center"
                        alt="reply One"
                      />
                    </Button>
                    <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[70%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Add to Apple Store
                      </Text>
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                        Withdraw without any card
                      </Text>
                    </Column>
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

export default CreditCardsPage;
