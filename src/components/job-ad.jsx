import * as React from 'react';

export default function JobAd() {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-500">
            <a href="#" className="hover:underline">
              Stuttgart, Germany
            </a>
          </p>
          <a href="#" className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">Data Analyst</p>
            <p className="mt-3 text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga culpa,
              similique sequi cum eos quis dolorum.
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div>
            <p className="text-sm font-medium text-gray-900">
              <a href="#" className="hover:underline">
                Addidas
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              Visa requirement
              <br />
              Salary
              <br />
              Contact detail
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
