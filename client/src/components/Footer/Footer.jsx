import React from "react";
import FooterContent from "./FooterContent";

import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-16 absolute bottom-0 w-full">
      <div className="grid grid-cols-5">
        <div>
          <FooterContent
            heading="FRUIT & VEGETABLES"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
        </div>
        <div>
          <FooterContent
            heading="BREAKFAST & DAIRY"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
        </div>
        <div>
          <FooterContent
            heading="MEAT & SEAFOOD"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
        </div>
        <div>
          <FooterContent
            heading="BEVERAGES"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
        </div>
        <div>
          <FooterContent
            heading="BREADS & BAKERY"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
        </div>
      </div>
      <div>
        <div className="py-8 px-4 text-gray-900 flex justify-between">
          <span>Copyright 2025. All rights reserved</span>
          <div className="flex">
            <div className="rounded-3xl w-9 h-9 border-2 border-gray-200 flex items-center justify-center mr-1">
              <IoLogoInstagram className="text-lg text-custom" />
            </div>
            <div className="rounded-3xl w-9 h-9 border-2 border-gray-200 flex items-center justify-center mr-1">
              <FaFacebookF className="text-lg text-custom" />
            </div>
            <div className="rounded-3xl w-9 h-9 border-2 border-gray-200 flex items-center justify-center mr-1">
              <FaTwitter className="text-lg text-custom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
