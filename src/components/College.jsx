import React, { useState, useEffect } from "react";

const courseData = [
  {
    id: "webdev",
    emoji: "🖥️",
    title: "Web Development",
    subtitle: "MERN Stack",
    description: "Master full-stack development with React, Node.js, and MongoDB",
    tag: "Recommended",
    tagColor: "green",
    duration: "8 weeks",
    progress: 0,
    progressLabel: "Not started",
  },
  {
    id: "dsa",
    emoji: "🛠️",
    title: "Data Structures & Algorithms",
    subtitle: "Placement Prep",
    description: "Essential for coding interviews and competitive programming",
    tag: "High Priority",
    tagColor: "red",
    duration: "10 weeks",
    progress: 25,
    progressLabel: "25% completed",
  },
  {
    id: "cloud",
    emoji: "☁️",
    title: "Cloud Computing",
    subtitle: "AWS + Azure",
    description: "Learn cloud platforms and deployment strategies",
    tag: "Future Ready",
    tagColor: "blue",
    duration: "6 weeks",
    progress: 0,
    progressLabel: "Not started",
  },
  {
    id: "ml",
    emoji: "🤖",
    title: "Machine Learning",
    subtitle: "Python + TensorFlow",
    description: "Build AI models and understand ML algorithms",
    tag: "Advanced",
    tagColor: "purple",
    duration: "12 weeks",
    progress: 0,
    progressLabel: "Not started",
  },
  {
    id: "mobile",
    emoji: "📱",
    title: "Mobile App Development",
    subtitle: "Flutter/React Native",
    description: "Create cross-platform mobile applications",
    tag: "Trending",
    tagColor: "indigo",
    duration: "8 weeks",
    progress: 0,
    progressLabel: "Not started",
  },
  {
    id: "core",
    emoji: "⚡",
    title: "Core CS Subjects",
    subtitle: "OS, DBMS, CN",
    description: "Essential computer science fundamentals for interviews",
    tag: "Must Know",
    tagColor: "yellow",
    duration: "6 weeks",
    progress: 60,
    progressLabel: "60% completed",
  },
];

const dailyTasksInitial = [
  {
    id: 1,
    title: "Complete Arrays & Strings",
    description: "DSA Course • 45 mins",
    completed: true,
    color: "green",
    type: "task",
  },
  {
    id: 2,
    title: "Take Daily DSA Quiz",
    description: "10 questions • 15 mins",
    completed: false,
    color: "blue",
    type: "quiz",
  },
  {
    id: 3,
    title: "Revise Linked Lists",
    description: "Weak area identified • 30 mins",
    completed: false,
    color: "orange",
    type: "reschedule",
  },
];

const weakAreasInitial = [
  { id: 1, name: "Linked Lists", btnLabel: "Revise", btnColor: "red" },
  { id: 2, name: "Dynamic Programming", btnLabel: "Practice", btnColor: "yellow" },
];

