import React from "react";

export default function StudyNotesDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Main Section */}
        <div className="md:col-span-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
            <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-900 mb-4 md:mb-0">
              <span>📚</span> Study Notes
            </h1>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Add Note
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">
                Import PDF
              </button>
            </div>
          </div>
          {/* Notes Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mathematics */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-orange-600 text-lg flex items-center gap-2">
                  <span>📐</span> Mathematics
                </span>
                <span className="text-gray-500 text-sm">5 notes</span>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Algebra Formulas</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Geometry Theorems</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Trigonometry Basics</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Science */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-green-600 text-lg flex items-center gap-2">
                  <span>🧪</span> Science
                </span>
                <span className="text-gray-500 text-sm">7 notes</span>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Physics Laws</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Chemistry Reactions</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Biology Diagrams</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
              </div>
            </div>
            {/* English */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-blue-600 text-lg flex items-center gap-2">
                  <span>📘</span> English
                </span>
                <span className="text-gray-500 text-sm">4 notes</span>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Grammar Rules</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Literature Summary</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Essay Writing Tips</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Social Science */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-purple-600 text-lg flex items-center gap-2">
                  <span>🌍</span> Social Science
                </span>
                <span className="text-gray-500 text-sm">6 notes</span>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">History Timeline</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Geography Maps</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900">Civics Concepts</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span>📖</span>
                    <span>⭐</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Side Cards */}
        <div className="flex flex-col gap-6">
          {/* Recommended Videos */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-5 mb-6">
            <div className="font-bold text-xl flex items-center gap-2 mb-4 text-gray-900">
              <span>🎥</span> Recommended Videos
            </div>
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-bold text-red-600">Algebra Explained</div>
                <div className="text-gray-500 text-sm mb-2">Khan Academy • 12 min</div>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold">
                  Watch
                </button>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-bold text-blue-700">Physics Motion</div>
                <div className="text-gray-500 text-sm mb-2">Crash Course • 8 min</div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold">
                  Watch
                </button>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-bold text-green-700">Cell Structure</div>
                <div className="text-gray-500 text-sm mb-2">Bozeman Science • 15 min</div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold">
                  Watch
                </button>
              </div>
            </div>
          </div>
          {/* Important Topics */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-5">
            <div className="font-bold text-xl flex items-center gap-2 mb-4 text-gray-900">
              <span>⭐</span> Important Topics
            </div>
            <div className="space-y-3">
              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="font-semibold text-yellow-800">Quadratic Equations</div>
                <div className="text-sm text-yellow-800">High exam weightage</div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="font-semibold text-yellow-800">Newton's Laws</div>
                <div className="text-sm text-yellow-800">Frequently asked</div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="font-semibold text-yellow-800">French Revolution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
