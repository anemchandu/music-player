import Link from "next/link";
export const metadata = {
  title: "Home Page",
  description: "Music App Developed By Mavin",
  metadataBase: new URL("https://music-player-mavin.vercel.app/"),
};

export default function Home() {
  return (
    <main className="flex-col md:flex-row flex h-screen w-full bg-[#A0FDAE] justify-center items-center ">
      <div className="md:p-6 w-1/2">
        <img src="/landing.png" className="md:h-screen w-full" />
      </div>
      <div className=" gap-4 mt-8 md:mt-0 flex md:h-screen md:w-1/2 flex-col justify-center items-center md:gap-[60px]">
        <h1 className="text-[43px] font-bold font-dm">No More Limits</h1>
        <h3 className="text-[25px] font-bold font-dm">Hassle Free Music</h3>
        <Link href="/home">
          <button className="p-[3.5%] bg-black text-white md:p-[1.5%] rounded-lg">
            Click to get Started
          </button>
        </Link>
      </div>
    </main>
  );
}
