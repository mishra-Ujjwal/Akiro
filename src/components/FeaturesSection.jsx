import React from "react";

const features = [
  {
    number: 1,
    emoji: "🗺️",
    title: "Customized Learning Roadmap",
    description:
      "Our AI creates a study plan just for you. Whether you're in 9th grade or preparing for NEET/JEE, follow a daily roadmap designed to match your learning speed and syllabus.",
    tags: ["Personalized plan"],
    bg: "bg-blue-50",
    text: "text-blue-600",
    highlights: ["9th grade", "NEET/JEE"],
  },
  {
    number: 2,
    emoji: "🧠",
    title: "Interactive Quizzes & Revisions",
    description:
      "Practice makes perfect. Take daily quizzes for each topic, track weak areas, and revise efficiently with AI-suggested questions and notes.",
    tags: ["Daily quizzes", "AI revision"],
    bg: "bg-green-50",
    text: "text-green-600",
    highlights: ["quizzes", "AI-suggested"],
  },
  {
    number: 3,
    emoji: "📚",
    title: "Complete Syllabus Coverage",
    description:
      "Get all topics for 9th–12th classes, competitive exams, and college courses. Each subject is broken down into easy-to-follow lessons with notes, videos, and exercises.",
    tags: ["9th-12th + Competitive exams"],
    bg: "bg-purple-50",
    text: "text-purple-600",
    highlights: ["notes", "videos", "exercises"],
  },
  {
    number: 4,
    emoji: "📊",
    title: "Progress Tracking & Analytics",
    description:
      "Monitor your performance with real-time analytics. See subject-wise progress, quiz scores, and AI recommendations to improve faster.",
    callout: "Real-time performance insights",
    calloutColor: "bg-orange-100 text-orange-700",
    progress: { subject: "Mathematics", value: 85 },
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    highlights: ["real-time analytics"],
  },
  {
    number: 4,
    emoji: "🎓",
    title: "College & Career Support",
    description:
      "For college students, get job and internship recommendations, AI-assisted resume building, and guidance to apply to opportunities that match your skills.",
    extraCards: [
      { label: "Job Matching", icon: "💼", bg: "bg-indigo-50", color: "text-indigo-600" },
      { label: "Resume Builder", icon: "📝", bg: "bg-pink-50", color: "text-pink-600" },
      { label: "Career Guidance", icon: "🎯", bg: "bg-teal-50", color: "text-teal-600" },
    ],
    bg: "bg-orange-50",
    text: "text-orange-700",
    highlights: ["job", "AI-assisted", "resume", "guidance"],
  },
];

const FeaturesSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-12">
    <div className="mb-10 text-center">
      <h2 className="text-4xl font-bold text-gray-800">
        Powerful Features for <span className="text-purple-600">Smart Learning</span>
      </h2>
      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Discover how our AI-powered platform transforms your learning journey with personalized study plans, interactive content, and comprehensive support.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.slice(0, 3).map((feature) => (
        <div key={feature.number} className="bg-white rounded-2xl shadow p-7 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red-400 text-white font-bold w-11 h-11 flex items-center justify-center rounded-full text-xl">{feature.number}</span>
            <span className="text-2xl">{feature.emoji}</span>
          </div>
          <h3 className="text-2xl font-extrabold mb-2 text-gray-900">{feature.title}</h3>
          <p className="text-gray-600 mb-3">{feature.description}</p>
          {feature.tags && (
            <div className="mt-auto">
              <div className={`inline-flex items-center px-3 py-1 rounded-md text-sm ${feature.bg} ${feature.text}`}>
                • {feature.tags[0]}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Progress Card */}
   

      {/* College & Career Support Card */}
      <div className="sm:col-span-2 lg:col-span-3">
        <div className="bg-white rounded-2xl shadow p-7 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red-400 text-white font-bold w-11 h-11 flex items-center justify-center rounded-full text-xl">{features[4].number}</span>
            <span className="text-2xl">{features[4].emoji}</span>
          </div>
          <h3 className="text-2xl font-extrabold mb-2 text-gray-900">{features[4].title}</h3>
          <p className="text-gray-600 mb-6">{features[4].description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-auto">
            {features[4].extraCards.map(({ label, icon, bg, color }) => (
              <div key={label} className={`rounded-xl py-5 flex flex-col items-center ${bg} cursor-pointer shadow-sm`}>
                <span className={`text-2xl ${color}`}>{icon}</span>
                <span className={`mt-2 font-semibold ${color}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-12 flex justify-center">
      <div className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl px-10 py-10 text-center text-white w-full max-w-2xl shadow-lg">
        <p className="text-2xl font-bold mb-3">Ready to Transform Your Learning?</p>
        <p className="mb-7 text-lg">Join thousands of students who are already achieving their academic goals with our AI-powered platform.</p>
        <button className="bg-white text-purple-700 rounded-full text-lg font-semibold px-8 py-3 shadow hover:bg-gray-50 transition-colors">
          Start Learning Today
        </button>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
