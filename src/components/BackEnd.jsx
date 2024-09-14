"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const BackEnd = () => {
  const [influencerType, setInfluencerType] = useState("");
  const [followers, setFollowers] = useState(500000);
  const [products, setProducts] = useState(25);
  const [monthlyEarning, setMonthlyEarning] = useState(0);
  const [yearlyEarning, setYearlyEarning] = useState(0);

  const sliderRef = useRef(null);
  const productSliderRef = useRef(null);

  useEffect(() => {
    calculateEarnings();
  }, [followers, products]);

  const calculateEarnings = () => {
    let monthlyEarning = 0;
    const followersInTenThousands = followers / 10000;
    const productsPerMonth = products;

    if (followersInTenThousands <= 1) {
      monthlyEarning = 1000 * productsPerMonth;
    } else if (followersInTenThousands <= 2) {
      monthlyEarning = 2000 * productsPerMonth;
    } else {
      monthlyEarning = 3000 * productsPerMonth;
    }

    setMonthlyEarning(monthlyEarning);
    setYearlyEarning(monthlyEarning * 12);
  };

  const handleFollowersDrag = (event) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const newValue = Math.min(
      Math.max(
        1,
        Math.round(((event.clientX - rect.left) / rect.width) * 999999 + 1)
      ),
      1000000
    );
    setFollowers(newValue);
  };

  const handleProductsDrag = (event) => {
    const slider = productSliderRef.current;
    const rect = slider.getBoundingClientRect();
    const newValue = Math.min(
      Math.max(
        1,
        Math.round(((event.clientX - rect.left) / rect.width) * 99 + 1)
      ),
      100
    );
    setProducts(newValue);
  };

  const startDrag = (handler) => {
    document.addEventListener("mousemove", handler);
    document.addEventListener("mouseup", () => stopDrag(handler));
  };

  const stopDrag = (handler) => {
    document.removeEventListener("mousemove", handler);
    document.removeEventListener("mouseup", stopDrag);
  };

  const formatValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    } else {
      return value.toString();
    }
  };

  return (
    <div className="relative bg-[#E5F0F1] h-auto p-6 mt-16 md:mt-[60px] rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Scroll Feature on the Left */}
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
            ESTIMATE EARNING POTENTIAL
          </h1>
          <div className="mb-10">
            <label className="mb-2 block">
              What kind of influencer are you?
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={influencerType}
              onChange={(e) => setInfluencerType(e.target.value)}
            >
              <option value="" disabled>
                Select influencer type?
              </option>
              <option value="social-media">Social Media</option>
              <option value="marketing">Marketing</option>
              <option value="all-in-one">All In One</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              How many followers do you have?
            </label>
            <div
              ref={sliderRef}
              className="relative h-2 bg-gray-200 rounded cursor-pointer"
              onMouseDown={() => startDrag(handleFollowersDrag)}
            >
              <div
                className="absolute h-2 bg-dark rounded"
                style={{ width: `${((followers - 1) / 999999) * 100}%` }}
              />
              <div
                className="absolute top-0 -mt-2 w-4 h-6 bg-dark rounded cursor-pointer"
                style={{
                  left: `${((followers - 1) / 999999) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div className="mt-2 text-center bg-white inline-block px-4 py-2 rounded-full">
              {formatValue(followers)}
            </div>
          </div>

          <div>
            <label className="block mb-2">
              How many products do you list monthly?
            </label>
            <div
              ref={productSliderRef}
              className="relative h-2 bg-gray-200 rounded cursor-pointer"
              onMouseDown={() => startDrag(handleProductsDrag)}
            >
              <div
                className="absolute h-2 bg-dark rounded"
                style={{ width: `${((products - 1) / 99) * 100}%` }}
              />
              <div
                className="absolute top-0 -mt-2 w-4 h-6 bg-dark rounded cursor-pointer"
                style={{
                  left: `${((products - 1) / 99) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div className="mt-2 text-center bg-white inline-block px-4 py-2 rounded-full">
              {products}
            </div>
          </div>
        </div>

        {/* Earnings on the Right */}
        <div className="flex-1 md:ml-10 flex flex-col justify-center items-center md:items-end">
          <div className="text-center mb-6">
            <div className="text-lg font-semibold">Monthly Earning</div>
            <div className="text-2xl font-bold">
              ₹{monthlyEarning.toLocaleString()}
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Yearly Earning</div>
            <div className="text-2xl font-bold">
              ₹{yearlyEarning.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Calculate Button - Positioned Below */}
      <div className="flex justify-center mt-8">
        <button className="px-8 py-3 bg-dark text-white rounded-full text-lg font-semibold">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default BackEnd;
