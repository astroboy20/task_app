import Image from "next/image";
import { Inter } from "next/font/google";
import { HomeContainer } from "@/container/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomeContainer />
    </main>
  );
}
