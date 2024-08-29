import React from "react";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const CollectionsCard = ({ title, description }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 shadow rounded-lg overflow-hidden z-0 px-5 pt-5 grid justify-between">
      <div className="grid gap-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center gap-1 opacity-80 py-3">
          <FaWhatsappSquare className="h-9 w-9 fill-green-500" />
          <FaInstagramSquare className="h-9 w-9 fill-orange-500" />
          <FaTwitterSquare className="h-9 w-9 fill-blue-500" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t font-medium py-3">
        <span className="text-green-400">104 Apps</span>
        <button className="text-sm bg-black text-white px-3 py-1 rounded-full flex items-center gap-3">
          Explore more
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CollectionsCard;
