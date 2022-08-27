import React from "react";

import {
  Column,
  Row,
  Stack,
  Line,
  Img,
  Text,
  Input,
  Button,
  Switch,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SettingPageThreePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center mx-[auto] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[17%]">
            <Line className="absolute bg-gray_101 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] right-[0] w-[1px]" />
            <aside className="absolute items-center w-[100%]">
              <Column className="">
                <Column className="bg-white_A700 border border-gray_300 border-solid lg:pr-[28px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] lg:py-[28px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] w-[100%]">
                  <Column className="lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] w-[78%]">
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
                    <Row className="items-center ml-[1px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[58%]">
                      <Img
                        src="images/img_question.svg"
                        className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[25%]"
                        alt="question"
                      />
                      <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                        Loans
                      </Text>
                    </Row>
                    <Row className="lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[72%]">
                      <Img
                        src="images/img_service1.svg"
                        className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                        alt="serviceOne"
                      />
                      <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                        Services
                      </Text>
                    </Row>
                    <Row className="items-end ml-[1px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[15%]"
                        alt="lightbulb"
                      />
                      <Text className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                        My Privileges
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-center lg:mb-[223px] xl:mb-[255px] 2xl:mb-[287px] 3xl:mb-[344px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[69%]">
                    <Line className="bg-indigo_600 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                    <Img
                      src="images/img_settings_25X25.svg"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                      alt="settings"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_600 w-[auto]">
                      Setting
                    </Text>
                  </Row>
                </Column>
              </Column>
            </aside>
          </Stack>
          <Column className="items-center w-[83%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
              <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 w-[auto]">
                Services
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="2xl:ml-[482px] 3xl:ml-[578px] flex lg:ml-[374px] w-[22%] xl:ml-[428px]"
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
            <Column className="bg-white_A700 justify-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius25 w-[93%]">
              <Row className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[39%]">
                <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Edit Profile
                </Text>
                <Text className="font-medium lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Preferences
                </Text>
                <Column className="items-center lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] mt-[1px] w-[28%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_600 w-[auto]">
                    Security
                  </Text>
                  <Line className="bg-indigo_600 h-[3px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]" />
                </Column>
              </Row>
              <Column className="w-[100%]">
                <Line className="bg-gray_300 h-[1px] w-[100%]" />
                <Text className="font-medium lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_900 w-[auto]">
                  Two-factor Authentication
                </Text>
                <Row className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[38%]">
                  <Switch value={true} className="w-[14%]" />
                  <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Enable or disable two factor authentication
                  </Text>
                </Row>
                <Text className="font-medium lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_900 w-[auto]">
                  Change Password
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Current Password
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[49%] xl:mt-[10px]"
                  name="Group195"
                  placeholder="Charlene@123"
                  size="md"
                ></Input>
                <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  New Password
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[49%] xl:mt-[10px]"
                  name="Group195 One"
                  placeholder="Charlene@123"
                  size="md"
                ></Input>
                <Button
                  className="font-medium 3xl:ml-[1032px] lg:ml-[668px] xl:ml-[765px] 2xl:ml-[860px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[18%]"
                  shape="RoundedBorder15"
                  size="md"
                  variant="FillIndigo600"
                >
                  Save
                </Button>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SettingPageThreePage;
