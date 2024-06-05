import MegaMenu1 from "../MegaMenu1";
import { Button, Text, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  return (
    <header
      {...props}
      className={`${props.className} flex self-stretch items-center p-6 sm:p-5 border-gray-300 border border-solid bg-white-A700 relative`}
    >
      <div className="mx-auto flex w-full max-w-[1392px] justify-between gap-5 md:flex-col">
        <div className="flex w-[47%] items-center justify-center gap-12 md:w-full md:flex-col">
          <Img src="images/img_header_logo.png" alt="header logo" className="h-[38px] w-[72px] object-contain" />
          <ul className="flex items-center gap-[42px] sm:flex-col">
            <li
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-2 p-2">
                <Text as="p" className="mt-[5px] !font-medium tracking-[0.50px] !text-gray-900">
                  Products
                </Text>
                <Img src="images/img_arrow_down.svg" alt="dropdown icon" className="h-[24px] w-[24px]" />
              </div>
              {menuOpen ? <MegaMenu1 /> : null}
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen1(false);
              }}
              onMouseEnter={() => {
                setMenuOpen1(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-2 p-2">
                <Text as="p" className="mt-[5px] !font-medium tracking-[0.50px] !text-gray-900">
                  Business Solutions
                </Text>
                <Img src="images/img_arrow_down.svg" alt="dropdown icon" className="h-[24px] w-[24px]" />
              </div>
              {menuOpen1 ? <MegaMenu1 /> : null}
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen2(false);
              }}
              onMouseEnter={() => {
                setMenuOpen2(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-2 p-2">
                <Text as="p" className="!font-medium tracking-[0.50px] !text-gray-900">
                  Help Center
                </Text>
                <Img src="images/img_arrow_down.svg" alt="dropdown icon" className="h-[24px] w-[24px]" />
              </div>
              {menuOpen2 ? <MegaMenu1 /> : null}
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!font-medium tracking-[0.50px] !text-gray-900">
                  Pricing
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-[18%] items-center justify-between gap-5 pl-6 md:w-full sm:pl-5">
          <Text as="p" className="!font-medium tracking-[0.50px] !text-blue-A700">
            Log In
          </Text>
          <Button size="xs" shape="round" className="min-w-[143px] font-medium sm:px-5">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
