import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageColumnmainheadl from "../../components/LandingPageColumnmainheadl";
import React from "react";
import logo from "./er.jpg"
import log from "./qw.jpg"
import kl from "./bn.jpg"
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function LandingPagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Landing Apps - Streamline Your Business Solutions</title>
        <meta
          name="description"
          content="Discover our products and business solutions on our landing page. Get started with building apps easily and access all the essential tools you need to focus on what matters. Join our community today!"
        />
      </Helmet>

      {/* main layout section */}
      <div className="w-full bg-white-A700">
        <div>
          {/* header section */}
          <div className="flex flex-col items-center">
            <Header />

            {/* hero section */}
            <div className="flex justify-center self-stretch border-b border-solid border-gray-300 py-20 md:py-5">
              <div className="container-xs flex justify-between gap-5 md:flex-col md:p-6">
                <div className="w-[47%] py-[120px] md:w-full md:py-5">
                  <LandingPageColumnmainheadl />
                </div>
                <Img src="images/img_col.svg" alt="column image" className="h-[627px] w-[47%] md:w-full" />
              </div>
            </div>

            {/* features section */}
            <div className="flex justify-center self-stretch bg-gradient py-[71px] md:py-5">
              <div className="container-xs mb-[9px] flex justify-center md:p-5">
                <div className="flex w-full gap-12 md:flex-col">
                  <div className="flex w-full flex-col items-center">
                    <div className="relative h-[105px] w-[27%]">
                      <div className="absolute left-[0.00px] top-[0.00px] m-auto w-[91%] rounded-[48px] border border-solid border-red-500 bg-red-500 p-4">
                        <Img
                          src="images/img_icon_ionicons_white_a700.svg"
                          alt="iconionicons"
                          className="h-[64px] w-[64px]"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[104px] w-full rounded-[52px] border-2 border-dashed border-red-500" />
                    </div>
                    <Heading as="h3" className="mt-1">
                      Risus morbi
                    </Heading>
                    <Text size="s" as="p" className="mt-[15px] w-full text-center leading-[160%] !text-gray-900">
                      Euismod sed pellentesque ut elementum. Accumsan gravida turpis ac at. Ullamcorper vitae non est
                      elit odio at augue consequat.
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <div className="relative h-[105px] w-[27%]">
                      <div className="absolute left-[0.00px] top-[0.00px] m-auto w-[91%] rounded-[48px] border border-solid border-amber-600 bg-amber-600 p-4">
                        <Img
                          src="images/img_icon_ionicons_white_a700.svg"
                          alt="iconionicons"
                          className="h-[64px] w-[64px]"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[104px] w-full rounded-[52px] border-2 border-dashed border-amber-600" />
                    </div>
                    <Heading as="h3" className="mt-1">
                      Risus morbi
                    </Heading>
                    <Text size="s" as="p" className="mt-[15px] w-full text-center leading-[160%] !text-gray-900">
                      Euismod sed pellentesque ut elementum. Accumsan gravida turpis ac at. Ullamcorper vitae non est
                      elit odio at augue consequat.
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <div className="relative h-[105px] w-[27%]">
                      <div className="absolute left-[0.00px] top-[0.00px] m-auto w-[91%] rounded-[48px] border border-solid border-blue-A700 bg-blue-A700 p-4">
                        <Img
                          src="images/img_icon_ionicons_white_a700.svg"
                          alt="iconionicons"
                          className="h-[64px] w-[64px]"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[104px] w-full rounded-[52px] border-2 border-dashed border-blue-A700" />
                    </div>
                    <Heading as="h3" className="mt-1">
                      Risus morbi
                    </Heading>
                    <Text size="s" as="p" className="mt-[15px] w-full text-center leading-[160%] !text-gray-900">
                      Euismod sed pellentesque ut elementum. Accumsan gravida turpis ac at. Ullamcorper vitae non est
                      elit odio at augue consequat.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* tools section */}
            <div className="flex flex-col items-center justify-center self-stretch py-[76px] md:py-5">
              <div className="container-xs flex flex-col gap-[81px] md:gap-[60px] md:p-5 sm:gap-10">
                <div className="flex flex-col items-center gap-7">
                  <div className="flex  justify-center self-stretch px-[363px] md:px-5">
                    <Heading size="md" as="h4">
                      All the essential tools
                    </Heading>
                  </div>
                  <Text size="s" as="p" className="!text-gray-900">
                    Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus
                    nunc in.
                  </Text>
                </div>
                <div className="flex items-center gap-[45px] pl-[45px] md:flex-col md:pl-5">
                  <div className="relative h-[700px] w-[46%] md:w-full md:h-[450px]">
                    <Img src={logo}/>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 md:self-stretch">
                    <div className="flex flex-col items-start gap-[22px] border-l-[3px] border-solid border-blue-A700 py-2 pl-2">
                      <Text size="md" as="p" className="ml-10 !text-gray-900 md:ml-0">
                        Sem augue tempus
                      </Text>
                      <Text size="s" as="p" className="w-[94%] self-end leading-[160%] !text-gray-900 md:w-full">
                        Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in
                        blandit. Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu
                        bibendum malesuada lorem sapien volutpat.
                      </Text>
                    </div>
                    <Text
                      size="md"
                      as="p"
                      className="border-l-[3px] border-solid border-blue_gray-100 px-[35px] py-[7px] !text-gray-900 sm:px-5"
                    >
                      Habitant integer interdum a
                    </Text>
                    <Text
                      size="md"
                      as="p"
                      className="border-l-[3px] border-solid border-blue_gray-100 px-[35px] py-[7px] !text-gray-900 sm:px-5"
                    >
                      Tempus natoque id
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* focus section */}
            <div className="container-xs mt-[76px] md:p-5">
              <div className="flex flex-col items-center gap-20 md:gap-[60px] sm:gap-10">
                <div className="flex flex-col items-center gap-7 self-stretch">
                  <div className="flex justify-center self-stretch px-[351px] md:px-5">
                    <Heading size="md" as="h5">
                      Focus on what matters
                    </Heading>
                  </div>
                  <Text size="s" as="p" className="!text-gray-900">
                    Eget at purus mauris euismod metus vitae eget. Diam massa venenatis pellentesque facilisis nunc,
                    varius.
                  </Text>
                </div>
                <div className="flex items-center gap-[45px] self-stretch pl-[45px] md:flex-col md:pl-5">
                  <div className="relative h-[663px] w-[46%] md:w-full md:h-[400px]">
                    <Img src={log} />
                  </div>
                  <div className="flex flex-1 flex-col gap-6 md:self-stretch">
                    <div className="flex flex-col items-start gap-[22px] border-l-[3px] border-solid border-blue-A700 py-2 pl-2">
                      <Text size="md" as="p" className="ml-10 !text-gray-900 md:ml-0">
                        Bibendum gravida dolor egestas aliquam
                      </Text>
                      <Text size="s" as="p" className="w-[94%] self-end leading-[160%] !text-gray-900 md:w-full">
                        Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus etiam. Tristique amet, sed ac
                        ac dolor habitant. Mauris duis neque molestie venenatis nibh hendrerit pharetra. Tortor suscipit
                        leo sit tellus ac scelerisque gravida sem.
                      </Text>
                    </div>
                    <Text
                      size="md"
                      as="p"
                      className="border-l-[3px] border-solid border-blue_gray-100 px-[35px] py-[7px] !text-gray-900 sm:px-5"
                    >
                      Egestas lorem eget
                    </Text>
                    <Text
                      size="md"
                      as="p"
                      className="border-l-[3px] border-solid border-blue_gray-100 px-[35px] py-[7px] !text-gray-900 sm:px-5"
                    >
                      Tellus eget feugiat sit
                    </Text>
                  </div>
                </div>
                <Button shape="round" className="min-w-[225px] font-bold sm:px-5">
                  Get Started
                </Button>
              </div>
            </div>

            {/* testimonials section */}
            <div className="relative mt-20 h-[640px] self-stretch md:h-auto">
              <div className="section flex w-full bg-gray-100 py-20  md:py-5">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                  renderDotsItem={(props) => {
                    return props?.isActive ? (
                      <div className="mr-2  inline-block h-[8px] w-[32px] cursor-pointer rounded bg-blue-A700" />
                    ) : (
                      <div className="mr-2 inline-block h-[8px] w-[8px] cursor-pointer rounded bg-blue_gray-300" />
                    );
                  }}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="container-xs flex justify-center md:p-5">
                        <div className="flex w-full items-center justify-center gap-6 md:flex-col">
                          <Img
                            src="images/img_icon_ionicons_blue_gray_300.svg"
                            alt="icon image"
                            className="h-[48px] w-[48px] md:w-full"
                          />
                          <div className="flex flex-1 items-center justify-between gap-5 md:flex-col md:self-stretch">
                            <div className="relative h-[480px] w-[46%] md:w-full">
                              <Img
                                src="images/img_picture_480x480.png"
                                alt="main picture"
                                className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[480px] w-[480px] rounded-[20px] object-cover"
                              />
                              <div className="absolute right-[0.00px] top-[10%] m-auto flex w-[39%] justify-center rounded-[10px] border-2 border-dashed border-red-500 bg-white-A700 p-2 shadow-xs">
                                <Img
                                  src="images/img_picture_113x189.png"
                                  alt="secondary picture"
                                  className="h-[113px] w-full rounded-md object-cover md:h-auto"
                                />
                              </div>
                            </div>
                            <div className="flex w-[46%] justify-center pb-14 md:w-full md:pb-5">
                              <div className="flex w-full flex-col gap-3.5">
                                <div className="flex flex-col items-start gap-3.5">
                                  <Heading
                                    size="xs"
                                    as="h6"
                                    className="uppercase tracking-[3.00px] !text-blue_gray-700"
                                  >
                                    Success Stories
                                  </Heading>
                                  <Text size="lg" as="p" className="w-full leading-[160%] !text-gray-900">
                                    <span className="text-[32px] font-bold text-amber-600">“&nbsp;</span>
                                    <span className="text-gray-900">
                                      Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in.
                                      Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque
                                      suspendisse a habitasse commodo.&nbsp;
                                    </span>
                                    <span className="text-[32px] font-bold text-red-500">”</span>
                                  </Text>
                                </div>
                                <Text size="s" as="p" className="leading-[160%] !text-gray-900">
                                  <span className="text-gray-900">
                                    <>
                                      Marie Poirot,
                                      <br />
                                    </>
                                  </span>
                                  <span className="text-xl font-medium text-gray-900">Bigapp</span>
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_icon_ionicons_blue_gray_700.svg"
                            alt="footer icon"
                            className="h-[48px] w-[48px] md:w-full"
                          />
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>

            {/* faq section */}
            <div className="flex flex-col items-center justify-center self-stretch bg-white-A700 py-20 md:py-5">
              <div className="container-xs flex flex-col gap-[76px] md:gap-[57px] md:p-5 sm:gap-[38px]">
                <div>
                  <div className="flex justify-center">
                    <Heading size="md" as="h1">
                      Answers to your questions
                    </Heading>
                  </div>
                </div>
                <Accordion className="flex flex-col gap-px">
                  {[...Array(5)].map((_, i) => (
                    <AccordionItem uuid={i} key={`FAQ List${i}`}>
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex flex-1 items-center justify-between gap-5 border-t border-solid border-gray-300 py-[35px] md:flex-col sm:py-5">
                                  <Text size="lg" as="p" className="self-end !text-blue-A700">
                                    Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?
                                  </Text>
                                  <Img
                                    src="images/img_icon_ionicons_blue_a700.svg"
                                    alt="collapse icon"
                                    className="h-[24px] w-[24px] md:w-full"
                                  />
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div>Dummy Content</div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* call to action section */}
            <div className="flex justify-center self-stretch bg-gray-100 py-20 md:py-5">
              <div className="container-xs flex items-center justify-between gap-5 pr-5 md:flex-col md:p-5">
                <div className="flex w-[48%] flex-col items-start gap-6 md:w-full">
                  <Heading size="md" as="h1" className="w-full leading-[110%]">
                    Start now and get the best services
                  </Heading>
                  <Text size="s" as="p" className="w-full leading-[160%] !text-gray-900">
                    Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat congue orci, eget tellus
                    pellentesque aliquet. Felis fringilla morbi dui ac consequat risus pharetra odio pulvinar. Id
                    pellentesque in tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet sit risus
                    elementum scelerisque.
                  </Text>
                  <Button shape="round" className="min-w-[225px] font-bold sm:px-5">
                    Get Started
                  </Button>
                </div>
                <Img
                  src={kl}
                  alt="feature image"
                  className="h-[627px] w-[44%] object-cover md:w-[90%] md:h-[400px]"
                />
              </div>
            </div>
          </div>

          {/* footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
