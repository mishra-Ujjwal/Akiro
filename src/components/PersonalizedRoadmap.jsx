import React, { useState } from "react";

export default function PersonalizedRoadmap() {
  const [view, setView] = useState("weekly");

  return (
    <div className=" bg-gray-50 flex items-center justify-center px-2">
      <div className="bg-white max-w-6xl w-full rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3 mb-4 md:mb-0">

            Personalized Roadmap
          </h2>
          <div className="flex gap-3">
            <button
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                view === "weekly"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-50"
              }`}
              onClick={() => setView("weekly")}
            >
              Weekly View
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                view === "daily"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-50"
              }`}
              onClick={() => setView("daily")}
            >
              Daily View
            </button>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-blue-50 rounded-xl px-6 py-5 mb-8">
          <div className="font-semibold text-blue-700 flex items-center gap-2 mb-1">
            <span role="img" aria-label="ai">🤖</span>
            AI Recommendations
          </div>
          <p className="text-blue-700 text-base">
            Based on your learning pace and weak areas, I suggest focusing more time on Algebra and Physics this week. You're doing great with English!
          </p>
        </div>

        {/* Roadmap Weeks */}
        <div className="space-y-8">
          {/* Week 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Week 1 <span className="font-normal text-gray-700">(Dec 18-24)</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="font-bold text-blue-700 mb-2">Mon</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>📐 Algebra - Notes</span>
                  <span>🎯 Quiz</span>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-bold text-green-700 mb-2">Tue</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>🔬 Physics - Motion</span>
                  <span>📖 Revision</span>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="font-bold text-purple-700 mb-2">Wed</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>📚 English Grammar</span>
                  <span>✍️ Practice</span>
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="font-bold text-orange-700 mb-2">Thu</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>🌍 History</span>
                  <span>📖 Reading</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="font-bold text-blue-700 mb-2">Fri</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>📐 Geometry</span>
                  <span>🎯 Quiz</span>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="font-bold text-blue-700 mb-2">Sat</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>🛠️ Revision Day</span>
                  <span>📊 Weak Topics</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-700 mb-2">Sun</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>🎮 Rest Day</span>
                  <span>📺 Light Review</span>
                </div>
              </div>
            </div>
          </div>
          {/* Week 2 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Week 2 <span className="font-normal text-gray-700">(Dec 25-31)</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-bold text-green-700 mb-2">Mon</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>⚗️ Chemistry</span>
                  <span>🧬 Atoms</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="font-bold text-blue-700 mb-2">Tue</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>📐 Trigonometry</span>
                  <span>🌅 Introduction</span>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="font-bold text-purple-700 mb-2">Wed</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>📝 Writing Skills</span>
                  <span>✍️ Essays</span>
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="font-bold text-orange-700 mb-2">Thu</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>🌍 Geography</span>
                  <span>🗺️ Maps</span>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-bold text-green-700 mb-2">Fri</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>🧬 Biology</span>
                  <span>🔬 Cells</span>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="font-bold text-blue-700 mb-2">Sat</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>📊 Mock Test</span>
                  <span>🎯 All Subjects</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-700 mb-2">Sun</div>
                <div className="flex flex-col space-y-1 text-gray-700 text-sm">
                  <span>🎉 New Year</span>
                  <span>🎊 Celebrate!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
