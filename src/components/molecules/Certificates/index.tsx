import Image from 'next/image';
import React from 'react'
import { listCertificates } from '@/utils/data';

export default function Certificates() {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">My Certificates</h1>
      <div className="space-y-10">
        {listCertificates.map((communityData, communityIndex) => (
          <div key={communityIndex} className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-5">
              {communityData.community}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {communityData.certificates.map((certificate, certIndex) => (
                <div
                  key={certIndex}
                  className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md"
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-48 object-contain mb-3"
                  />
                  <h3 className="text-lg font-medium text-gray-600 text-center">
                    {certificate.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
