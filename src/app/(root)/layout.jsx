import { Provider } from "@/conext/provider";
import "../globals.css";
import Logo from "@/components/logo";
import SideBarComponent from "./todopage/_components/SideBarComponent";
import NarbarComponent from "./todopage/_components/NarbarComponent";

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        {/* Fixed Navbar */}
        <NarbarComponent />
        {/* Logo Section */}
        <div className="container ml-30 mt-[80px]">
          {/* Adjusted margin-top to avoid overlap with the fixed navbar */}
          <Logo />
        </div>

        {/* Main Content */}
        <main className="flex mt-[80px]">
          {/* Sidebar */}
          <div className="w-[20%] h-screen sticky top-0">
            <SideBarComponent />
          </div>
          <div className="w-[80%]">
            <div className="mt-4">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}