"use client";

import { useState } from "react";
import CategoryCard from "./components/CategoryCard";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import categories from "./data/categories";
import { FaArrowRight } from "react-icons/fa6";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import collections from "./data/collections";

const ITEMS_PER_PAGE = 5;
const TOTAL_ITEMS = collections.length;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(collections.length / ITEMS_PER_PAGE);

  const currentCategories = collections.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const currentPageLength = currentCategories.length;

  return (
    <div className="container mx-auto">
      <Header />
      <main className="pt-24 md:pt-28 px-8 md:px-16 lg:px-20">
        <h1 className="text-2xl font-semibold text-darkBlack pt-8 pb-2">
          Top shopify collections
        </h1>
        <div className="md:flex items-center justify-between text-gray-600 pb-14">
          <p className="py-5 md:py-0">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
          <button className="text-blue-500">See all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 lg:gap-8">
          {/* {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 shadow rounded-lg overflow-hidden z-0 p-5"
            >
              <h1 className="text-xl font-semibold pb-2">{collection.title}</h1>
              <p className="text-gray-600">{collection.description}</p>
              <div className="flex items-center gap-1 pt-12 pb-3 opacity-80">
                <FaWhatsappSquare className="h-9 w-9 fill-green-500" />
                <FaInstagramSquare className="h-9 w-9 fill-orange-500" />
                <FaTwitterSquare className="h-9 w-9 fill-blue-500" />
              </div>

              <div className="flex items-center justify-between border-t pt-4 font-medium">
                <span className="text-green-400">104 Apps</span>
                <button className="text-sm bg-black text-white px-3 py-1 rounded-full flex items-center gap-3">
                  Explore more
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          ))} */}
          {currentCategories.map((collection, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 shadow rounded-lg overflow-hidden z-0 px-5 pt-5 grid justify-between"
            >
              <div className="grid gap-3">
                <h1 className="text-xl font-semibold">{collection.title}</h1>
                <p className="text-gray-600">{collection.description}</p>
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
          ))}
          {/* {currentCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
            />
          ))} */}
        </div>
      </main>
      <Pagination
        currentPageLength={currentPageLength}
        totalItems={TOTAL_ITEMS}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
