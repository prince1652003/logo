import { Img, Text, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex flex-col items-center bg-white-A700`}>
      <div className="  w-11/12 ">
        <div className="flex justify-center border-b border-solid border-gray-300 py-[58px] md:py-5 md:pl-[110px]">
          <div className="flex items-center md:flex-col">
            <div className="flex   items-center flex-col gap-[23px] pl-[150px] pr-[150px] md:pl-[0]">
              <Text as="p" className="!font-medium">
                Categories
              </Text>
              <ul className="flex items-center flex-col gap-[26px]">
                <li>
                  <a href="#">
                    <Text as="p">User Interface</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">User Experience</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Digital Media</Text>
                  </a>
                </li>
                <li>
                  <a href="Lifestyle" target="_blank" rel="noreferrer">
                    <Text as="p">Lifestyle</Text>
                  </a>
                </li>
                <li>
                  <a href="Programming" target="_blank" rel="noreferrer">
                    <Text as="p">Programming</Text>
                  </a>
                </li>
                <li>
                  <a href="Animation" target="_blank" rel="noreferrer">
                    <Text as="p">Animation</Text>
                  </a>
                </li>
              </ul>
            </div>
          
            <div className="flex items-center flex-col gap-[23px] pr-[150px] md:pt-[50px]">
              <Text as="p" className="!font-medium">
                Product
              </Text>
              <ul className="flex items-center flex-col gap-[26px]">
                <li>
                  <a href="Pricing" target="_blank" rel="noreferrer">
                    <Text as="p">Pricing</Text>
                  </a>
                </li>
                <li>
                  <a href="Overview" target="_blank" rel="noreferrer">
                    <Text as="p">Overview</Text>
                  </a>
                </li>
                <li>
                  <a href="Browse" target="_blank" rel="noreferrer">
                    <Text as="p">Browse</Text>
                  </a>
                </li>
                <li>
                  <a href="Accessibility" target="_blank" rel="noreferrer">
                    <Text as="p">Accessibility</Text>
                  </a>
                </li>
                <li>
                  <a href="Five" target="_blank" rel="noreferrer">
                    <Text as="p">Five</Text>
                  </a>
                </li>
                <li>
                  <a href="Changelog" target="_blank" rel="noreferrer">
                    <Text as="p">Changelog</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center flex-col gap-[23px]  pr-[150px] md:pt-[50px] ">
              <Text as="p" className="!font-medium">
                Solutions
              </Text>
              <ul className="flex items-center flex-col gap-[26px]">
                <li>
                  <a href="Brainstorming" target="_blank" rel="noreferrer">
                    <Text as="p">Brainstorming</Text>
                  </a>
                </li>
                <li>
                  <a href="Ideation" target="_blank" rel="noreferrer">
                    <Text as="p">Ideation</Text>
                  </a>
                </li>
                <li>
                  <a href="Wireframing" target="_blank" rel="noreferrer">
                    <Text as="p">Wireframing</Text>
                  </a>
                </li>
                <li>
                  <a href="Research" target="_blank" rel="noreferrer">
                    <Text as="p">Research</Text>
                  </a>
                </li>
                <li>
                  <a href="Design" target="_blank" rel="noreferrer">
                    <Text as="p">Design</Text>
                  </a>
                </li>
                <li>
                  <a href="Concept" target="_blank" rel="noreferrer">
                    <Text as="p">Concept</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center flex-col gap-[23px] pr-[150px] md:pt-[50px] ">
              <Text as="p" className="!font-medium">
                Resources
              </Text>
              <ul className="flex items-center flex-col gap-[26px]">
                <li>
                  <a href="#">
                    <Text as="p">Help Center</Text>
                  </a>
                </li>
                <li>
                  <a href="Blog" target="_blank" rel="noreferrer">
                    <Text as="p">Blog</Text>
                  </a>
                </li>
                <li>
                  <a href="Tutorials" target="_blank" rel="noreferrer">
                    <Text as="p">Tutorials</Text>
                  </a>
                </li>
                <li>
                  <a href="FAQs" target="_blank" rel="noreferrer">
                    <Text as="p">FAQs</Text>
                  </a>
                </li>
                <li>
                  <a href="Community" target="_blank" rel="noreferrer">
                    <Text as="p">Community</Text>
                  </a>
                </li>
                <li>
                  <a href="Events" target="_blank" rel="noreferrer">
                    <Text as="p">Events</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center flex-col gap-[23px] pr-[150px] md:pt-[50px] ">
              <Text as="p" className="!font-medium">
                Support
              </Text>
              <ul className="flex items-center flex-col gap-[26px]">
                <li>
                  <a href="#">
                    <Text as="p">Contact Us</Text>
                  </a>
                </li>
                <li>
                  <a href="Developers" target="_blank" rel="noreferrer">
                    <Text as="p">Developers</Text>
                  </a>
                </li>
                <li>
                  <a href="Documentation" target="_blank" rel="noreferrer">
                    <Text as="p">Documentation</Text>
                  </a>
                </li>
                <li>
                  <a href="Integrations" target="_blank" rel="noreferrer">
                    <Text as="p">Integrations</Text>
                  </a>
                </li>
                <li>
                  <a href="Reports" target="_blank" rel="noreferrer">
                    <Text as="p">Reports</Text>
                  </a>
                </li>
                <li>
                  <a href="Webinar" target="_blank" rel="noreferrer">
                    <Text as="p">Webinar</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center flex-col gap-[23px]  pr-[150px] md:pt-[50px] ">
              <Text as="p" className="!font-medium">
                Company
              </Text>
              <ul className="flex items-center flex-col  gap-[26px]">
                <li>
                  <a href="About" target="_blank" rel="noreferrer">
                    <Text as="p">About</Text>
                  </a>
                </li>
                <li>
                  <a href="Press" target="_blank" rel="noreferrer">
                    <Text as="p">Press</Text>
                  </a>
                </li>
                <li>
                  <a href="Events" target="_blank" rel="noreferrer">
                    <Text as="p">Events</Text>
                  </a>
                </li>
                <li>
                  <a href="Careers" target="_blank" rel="noreferrer">
                    <Text as="p">Careers</Text>
                  </a>
                </li>
                <li>
                  <a href="Customers" target="_blank" rel="noreferrer">
                    <Text as="p">Customers</Text>
                  </a>
                </li>
                <li>
                  <a href="Partners" target="_blank" rel="noreferrer">
                    <Text as="p">Partners</Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 py-[21px] sm:flex-col sm:py-5 md:items-center">
          <div className=" flex">
            <Heading as="h4" className="!text-blue-A700">
              Logo
            </Heading>
          </div>
          <Text as="p" className="mb-[5px]">
            @ 2024 All rights reserved.
          </Text>
          <div className="flex gap-4">
            <Img src="images/img_icon_jam_icons.svg" alt="social icon 1" className="h-[24px] w-[24px]" />
            <Img src="images/img_icon_jam_icons_blue_gray_700.svg" alt="social icon 2" className="h-[24px] w-[24px]" />
            <Img
              src="images/img_icon_jam_icons_blue_gray_700_24x24.svg"
              alt="social icon 3"
              className="h-[24px] w-[24px]"
            />
            <Img src="images/img_icon_jam_icons_24x24.svg" alt="social icon 4" className="h-[24px] w-[24px]" />
            <Img src="images/img_icon_jam_icons_1.svg" alt="social icon 5" className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
