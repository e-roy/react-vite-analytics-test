import { Link } from "react-router";

export function meta() {
  return [
    { title: "Home - React Router SSR" },
    { name: "description", content: "Testing middleware with React Router 7" },
  ];
}

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "system-ui, sans-serif" }}>
      <h1>Home Page</h1>
      <p>This page is server-rendered with middleware tracking!</p>
      <p>Every request (including AI bots) is logged server-side.</p>
      <p style={{ marginTop: "20px" }}>
        <Link to="/about" style={{ color: "#0066cc" }}>
          Go to About Page
        </Link>
      </p>
    </div>
  );
}
