import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="m-auto min-h-screen pt-[22px] max-w-[1440px] w-full px-5 bg-[#1C1D1F]">
      <main className="flex w-full justify-items-center">
        <Navbar />
      </main>
    </div>
  );
}
