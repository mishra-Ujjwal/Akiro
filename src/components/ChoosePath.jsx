import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const paths = [
  { label: "Class-9", emoji: "📚", className: "class-9", style: { background: "linear-gradient(145deg, #fef3c7, #fbbf24)", color: "#92400e" } },
  { label: "Class-10", emoji: "📖", className: "class-10", style: { background: "linear-gradient(145deg, #dbeafe, #3b82f6)", color: "#1e40af" } },
  { label: "Class-11", emoji: "🎯", className: "class-11", style: { background: "linear-gradient(145deg, #dcfce7, #22c55e)", color: "#15803d" } },
  { label: "Class-12", emoji: "🚀", className: "class-12", style: { background: "linear-gradient(145deg, #fce7f3, #ec4899)", color: "#be185d" } },
  { label: "JEE", emoji: "⚡", className: "jee", style: { background: "linear-gradient(145deg, #e0e7ff, #6366f1)", color: "#3730a3" } },
  { label: "NEET", emoji: "🩺", className: "neet", style: { background: "linear-gradient(145deg, #fef2f2, #ef4444)", color: "#991b1b" } },
  { label: "B.Tech/College", emoji: "🎓", className: "college", style: { background: "linear-gradient(145deg, #f0fdf4, #059669)", color: "#064e3b" }, colSpan: 2 }
];

const ChoosePath = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const navigate = useNavigate()
  const handleSelect = (path) => {
    setSelectedPath(path);
    navigate(`/${path}`)
  };

  if (selectedPath) {
    return (
      <section className="gradient-bg w-screen flex items-center justify-center p-4 min-h-screen">
        <div className="bg-white rounded-3xl p-12 max-w-2xl w-full card-shadow backdrop-blur-sm bg-opacity-95 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Perfect Choice!</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're preparing your personalized <strong>{selectedPath}</strong> learning roadmap...
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="gradient-bg w-screen flex items-center justify-center p-4 min-h-screen relative">
      {/* Floating Background Shapes */}
      <div className="floating-shapes absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shape w-20 h-20 bg-white rounded-full absolute" style={{ top: "10%", left: "10%", opacity: 0.1, animation: "float 6s ease-in-out infinite", animationDelay: "0s" }}></div>
        <div className="shape w-16 h-16 bg-white rounded-lg transform rotate-45 absolute" style={{ top: "20%", right: "10%", opacity: 0.1, animation: "float 6s ease-in-out infinite", animationDelay: "2s" }}></div>
        <div className="shape w-12 h-12 bg-white rounded-full absolute" style={{ bottom: "20%", left: "15%", opacity: 0.1, animation: "float 6s ease-in-out infinite", animationDelay: "4s" }}></div>
        <div className="shape w-24 h-24 bg-white rounded-lg transform rotate-12 absolute" style={{ bottom: "10%", right: "20%", opacity: 0.1, animation: "float 6s ease-in-out infinite", animationDelay: "1s" }}></div>
      </div>

      {/* Main Card */}
      <div className="card-entrance bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full card-shadow backdrop-blur-sm bg-opacity-95 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Learning Path
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
            Tell us where you are right now, so we can build a personalized roadmap for you.
          </p>
        </div>

        {/* Learning Path Buttons Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6`}>
          {paths.map(({ label, emoji, style, colSpan }) => (
            <button
              key={label}
              onClick={() => handleSelect(label)}
              className={`path-button button-stagger p-6 md:p-8 rounded-2xl font-bold text-lg md:text-xl text-center relative`}
              style={{
                ...style,
                gridColumn: colSpan === 2 ? 'span 2 / span 2' : 'auto',
                background: style.background,
                color: style.color,
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="text-3xl mb-2">{emoji}</div>
              {label}
            </button>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Don't worry, you can always change this later in your profile settings.
          </p>
        </div>
      </div>
      {/* Include animation styles here or in your global css */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .button-stagger {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          animation-delay: 0.1s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ChoosePath;
