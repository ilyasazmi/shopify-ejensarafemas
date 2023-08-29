// import WistiaPlayer from './WistiaPlayer';
import { Link } from '@remix-run/react';
import Iframe from 'react-iframe';
import { videos } from './constant/data';

const VideoTestimoni = ({ bgColor, anchorText }) => {

  return (
    <section className={`${bgColor}`} id={anchorText}>
      <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
        <div className="2xl:max-w-7xl flex flex-wrap items-start mx-auto">
          <div className="lg:w-2/5 lg:pr-24 flex flex-col items-start md:mb-16 text-left">
            {/* <div className="grid grid-cols-3 gap-4">
              {videos.map((item) => (
                <div key={item.id}>
                  <WistiaPlayer videoId={item.videoId} wrapper={item.wrapper} />
                </div>
              ))}
            </div> */}
            <h3 className="text-xl font-bold mb-6 text-green-500 capitalize">
              Ribuan Orang Puas Hati
            </h3>
            <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
              Testimoni Saraf Emas
            </h2>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
              Ribuan testimonial dari pelanggan yang telah berjaya sembuh dengan saraf emas. Ini antara yang sempat kami rakamkan.
            </p>
            <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
              <div className="hidden md:flex mt-3">
                <Link to="#harga" className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                  Lihat harga
                </Link>
              </div>
            </div>

          </div>
          <div className="lg:w-3/5 xl:mt-0 w-full md:mt-12">
            <div className="relative items-center w-full md:px-5 md:py-12">
              <div className="grid md:grid-cols-2 gap-4">
                {videos.map((video) => (
                  <div key={video.id} className="mx-auto py-4 px-4">
                    <Iframe
                      url={`https://fast.wistia.com/embed/iframe/${video.videoId}?videoFoam=false&playerColor=${video.playerColor}`}
                      width="100%"
                      height={video.height}
                      position="relative"
                    />
                    <p className='font-medium mt-2'>{video.name}</p>
                    <p className='font-normal italic text-sm mt-2'>"{video.description}"</p>
                    <p className='text-xs text-gray-500 mt-2'>{video.disclaimer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default VideoTestimoni;
