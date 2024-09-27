import { useEffect, useState } from "react";
import jumbotron from "../../assets/images/jumbotron.png";
import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import faq from "../../assets/images/faq.png";
import { Footer } from "../templates/footer";

export const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-amber-500 to-amber-300">
      <section id="jumbotron" className="flex flex-col md:flex-row w-full min-h-[600px] xl:min-h-[700px] justify-center items-center md:items-stretch">
        <div className="basis-1/2 w-full flex justify-center items-center">
          <div className="basis-3/4">
            <h1 className="text-gray-50 font-bold text-5xl text-wrap">YUK SEKOLAH AJA DI SEKOLAH TINGGI JEWEPE</h1>
            <p className="text-gray-50 font-bold text-2xl my-4">CEK ARTIKEL KITA YA</p>
            <a href="/artikel" className="px-5 py-3 rounded bg-white hover:bg-gray-100 font-bold text-xl">
              CEK ARTIKEL
            </a>
          </div>
        </div>
        <div className="basis-1/2 w-full overflow-hidden hidden md:block relative">
          <img src={jumbotron} alt="" className="absolute right-0 bottom-0 xl:-bottom-10 2xl:-bottom-48" />
        </div>
      </section>
    </div>
  );
};
