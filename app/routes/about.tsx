import { Link } from "react-router";

export function meta() {
  return [
    { title: "About - React Router SSR" },
    { name: "description", content: "About page with SSR middleware" },
  ];
}

export default function About() {
  return (
    <div style={{ padding: "20px", fontFamily: "system-ui, sans-serif" }}>
      <h1>About Page</h1>
      <p>This is the about page - also server-rendered!</p>
      <p>The middleware tracks this page view too.</p>
      <p style={{ marginTop: "20px" }}>
        <Link to="/" style={{ color: "#0066cc" }}>
          Go to Home Page
        </Link>
      </p>
    </div>
  );
}
