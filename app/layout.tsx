import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewScheduler – Schedule Google Review Responses",
  description: "Pre-write personalized Google review responses and schedule them to post at optimal times for local SEO."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="525ee027-dfe6-44a5-86ac-ba565ba7fdc0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
