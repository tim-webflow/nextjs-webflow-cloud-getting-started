"use client";

import "./page.css";

import { Navbar } from "@/webflow/Navbar"; // Import the Navbar component
import { Footer } from "@/webflow/Footer"; // Import the Footer component

export default function Home() {
  return (
    <>
      <Navbar
        navbarLinkFeatures="Hello"
        navbarLinkProducts="Webflow"
        navbarLinkResources="Cloud"
        navbarLinkContact=""
      />
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Webflow Cloud</h1>
          <p className="hero-description">
            Your Next.js project is ready. Start building and sync your Webflow
            components and design system.
          </p>
          <div className="hero-cta">
            <a
              href="https://developers.webflow.com/data-clients/docs/getting-started"
              className="button-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
