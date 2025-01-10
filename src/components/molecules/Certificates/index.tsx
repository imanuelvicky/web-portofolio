import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { listCertificates } from '@/utils/data';

type Community = {
  community: string;
  certificates: {
    title: string;
    image: StaticImageData;
  }[];
};

export default function Certificates() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-5">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        My Certificates
      </h1>
      <div className="space-y-14">
        {listCertificates.map((communityData, communityIndex) => (
          <CertificateCarousel
            key={communityIndex}
            community={communityData.community}
            certificates={communityData.certificates}
          />
        ))}
      </div>
    </div>
  );
}

function CertificateCarousel({ community, certificates }: Community) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  const progressPercentage = ((currentIndex + 1) / certificates.length) * 100;

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
        {community}
      </h2>
      <div className="flex flex-col items-center">
        <div className="overflow-hidden relative w-6/12 rounded-lg shadow-md bg-gray-50">
          <div
            className="flex transition-transform duration-500 mt-2 mb-1"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificates.map((certData, certIndex) => (
              <div
                key={certIndex}
                className="w-full flex-shrink-0 px-2"
              >
                <Image
                  src={certData.image}
                  alt={certData.title}
                  className="w-auto h-auto object-cover rounded-lg border m-auto"
                />
                <h3 className="text-lg font-medium text-gray-600 text-center">
                  {certData.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-8/12 bg-gray-300 rounded-full mt-4">
          <div
            className="bg-gray-700 h-1 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <div className="flex justify-between mt-6 w-full max-w-sm">
          <button
            onClick={handlePrev}
            disabled={certificates.length === 1}
            className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-200 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={certificates.length === 1}
            className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-200 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
