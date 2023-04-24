import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row h-screen  bg-gradient-to-r from-[#0F2459] to-[#E6820B]  ">
      <div className="wrapper  flex">
        <h1 className="text-white text-5xl font-bold">
          Experience the power of the nature
        </h1>
        <div className="h-1/2px">
          <Image
            className=" rounded-xl"
            src="/astronaut.jpg"
            alt="astronaut in the jungle"
            width={600}
            height={100}
          ></Image>
        </div>
      </div>
    </main>
  );
}
