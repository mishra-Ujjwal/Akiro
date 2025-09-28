import React from "react";

const syllabus = [
  {
    group: "Mathematics",
    color: "orange-600",
    emoji: "📐",
    items: [
      { name: "Algebra", weeks: 2, status: "In Progress" },
      { name: "Geometry", weeks: 3, status: "Not Started" },
      { name: "Trigonometry", weeks: 2, status: "Not Started" },
      { name: "Statistics", weeks: 1, status: "Not Started" },
    ],
  },
  {
    group: "Science",
    color: "green-600",
    emoji: "🧪",
    items: [
      { name: "Physics - Motion", weeks: 2, status: "Completed" },
      { name: "Physics - Force", weeks: 2, status: "In Progress" },
      { name: "Chemistry - Atoms", weeks: 2, status: "Not Started" },
      { name: "Biology - Cells", weeks: 2, status: "Not Started" },
    ],
  },
  {
    group: "English",
    color: "blue-600",
    emoji: "📘",
    items: [
      { name: "Literature", weeks: 4, status: "Completed" },
      { name: "Grammar", weeks: 3, status: "In Progress" },
      { name: "Writing Skills", weeks: 2, status: "Not Started" },
    ],
  },
  {
    group: "Social Science",
    color: "purple-600",
    emoji: "🌍",
    items: [
      { name: "History", weeks: 3, status: "In Progress" },
      { name: "Geography", weeks: 3, status: "Not Started" },
      { name: "Civics", weeks: 2, status: "Not Started" },
    ],
  },
];

function statusColor(status) {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "In Progress":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-500";
  }
}

function statusLabel(status) {
  switch (status) {
    case "Completed":
      return (
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 flex items-center gap-1">
          Completed <span>🎯</span>
        </span>
      );
    case "In Progress":
      return (
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 flex items-center gap-1">
          In Progress <span>📝</span>
        </span>
      );
    default:
      return (
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 flex items-center gap-1">
          Not Started <span>📝</span>
        </span>
      );
  }
}

export default function SyllabusDashboard() {
  return (
    <div className=" bg-gray-50 flex items-center justify-center  px-2">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2 text-gray-900">
          <span>📚</span> 9th Class Syllabus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {syllabus.map(({ group, color, emoji, items }) => (
            <div key={group} className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className={`font-bold text-lg mb-5 flex items-center gap-2 text-${color}`}>
                <span>{emoji}</span>
                <span className={color === "orange-600" ? "text-orange-700" : color === "green-600" ? "text-green-700" : color === "blue-600" ? "text-blue-700" : "text-purple-700"}>
                  {group}
                </span>
              </h2>
              <div className="space-y-4">
                {items.map(({ name, weeks, status }) => (
                  <div key={name} className="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
                    <div>
                      <div className="font-semibold text-gray-800">{name}</div>
                      <div className="text-sm text-gray-500">Est. {weeks} week{weeks > 1 ? "s" : ""}</div>
                    </div>
                    <div>
                      {statusLabel(status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
