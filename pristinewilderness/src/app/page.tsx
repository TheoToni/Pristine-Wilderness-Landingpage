import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center h-screen items-center  bg-gradient-to-r from-[#0F2459] to-[#E6820B]">
      <div className="wrapper flex flex-col items-center justify-center">
        <h1 className="text-white z-10 uppercase text-5xl font-bold mb-20">
          Explore the AI nature
        </h1>

        <Image
          className=" rounded-xl z-2 absolute"
          src="/astronaut.jpg"
          alt="astronaut in the jungle"
          width={350}
          height={100}
        ></Image>
        <Image
          className=" rounded-xl blur-sm absolute"
          src="/astronaut.jpg"
          alt="astronaut in the jungle"
          width={360}
          height={100}
        ></Image>
      </div>
    </main>
  );
}
