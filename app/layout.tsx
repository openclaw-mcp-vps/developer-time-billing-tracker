import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevBill – Track Billable Hours Across Dev Environments",
  description: "Automatically monitor active coding time across IDEs, terminals, and browsers. Generate invoices in seconds."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c6c791f9-ef37-4295-b188-7f16cbed825e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
