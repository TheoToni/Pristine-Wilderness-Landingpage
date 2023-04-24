import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row   bg-gradient-to-b from-slate-900 to-slate-700  ">
      <div className="wrapper flex h-screen bg-  ">
        <h1 className="text-white text-5xl font-bold">
          Experience the power of the nature
        </h1>

        <Image
          className=" rounded-xl"
          src="/astronaut.jpg"
          alt="astronaut in the jungle"
          width={600}
          height={100}
        ></Image>
      </div>
    </main>
  );
}
