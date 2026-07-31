import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../styles/PageShell.css";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-shell-main">{children}</main>

      <Footer />
    </div>
  );
}
