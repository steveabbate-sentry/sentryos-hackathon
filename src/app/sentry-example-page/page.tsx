"use client";

import * as Sentry from "@sentry/nextjs";

export default function Page() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sentry Error Testing Page</h1>
      <p>Click the button below to test Sentry error reporting:</p>
      <button
        type="button"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#6c47ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => {
          throw new Error("Sentry Frontend Test Error");
        }}
      >
        Throw Test Error
      </button>
      <br />
      <br />
      <button
        type="button"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#6c47ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={async () => {
          const response = await fetch("/api/sentry-example-api");
          const data = await response.json();
          console.log(data);
        }}
      >
        Test API Error
      </button>
    </div>
  );
}
