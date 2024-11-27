import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#2C3539]">
          404 - Sidan kunde inte hittas
        </h1>
        <p className="text-gray-600">
          Tyvärr kunde vi inte hitta sidan du söker.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#2C3539] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
}
