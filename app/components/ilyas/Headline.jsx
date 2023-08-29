import { Link } from '@remix-run/react';
// import WistiaPlayer from './WistiaPlayer';
import Iframe from 'react-iframe';

const Headline = ({ bgColor }) => {

  const videoId = 'ow8he6t5ri';
  const playerColor = "22C55E";
  return (
    <div>
      <section className={`${bgColor}`}>
        <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 md:py-12 mx-auto">
          <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col sm:justify-center md:items-start md:mb-16 text-left">
              <h1 className="text-gray-900 md:text-4xl lg:text-5xl mb-8 font-extrabold leading-none tracking-tighter">
                Saraf Emas Melegakan Derita
              </h1>
              <ul className='list-disc ml-5 mb-8 leading-relaxed text-left text-gray-600 text-base'>
                <li>Sakit Pada Saraf</li>
                <li>Sakit sendi</li>
                <li>Sakit pinggang</li>
                <li>Angin Ahmar / Stroke</li>
                <li>Saraf Tersepit / slip disc</li>
                <li>Rasa kebas, semut, mencucuk-cucuk pada jari, kaki & tangan</li>
              </ul>
              <div className="max-w-7xl sm:flex mt-0 lg:mt-0">
                <div className="sm:mt-0 mt-3">
                  <Link
                    to="#ceritasaya"
                    className="hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500"
                  >
                    Baca Cerita Saya
                  </Link>
                </div>

                <div className="sm:mt-0 sm:ml-3 mt-3">
                  <Link to="#testimoni" className="hover:bg-gray-100 items-center block px-10 py-3.5 text-base font-medium text-center text-green-500 transition duration-500 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Lihat Testimoni
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-5/6 lg:max-w-lg xl:mt-0 w-full mt-12">
              <div className="relative">
                {/* <!-- Video --> */}
                <div className="relative z-10">
                  <Iframe
                    url={`https://fast.wistia.com/embed/iframe/${videoId}?videoFoam=false&playerColor=${playerColor}`}
                    width="100%"
                    height="285px"
                    position="relative"
                  />
                  {/* <WistiaPlayer
                    videoId="ow8he6t5ri"
                    wrapper="wistia-player-container-90"
                  /> */}
                  <p className="mb-4 text-base tracking-wide text-gray-800 text-center">
                    Zamri Jamal - Bekas Pesakit Slip Disc.
                  </p>
                </div>
                {/* <!-- Video --> */}

                {/* <div className="absolute -top-10 -left-24 w-full h-full bg-green-200 transform -rotate-6"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Headline;
