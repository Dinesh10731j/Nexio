"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";

interface ThemeState {
  theme: string;
}

interface RootState {
  theme: ThemeState;
}

export default function NotFound() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-h-screen items-center justify-center text-center p-4">
        <h1 className="text-5xl md:text-6xl font-bold text-red-500">404</h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          onClick={() => router.push("/")}
          className={`mt-6 px-6 py-2 shadow-xl text-white rounded-lg ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
              : "bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
          }`}
        >
          Go Back Home
        </button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
