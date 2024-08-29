"use client";

import { useState } from "react";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import collections from "./data/collections";
import CollectionsCard from "./components/CollectionsCard";

const ITEMS_PER_PAGE = 5;
const TOTAL_ITEMS = collections.length;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(collections.length / ITEMS_PER_PAGE);

  const currentCollections = collections.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const currentPageLength = currentCollections.length;

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
          {currentCollections.map((collection, index) => (
            <CollectionsCard
              key={index}
              title={collection.title}
              description={collection.description}
            />
          ))}
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
