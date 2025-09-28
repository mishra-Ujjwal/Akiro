import React from "react";

export default function Timetable() {
  return (
    <div className=" bg-gray-50 flex items-center justify-center px-2 ">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-7">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2 mb-3 md:mb-0">
            <span role="img" aria-label="clock">⏰</span>
            Study Timetable
          </h2>
          <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Edit Schedule
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-7">
          {/* Left Side - Today's Schedule */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-5">
              <span role="img" aria-label="calendar">📅</span>
              Today's Schedule
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl px-5 py-4 border-l-4 border-blue-400 flex justify-between items-center">
                <div>
                  <div className="font-semibold text-lg text-gray-800">Mathematics - Algebra</div>
                  <div className="text-gray-500 text-sm">Linear equations and graphs</div>
                </div>
                <div className="text-right">
                  <div className="text-blue-600 font-bold">9:00 - 10:30 AM</div>
                  <div className="text-gray-500 text-xs mt-1">1.5 hours</div>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl px-5 py-4 border-l-4 border-green-400 flex justify-between items-center">
                <div>
                  <div className="font-semibold text-lg text-gray-800">Science - Physics</div>
                  <div className="text-gray-500 text-sm">Force and motion revision</div>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-bold">11:00 - 12:00 PM</div>
                  <div className="text-gray-500 text-xs mt-1">1 hour</div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl px-5 py-4 border-l-4 border-purple-400 flex justify-between items-center">
                <div>
                  <div className="font-semibold text-lg text-gray-800">English - Grammar</div>
                  <div className="text-gray-500 text-sm">Tenses and voice</div>
                </div>
                <div className="text-right">
                  <div className="text-purple-600 font-bold">2:00 - 3:00 PM</div>
                  <div className="text-gray-500 text-xs mt-1">1 hour</div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl px-5 py-4 border-l-4 border-orange-400 flex justify-between items-center">
                <div>
                  <div className="font-semibold text-lg text-gray-800">Social Science - History</div>
                  <div className="text-gray-500 text-sm">French Revolution</div>
                </div>
                <div className="text-right">
                  <div className="text-orange-600 font-bold">4:00 - 5:00 PM</div>
                  <div className="text-gray-500 text-xs mt-1">1 hour</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Weekly Overview */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span role="img" aria-label="chart">📊</span>
              Weekly Overview
            </h3>
            {/* Weekly Progress */}
            <div className="bg-gray-100 rounded-xl px-5 py-4 mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-700">Total Study Time</span>
                <span className="font-bold text-blue-700 text-lg">28 hours</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded mt-2 mb-2">
                <div className="h-2 bg-blue-600 rounded" style={{ width: "70%" }}></div>
              </div>
              <div className="text-gray-500 text-sm">70% of weekly goal</div>
            </div>
            {/* Overview Boxes */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="bg-blue-50 rounded-lg text-center py-5 font-bold text-blue-700 text-2xl">8h
                <div className="text-sm text-gray-700 font-medium mt-2">Math</div>
              </div>
              <div className="bg-green-50 rounded-lg text-center py-5 font-bold text-green-700 text-2xl">7h
                <div className="text-sm text-gray-700 font-medium mt-2">Science</div>
              </div>
              <div className="bg-purple-50 rounded-lg text-center py-5 font-bold text-purple-700 text-2xl">6h
                <div className="text-sm text-gray-700 font-medium mt-2">English</div>
              </div>
              <div className="bg-orange-50 rounded-lg text-center py-5 font-bold text-orange-700 text-2xl">7h
                <div className="text-sm text-gray-700 font-medium mt-2">Social</div>
              </div>
            </div>
            {/* Reminders */}
            <div className="bg-yellow-50 rounded-xl px-5 py-4">
              <h4 className="font-semibold text-red-500 flex items-center gap-2 mb-2">
                <span role="img" aria-label="reminder">⏰</span>
                Reminders
              </h4>
              <ul className="ml-6 text-gray-700 text-sm list-disc space-y-1">
                <li>Chemistry quiz due tomorrow</li>
                <li>Algebra revision scheduled for evening</li>
                <li>Mock test on Saturday</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
