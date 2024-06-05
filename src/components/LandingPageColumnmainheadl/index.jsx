import { Text, Img, Button, Heading } from "./..";
import React from "react";

export default function LandingPageColumnmainheadl({
  mainheadlinetext = "Building apps just got easier",
  descriptiontext = "Aliquam vel platea curabitur sit vestibulum egestas sit id lorem. Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.",
  getstartedbutton = "Get Started",
  watchvideotext = "Watch Video",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-[26px]`}>
      <Heading size="lg" as="h1" className="w-full leading-[110%]">
        {mainheadlinetext}
      </Heading>
      <Text size="s" as="p" className="w-full leading-[160%] !text-gray-900">
        {descriptiontext}
      </Text>
      <div className="flex w-[85%] items-center justify-between gap-5 ">
        <Button shape="round" className="font-bold">
          {getstartedbutton}
        </Button >
        <div className="flex w-[41%] items-center justify-center p-2 sm:w-full">
          <Img src="images/img_icon_ionicons.svg" alt="icon image" className="my-2 h-[24px] w-[24px]" />
          <div className="flex flex-1 justify-center px-4">
            <Text size="md" as="p" className="tracking-[0.50px] !text-blue-A700">
              {watchvideotext}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
