import { Image } from '@shopify/hydrogen';
import React from 'react';

const Khasiat = ({ bgColor }) => {
  return (
    <div>
      <section className={`${bgColor}`}>
        <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
          <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
            <div className="lg:w-2/5 lg:pr-24 flex flex-col items-start md:mb-16 text-left">
              <h3 className="text-xl font-bold mb-6 text-green-500 capitalize">
                100% Selamat
              </h3>
              <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                Bahan Semulajadi
              </h2>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
                Hanya bahan-bahan semulajadi. Dijamin selamat digunakan.
                InsyaAllah.
              </p>
              <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
                <div className="hidden md:flex mt-3">
                  <button className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                    Lihat Harga
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 xl:mt-0 w-full md:mt-12">
              <div className="relative items-center w-full md:px-5 md:py-12">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/Kandungan_3-01.png?v=1680495093"
                  alt="khasiat saraf emas yang mujarab merawat pelbagai penyakit"
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Khasiat;
