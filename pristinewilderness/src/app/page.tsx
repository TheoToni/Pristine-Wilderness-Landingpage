import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center h-screen items-center  bg-gradient-to-r from-[#0F2459] to-[#E6820B]">
      <div className="wrapper flex flex-col items-center justify-center">
        <h1 className="text-white z-1  text-3xl  mb-20 absolute top-10">
          Explore the AI nature
        </h1>
        <p className="absolute bottom-10 text-white">
          Library provided by THEO.JS
        </p>

        <Image
          className=" rounded-xl z-10 absolute"
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
