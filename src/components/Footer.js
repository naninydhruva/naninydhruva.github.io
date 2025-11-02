import { Heart, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className="text-gray-400 mb-2 flex items-center justify-center gap-2 flex-wrap text-sm sm:text-base">
          © {new Date().getFullYear()} Chilakamarri Srinikethan Nydhruva. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
