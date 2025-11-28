export default function StudentDashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={{
        width: "220px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}>
        <h2>Dashboard</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span>Home</span>
          <span>Courses</span>
          <span>Marks</span>
          <span>Notifications</span>
        </nav>
      </aside>

      {/* Main Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* Topbar */}
        <header style={{
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h3>Welcome, Student</h3>
          <div>Profile</div>
        </header>

        {/* Main Content */}
        <main style={{
          padding: "16px",
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
        }}>

          {/* Quick Stats */}
          <div style={{ padding: "16px" }}>
            <h4>Total Courses</h4>
            <p>6</p>
          </div>

          <div style={{ padding: "16px" }}>
            <h4>Average Marks</h4>
            <p>82%</p>
          </div>

          <div style={{ padding: "16px" }}>
            <h4>Pending Tasks</h4>
            <p>3</p>
          </div>

          {/* Notifications Section */}
          <div style={{ gridColumn: "1 / -1", padding: "16px" }}>
            <h4>Notifications</h4>
            <ul>
              <li>Assignment due tomorrow</li>
              <li>Exam schedule updated</li>
            </ul>
          </div>

          {/* Recent Activities */}
          <div style={{ gridColumn: "1 / -1", padding: "16px" }}>
            <h4>Recent Activities</h4>
            <ul>
              <li>Submitted Math Assignment</li>
              <li>Viewed Science Notes</li>
            </ul>
          </div>

        </main>
      </div>

      {/* Mobile Responsive */}
      <style>{`
        @media (max-width: 768px) {
          aside {
            width: 160px;
          }
        }
        @media (max-width: 600px) {
          aside {
            display: none;
          }
          header h3 {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
