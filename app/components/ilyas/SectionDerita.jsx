import { Link } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';

const SectionDerita = ({ bgColor }) => {
  return (
    <div>
      <section className={`${bgColor}`}>
        <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
          <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
            <div className="lg:w-2/5 lg:pr-24 flex flex-col items-start md:mb-16 text-left">
              <h3 className="text-xl font-bold mb-6 text-green-500 uppercase">
                baca ini baik-baik
              </h3>
              <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                Adakah Anda Menderita
              </h2>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-600 capitalize">
                Lama anda menahan sakit tak hilang-hilang
              </p>
              <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
                <div className="hidden md:flex mt-3">
                  <Link to="#harga" className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                    Lihat Harga
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 xl:mt-0 w-full md:mt-12">
              <div className="relative items-center w-full px-5 py-12">
                <div className="grid w-full grid-cols-2 xs:gap-4 md:gap-12 mx-auto md:grid-cols-2">
                  <div className="p-1">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/4-masalah-1-2-e1601717437543-2-300x300.png?v=1680493531"
                      alt="sakit lutut sembuh dengans saraf emas"
                      width={130}
                    />
                    <h3 className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                      Sakit Lutut
                    </h3>
                    <p className="mx-auto text-base leading-relaxed text-gray-700">
                      Anda menderita sakit lutut tak boleh nak solat?
                    </p>
                  </div>
                  <div className="p-1">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/4-masalah-1-3-e1601717489467-2-296x300.png?v=1680493531"
                      alt="sakit stroke sembuh dengan saraf emas"
                      width={130}
                    />
                    <h3 className="mx-auto mb-6 sm:text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                      Stroke / Angin Ahmar
                    </h3>
                    <p className="mx-auto text-base leading-relaxed text-gray-700">
                      Anda menderita mulut senget akibat angin ahmar?
                    </p>
                  </div>
                  <div className="p-1">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/4-masalah-1-1-e1601717381656-2-300x300.png?v=1680493532"
                      alt="sakit gout sembuh dengan saraf emas"
                      width={130}
                    />
                    <h3 className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                      Gout
                    </h3>
                    <p className="mx-auto text-base leading-relaxed text-gray-700">
                      Anda menderita sakit sendi, kaki & tangan terasa mencucuk?
                    </p>
                  </div>
                  <div className="p-1">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/4-masalah-1-e1601572418399-2-298x300.png?v=1680493531"
                      alt="sakit urat dan pinggang sembuh dengan saraf emas"
                      width={130}
                    />
                    <h3 className="mx-auto mb-6 sm:text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                      Sakit Urat / Pinggang
                    </h3>
                    <p className="mx-auto text-base leading-relaxed text-gray-700">
                      Anda menderita sakit sakit pinggang sehingga anda tak
                      boleh bermain dengan cucu?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionDerita;
