import {Link} from '@remix-run/react';
import WistiaPlayer from './WistiaPlayer';

const Headline = () => {
  return (
    <div>
      <section className="bg-green-50">
        <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
          <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
              <h1 className="text-gray-800 md:text-4xl lg:text-6xl mb-8 font-extrabold leading-none tracking-tighter">
                Saraf Emas Membantu Melegakan
              </h1>
              <p className="mb-8 leading-relaxed text-left text-gray-600 text-base">
                Sakit Pada Saraf, Sendi, Pinggang, Angin Ahmar, Saraf Tersepit,
                Slip Disc & Juga Untuk Bantu Hilangkan Rasa Kebas, Semut & Sakit
                Mencucuk-cucuk Pada Jari Kaki & Tangan
              </p>
              <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
                <div className="sm:mt-0 mt-3">
                  <Link
                    to="https://sarafemas.net/67359998259/checkouts/ea4cffc99ff34bbc141913454a7ba7d1?channel=buy_button"
                    className="hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500"
                  >
                    Lihat Pakej Harga
                  </Link>
                </div>
                <div className="sm:mt-0 sm:ml-3 mt-3">
                  <button className="hover:bg-gray-100 items-center block px-10 py-3.5 text-base font-medium text-center text-green-500 transition duration-500 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Lihat Testimoni
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-5/6 lg:max-w-lg xl:mt-0 w-full mt-12">
              <div className="relative">
                {/* <!-- Video --> */}
                <div className="relative z-10">
                  <WistiaPlayer
                    videoId="ow8he6t5ri"
                    wrapper="wistia-player-container-1"
                  />
                  <p className="mb-4 text-base tracking-wide text-gray-800 text-center">
                    Zamri Jamal - Bekas Pesakit Slip Disc.
                  </p>
                </div>
                {/* <!-- Video --> */}

                <div className="absolute -top-10 -left-24 w-full h-full bg-green-200 transform -rotate-6 z-index"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Headline;
