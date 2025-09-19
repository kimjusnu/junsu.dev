// components/sections/CertificationSection.tsx
"use client";

import React from "react";
import { Car, Languages, Medal, BarChart3 } from "lucide-react"; // 아이콘

const certifications = [
  {
    name: "Google Analytics 4 (GA4) Certified",
    date: "2025.09.19",
    icon: <BarChart3 className="w-4 h-4 text-orange-500" />,
  },
  {
    name: "오픽 IM1급 (OPIc IM1)",
    date: "2025.02.19",
    icon: <Languages className="w-4 h-4 text-blue-600" />,
  },
  {
    name: "운전면허 1종 보통",
    date: "2020.01.29",
    icon: <Car className="w-4 h-4 text-gray-600" />,
  },
  {
    name: "태권도 4단",
    date: "2016.12",
    icon: <Medal className="w-4 h-4 text-red-500" />,
  },
];

const CertificationSection = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Certifications
      </h2>
      <ul className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-700">
                {cert.icon}
              </span>
              <span>{cert.name}</span>
            </div>
            <span className="text-xs text-white bg-blue-500 px-2 py-0.5 rounded-full shrink-0">
              {cert.date}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationSection;
