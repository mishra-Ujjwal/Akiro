import React, { useState } from "react";
import Timetable from "../components/Timetable";
import PersonalizedRoadmap from "../components/PersonalizedRoadmap";
import SyllabusDashboard from "../components/Syllabus";
import StudyNotesDashboard from "../components/StudyNotesDashboard";
import Analytics from "../components/Analytics";

export default function StudySyncDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [quizAnswer, setQuizAnswer] = useState(null);

  // Example data for progress
  const overallCompletion = 56;
  const subjectProgress = [
    { subject: "Math", icon: "📐", progress: 40, color: "orange" },
    { subject: "Science", icon: "🔬", progress: 55, color: "green" },
    { subject: "English", icon: "📚", progress: 70, color: "blue" },
    { subject: "Social Science", icon: "🌍", progress: 45, color: "purple" },
  ];

  // Quiz data example (simplified)
  const quizQuestions = [
    {
      question: "What is the sum of angles in a triangle?",
      options: [
        { value: "a", label: "90 degrees" },
        { value: "b", label: "180 degrees" },
        { value: "c", label: "270 degrees" },
        { value: "d", label: "360 degrees" },
      ],
    },
  ];

  // Handlers
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleQuizAnswerChange = (e) => {
    setQuizAnswer(e.target.value);
  };

  const nextQuestion = () => {
    if (!quizAnswer) {
      alert("Please select an answer before proceeding!");
      return;
    }
    alert("Great! Moving to the next question...");
    setQuizAnswer(null);
  };

  return (
    <div className="bg-gray-50 w-screen min-h-screen font-sans">
      {/* Header */}
      <header className="  text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div>
            <img src="/logo.png" alt="" className="w-30" />
            <p className="text-black text-2xl">
              Welcome back, Alex! Ready to learn today?
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-800">🔥 7</div>
              <div className="text-sm text-black">Day Streak</div>
            </div>
            <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-2xl">
              👨‍🎓
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="flex sm:flex-row flex-col ">
        <nav className="sm:w-1/4 w-full bg-white shadow-sm pt-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex sm:flex-col flex-row space-y-4 text-md overflow-y-auto">
              {[
                "dashboard",
                "syllabus",
                "roadmap",
                "timetable",
                "quizzes",
                "notes",
                "analytics",
              ].map((tab) => (
                <button
                  key={tab}
                  className={`nav-btn py-4 w-fit sm:w-full px-2 border-b-2 font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="sm:w-3/4 w-full  mx-auto sm:px-4 px-3 py-8">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-3 px-0 gap-8">
                {/* Progress Summary */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow p-6 mb-8 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      📊 Progress Summary
                    </h2>

                    {/* Overall Progress */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-700">
                          Overall Completion
                        </h3>
                        <span className="text-2xl font-bold text-blue-600">
                          {overallCompletion}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                          style={{ width: `${overallCompletion}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Subject Progress */}
                    <div className="grid grid-cols-2 gap-6">
                      {subjectProgress.map(
                        ({ subject, icon, progress, color }) => (
                          <div key={subject}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-700">
                                {icon} {subject}
                              </span>
                              <span
                                className={`text-sm font-bold text-${color}-600`}
                              >
                                {progress}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`bg-${color}-500 h-2 rounded-full`}
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Quiz Performance */}
                  <div className="bg-white rounded-xl shadow p-6 hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      🎯 Quiz Performance
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          78%
                        </div>
                        <div className="text-sm text-gray-600">
                          Average Score
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          12
                        </div>
                        <div className="text-sm text-gray-600">
                          Quizzes Taken
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">
                          3
                        </div>
                        <div className="text-sm text-gray-600">Weak Topics</div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <strong>Weak Topics:</strong> Algebra, Physics Motion,
                        Geography
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Daily Plan */}
                  <div className="bg-white rounded-xl shadow p-6 hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      📅 Today's Plan
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium text-gray-800">
                            Geometry - Triangles
                          </div>
                          <div className="text-sm text-gray-600">
                            Next topic to study
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-red-50 rounded-lg">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium text-gray-800">
                            Chemistry Quiz
                          </div>
                          <div className="text-sm text-gray-600">Due today</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium text-gray-800">
                            Algebra Revision
                          </div>
                          <div className="text-sm text-gray-600">
                            AI recommended
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-white rounded-xl shadow p-6 hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      🏆 Achievements
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          emoji: "🥇",
                          label: "Quiz Master",
                          bg: "yellow-50",
                          text: "gray-700",
                        },
                        {
                          emoji: "📖",
                          label: "Chapter Complete",
                          bg: "blue-50",
                          text: "gray-700",
                        },
                        {
                          emoji: "⚡",
                          label: "Speed Learner",
                          bg: "green-50",
                          text: "gray-700",
                        },
                        {
                          emoji: "🎯",
                          label: "Perfect Score",
                          bg: "purple-50",
                          text: "gray-700",
                        },
                      ].map(({ emoji, label, bg, text }) => (
                        <div
                          key={label}
                          className={`text-center p-3 bg-${bg} rounded-lg`}
                        >
                          <div className="text-2xl mb-1">{emoji}</div>
                          <div className={`text-xs font-medium ${text}`}>
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Syllabus Tab (show only partial example) */}
          {activeTab === "syllabus" && <SyllabusDashboard />}

          {activeTab === "roadmap" && <PersonalizedRoadmap />}

          {activeTab === "timetable" && <Timetable />}

          {/* Quizzes Tab (simplified example) */}
          {activeTab === "quizzes" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Daily Quiz */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  🎯 Daily Quiz - Geometry
                </h2>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Question 1 of {quizQuestions.length}
                    </span>
                    <span className="text-sm text-gray-600">Time: 2:30</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {quizQuestions[0].question}
                  </h3>
                  <div className="space-y-3">
                    {quizQuestions[0].options.map(({ value, label }) => (
                      <label
                        key={value}
                        className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50"
                      >
                        <input
                          type="radio"
                          name="quiz-answer"
                          value={value}
                          className="mr-3"
                          checked={quizAnswer === value}
                          onChange={handleQuizAnswerChange}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    disabled
                  >
                    Previous
                  </button>
                  <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={nextQuestion}
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Recent Quiz Results */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  📊 Recent Quiz Results
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      topic: "Algebra - Linear Equations",
                      time: "Completed 2 hours ago",
                      score: 85,
                      correct: "8/10",
                      color: "green",
                    },
                    {
                      topic: "Physics - Motion",
                      time: "Completed yesterday",
                      score: 60,
                      correct: "6/10",
                      color: "red",
                    },
                    {
                      topic: "English - Grammar",
                      time: "Completed 2 days ago",
                      score: 92,
                      correct: "9/10",
                      color: "blue",
                    },
                  ].map(({ topic, time, score, correct, color }) => (
                    <div
                      key={topic}
                      className={`flex items-center justify-between p-3 rounded-lg bg-${color}-50`}
                    >
                      <div>
                        <div className="font-medium text-gray-800">{topic}</div>
                        <div className="text-sm text-gray-600">{time}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold text-${color}-600`}>
                          {score}%
                        </div>
                        <div className="text-sm text-gray-600">
                          {correct} correct
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "notes" && <StudyNotesDashboard />}

          {activeTab === "analytics" && <Analytics />}
          {/* Other tabs can be added here similarly */}
        </main>
      </div>
    </div>
  );
}