export default function CollegeLearningDashboard() {
  const [courseView, setCourseView] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [dailyTasks, setDailyTasks] = useState(dailyTasksInitial);

  // Progress bars animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const bars = document.querySelectorAll(".progress-bar");
      bars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handler open course view
  const openCourse = (courseId) => {
    setSelectedCourseId(courseId);
    setCourseView(true);
  };

  // Handler back to dashboard
  const showDashboard = () => {
    setCourseView(false);
  };

  // Handle checkbox toggle in daily tasks
  const toggleTaskCompleted = (id) => {
    setDailyTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  };

  // Reschedule task button handler
  const rescheduleTask = (id) => {
    setDailyTasks(prev =>
      prev.map(task => task.id === id ? { ...task, rescheduled: true } : task)
    );
    alert("📅 Task moved to tomorrow's plan!");
  };

  // Get selected course details
  const selectedCourse = courseData.find(c => c.id === selectedCourseId);

  return (
    <div className="bg-gray-50 font-sans w-screen min-h-screen">
      {/* Navigation */}
      <nav className="gradient-bg text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="" className="w-30" />
            
          </div>
          <div className="flex items-center text-purple-900 space-x-4">
            <span className="streak-fire text-2xl">🔥</span>
            <span className="font-bold">15 Days</span>
            <div className="w-10 h-10 bg-purple-900 text-white rounded-full flex items-center justify-center  font-bold">A</div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {!courseView && (
          <>
            {/* Welcome & AI Suggestion */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, ALEX! </h2>
              <p className="text-xl text-gray-600 mb-4">B.Tech CSE • 3rd Year • Ready to level up your skills?</p>
              <div className="ai-suggestion p-6 rounded-2xl mb-6 bg-purple-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🤖</span>
                  <h3 className="text-xl font-bold text-gray-800">AI Recommendation</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Perfect timing!</strong> You're in 3rd year CSE. I recommend starting with <strong>Web Development + DSA</strong> for placement preparation.
                  This combination will make you industry-ready in 3-4 months.
                </p>
                
              </div>
            </div>

            {/* AI Suggested Courses */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">🎯 AI Suggested Courses for You</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseData.map(({ id, emoji, title, subtitle, description, tag, tagColor, duration, progress, progressLabel }) => (
                  <div
                    key={id}
                    className="course-card p-6 rounded-2xl shadow-lg cursor-pointer"
                    onClick={() => openCourse(id)}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{emoji}</span>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
                        <p className="text-sm text-gray-600">{subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`bg-${tagColor}-100 text-${tagColor}-800 px-3 py-1 rounded-full text-sm font-semibold`}>
                        {tag}
                      </span>
                      <span className="text-gray-500 text-sm">{duration}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="progress-bar h-2 rounded-full"
                        data-width={`${progress}%`}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{progressLabel}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Plan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  📅 Today's Plan
                  <span className="ml-auto text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Day 12</span>
                </h3>
                <div className="space-y-4" id="daily-tasks">
                  {dailyTasks.map((task) => (
                    <div
                      key={task.id}
                      className={`flex items-center p-4 rounded-xl task-item bg-${task.color}-50`}
                      style={{ opacity: task.rescheduled ? 0.5 : 1 }}
                    >
                      <input
                        type="checkbox"
                        className={`w-5 h-5 rounded mr-4 text-${task.color}-600`}
                        checked={task.completed}
                        onChange={() => toggleTaskCompleted(task.id)}
                      />
                      <div className={`flex-1 ${task.completed ? "task-completed" : ""}`}>
                        <div className="font-semibold text-gray-800">{task.title}</div>
                        <div className="text-sm text-gray-600">{task.description}</div>
                      </div>
                      {task.type === "quiz" && (
                        <button
                          className={`!bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:!bg-${task.color}-600 transition-colors`}
                          onClick={() => alert(`Starting quiz for task ${task.title}`)}
                        >
                          Start
                        </button>
                      )}
                      {task.type === "reschedule" && (
                        <button
                          className={`!bg-red-700 text-white px-3 py-1 rounded-full text-sm hover:bg-${task.color}-600 transition-colors`}
                          onClick={() => rescheduleTask(task.id)}
                          disabled={task.rescheduled}
                        >
                          {task.rescheduled ? "Rescheduled" : "Reschedule"}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">Today's Progress</span>
                    <span className="text-sm text-gray-600">
                      {dailyTasks.filter(t => t.completed).length}/{dailyTasks.length} completed
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{
                        width: `${(dailyTasks.filter(t => t.completed).length / dailyTasks.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Quick Stats & Actions */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Learning Analytics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">DSA Progress</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <span className="text-sm font-semibold">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Core Subjects</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <span className="text-sm font-semibold">60%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">This Week</span>
                      <span className="font-semibold">18.5 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Weak Areas</h3>
                  <div className="space-y-3">
                    {weakAreasInitial.map(({ id, name, btnLabel, btnColor }) => (
                      <div key={id} className={`flex items-center justify-between p-3 rounded-lg bg-${btnColor}-50`}>
                        <span className="text-gray-800">{name}</span>
                        <div className={`bg-${btnColor}-500 text-white px-3 py-1 rounded text-sm hover:bg-${btnColor}-600 transition-colors`}>
                          {btnLabel}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {courseView && selectedCourse && (
          <div className="mb-6">
            <button onClick={showDashboard} className="text-blue-600 hover:text-blue-800 mb-4">
              ← Back to Dashboard
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedCourse.title} Roadmap</h2>
            <p className="text-xl text-gray-600">{selectedCourse.subtitle} • {selectedCourse.duration} • Beginner to Advanced</p>

            {/* Roadmap Timeline */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">🗺️ Learning Roadmap</h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* These steps could come dynamically from props or external data */}
                <div className="roadmap-step bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold completed">HTML Basics</div>
                <div className="roadmap-step bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold completed">CSS & Styling</div>
                <div className="roadmap-step bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">JavaScript</div>
                <div className="roadmap-step bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-semibold">React.js</div>
                <div className="roadmap-step bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-semibold">Node.js</div>
                <div className="roadmap-step bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-semibold">MongoDB</div>
                <div className="roadmap-step bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-semibold">Full Stack Project</div>
              </div>
            </div>

            {/* Current Topic */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">📚 Today: JavaScript Fundamentals</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Day 15</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Learning Content */}
                  <div className="p-6 bg-blue-50 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">📖 Learning Content</h4>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-white rounded-lg">
                        <span className="text-2xl mr-3">📺</span>
                        <div className="flex-1">
                          <div className="font-semibold">JavaScript Variables & Data Types</div>
                          <div className="text-sm text-gray-600">Video • 25 mins</div>
                        </div>
                        <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Watch</div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg">
                        <span className="text-2xl mr-3">📄</span>
                        <div className="flex-1">
                          <div className="font-semibold">Functions & Scope in JavaScript</div>
                          <div className="text-sm text-gray-600">Article • 15 mins read</div>
                        </div>
                        <div className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">Read</div>
                      </div>
                    </div>
                  </div>

                  {/* Daily Quiz */}
                  <div className="p-6 bg-purple-50 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">🎯 Daily Quiz</h4>
                    <p className="text-gray-600 mb-4">Test your understanding with 8 questions on JavaScript basics</p>
                    <div
                      className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
                      onClick={() => alert("Starting quiz!")}
                    >
                      Start Quiz (10 mins)
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Progress */}
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Progress</h4>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-blue-600">{selectedCourse.progress}%</div>
                      <div className="text-sm text-gray-600">{selectedCourse.title} Course</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${selectedCourse.progress}%` }}></div>
                    </div>
                  </div>

                  {/* Revision Notes */}
                  <div className="p-6 bg-yellow-50 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">📝 Quick Notes</h4>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-white rounded">• Variables: let, const, var</div>
                      <div className="p-2 bg-white rounded">• Data types: string, number, boolean</div>
                      <div className="p-2 bg-white rounded">• Functions: declaration vs expression</div>
                    </div>
                    <div className="w-full text-center mt-4 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors">
                      View All Notes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
