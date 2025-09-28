import React from 'react';

// Demo chart component
const DemoChart = ({ data }) => (
  <div style={{ display: 'flex', alignItems: 'flex-end', height: 120, padding: '5px 0' }}>
    {data.map((val, idx) => (
      <div key={idx} style={{
        width: 50, 
       
        height: val, 
        margin: '0 8px', 
        background: '#438af6', 
        borderRadius: 6,
        display: 'flex', 
        alignItems: 'flex-end', 
        justifyContent: 'center'
      }}>
        <span style={{ fontSize: 15, color: '#222', marginBottom: 6, writingMode: 'vertical-lr' }}>
          Week {idx + 1}
        </span>
      </div>
    ))}
  </div>
);

const Analytics = () => {
  const chartData = [158, 201, 87, 174, 101, 80]; // Demo bar heights
  const quizTrends = [
    { name: "Mathematics", avg: 75, color: "#ff8c00" },
    { name: "Science", avg: 82, color: "#25dd93" },
    { name: "English", avg: 88, color: "#438af6" },
    { name: "Social Science", avg: 70, color: "#be2cfa" },
  ];
  const studySubjects = [
    { name: "Math", hours: 8, percent: "29%" },
    { name: "Science", hours: 7, percent: "25%" },
    { name: "English", hours: 6, percent: "21%" },
    { name: "Social Science", hours: 7, percent: "25%" },
  ];

  return (
    <div style={{ fontFamily: "Inter, Arial", backgroundColor: "#f8fafc", minHeight: "100vh", padding: 32 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: "#fff", borderRadius: 20, padding: 28, boxShadow: "0 2px 6px #e5e7eb" }}>
          <h2 style={{ fontWeight: 700, color: "#222", marginBottom: 130 }}>
            <span role="img" aria-label="chart">📈</span> Progress Over Time
          </h2>
          <DemoChart data={chartData} />
        </div>
        <div style={{ background: "#fff", borderRadius: 20, padding: 28, boxShadow: "0 2px 6px #e5e7eb" }}>
          <h2 style={{ fontWeight: 700, color: "#222", marginBottom: 18 }}>
            <span role="img" aria-label="target">🎯</span> Quiz Performance Trends
          </h2>
          {quizTrends.map(item => (
            <div key={item.name} style={{ marginBottom: 16 }}>
              <span style={{ width: 140, display: "inline-block", fontWeight: 500 }}>{item.name}</span>
              <span style={{ float: "right", color: item.color }}>{item.avg}% avg</span>
              <div style={{
                background: "#e5e7eb", height: 8, borderRadius: 8,
                margin: "7px 0 0 0", width: "100%"
              }}>
                <div style={{ 
                  background: item.color, 
                  width: `${item.avg}%`, 
                  height: 8, 
                  borderRadius: 8 
                }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: 20, padding: 28, boxShadow: "0 2px 6px #e5e7eb" }}>
          <h2 style={{ fontWeight: 700, color: "#222", marginBottom: 18 }}>
            <span role="img" aria-label="clock">⏱️</span> Study Time Analysis
          </h2>
          <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
            <div style={{ background: "#e8f2fb", borderRadius: 12, padding: "12px 32px", textAlign: "center", flex: 1 }}>
              <span style={{ fontWeight: 700, fontSize: 24, color: "#438af6" }}>4.2h</span>
              <div style={{ fontSize: 16, marginTop: 2 }}>Daily Average</div>
            </div>
            <div style={{ background: "#d7f7d3", borderRadius: 12, padding: "12px 32px", textAlign: "center", flex: 1 }}>
              <span style={{ fontWeight: 700, fontSize: 24, color: "#25dd93" }}>28h</span>
              <div style={{ fontSize: 16, marginTop: 2 }}>This Week</div>
            </div>
          </div>
          <ul style={{ paddingLeft: 0, marginTop: 8 }}>
            {studySubjects.map(sub => (
              <li key={sub.name} style={{ listStyle: "none", margin: "6px 0", fontSize: 16 }}>
                {sub.name}: {sub.hours}h ({sub.percent})
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: "#fff", borderRadius: 20, padding: 28, boxShadow: "0 2px 6px #e5e7eb" }}>
          <h2 style={{ fontWeight: 700, color: "#222", marginBottom: 18 }}>
            <span role="img" aria-label="bot">🤖</span> AI Recommendations
          </h2>
          <div style={{ background: "#e8f2fb", padding: 14, borderRadius: 8, marginBottom: 12 }}>
            <span style={{ fontWeight: 600, color: "#438af6" }}>🔎 Focus on Algebra</span>
            <div style={{ marginTop: 2, color: "#222" }}>Your quiz scores in algebra are below average. Spend 30 minutes extra this week on linear equations.</div>
          </div>
          <div style={{ background: "#fff8e5", padding: 14, borderRadius: 8, marginBottom: 12 }}>
            <span style={{ fontWeight: 600, color: "#e8ba45" }}>📚 Physics Revision</span>
            <div style={{ marginTop: 2, color: "#222" }}>You haven't revised Physics Motion in 5 days. Schedule a revision session to maintain retention.</div>
          </div>
          <div style={{ background: "#e5fbe7", padding: 14, borderRadius: 8 }}>
            <span style={{ fontWeight: 600, color: "#25dd93" }}>🌟 Great Progress!</span>
            <div style={{ marginTop: 2, color: "#222" }}>Your English performance is excellent. Keep up the consistent study pattern!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
