// app/layout.js
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBriefcase, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative pb-24">
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-blue-900 text-white z-50 shadow">
          <div className="max-w-6xl mx-auto flex items-center justify-start space-x-4 p-4">

            <Link href="/" className="hover:bg-white hover:text-blue-900 px-3 py-2 rounded flex items-center gap-2">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </Link>

            <Link href="/portfolio" className="hover:bg-white hover:text-blue-900 px-3 py-2 rounded flex items-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} />
              My Job Portfolio
            </Link>

            <Link href="/certificates" className="hover:bg-white hover:text-blue-900 px-3 py-2 rounded flex items-center gap-2">
              <FontAwesomeIcon icon={faCertificate} />
              My Certificates
            </Link>

          </div>
        </nav>

        {/* Main content */}
         <main className="flex-1 pt-24 pb-32 px-2 md:px-8 max-w-full mx-1">
         {/* <main className="flex-1 pt-24 pb-32 px-2 md:px-8 max-w-6xl mx-auto"> */}

          {/* <div className="max-w-6xl mx-auto px-2 md:px-8"> */}
              {children}
            {/* </div> */}
        </main>

        {/* Footer - fixed at bottom */}
        <footer className="fixed bottom-0 left-0 w-full bg-blue-900 text-white text-center py-6 shadow-t">
          <p>Find me on social media.</p>
          <p className="flex justify-center gap-6 mt-2">
            <a href="https://www.youtube.com/@roytek7667/playlists" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-300">
              <FontAwesomeIcon icon={faYoutube} />
              YouTube
            </a>

            <a href="https://www.linkedin.com/in/john-geralde-20141593/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-300">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
