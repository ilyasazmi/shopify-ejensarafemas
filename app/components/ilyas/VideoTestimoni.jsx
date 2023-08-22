// import WistiaPlayer from './WistiaPlayer';
import { Link } from '@remix-run/react';
import Iframe from 'react-iframe';

const VideoTestimoni = ({ bgColor, btnLihatHarga }) => {

  const vidHeight = "193px";
  const videos = [
    {
      id: 2,
      videoId: "6l5mkiikyq",
      alt: "Bekas Pesakit Stroke - Fadzil",
      name: "Bekas Pesakit Stroke - Fadzil",
      description:
        "Sekarang sejak makan ubat Saraf Emas ni..saya dah boleh bangun berjalan walaupun menggunakan tongkat",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: 'wistia-player-container-2',
      playerColor: "fb6f92",
      height: `${vidHeight}`
    },
    {
      id: 3,
      videoId: "urxql4zlz3",
      alt: "Bekas Pesakit Gout & Saraf Sendi - Hj Zainal",
      name: "Bekas Pesakit Gout & Saraf Sendi - Hj Zainal",
      description:
        "Alhamdulillah, lepas makan Saraf Emas..hari pertama dah boleh jalan, dah boleh jogging..dah boleh pergi kedai beli sarapan... ",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: 'wistia-player-container-3',
      playerColor: "0077b6",
      height: `${vidHeight}`
    },
    {
      id: 4,
      videoId: "lm2einxs9s",
      alt: "Bekas Pesakit Carpal Tunnel - Cikgu Jasmi",
      name: "Bekas Pesakit Carpal Tunnel - Cikgu Jasmi",
      description:
        "Lepas amalkan saraf emas..saya dah boleh menggenggam handle motosikal dengan lebih lama berbanding sebelum ni...dan yang penting,sakit urat bahagian pinggang tidak lagi berpanjangan",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: 'wistia-player-container-4',
      playerColor: "2d6a4f",
      height: `${vidHeight}`
    },
    {
      id: 5,
      videoId: "hq5bh4gflq",
      alt: "Bekas Pesakit Saraf - Puan Hayati",
      name: "Bekas Pesakit Saraf - Puan Hayati",
      description:
        "Saya sakit saraf sampai tahap pakai pampers, mandi semua suami kena bantu papah saya ke bilik air",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: 'wistia-player-container-5',
      playerColor: "ffd500",
      height: `${vidHeight}`
    },
    {
      id: 7,
      videoId: "qp8hwv0d6i",
      alt: "Bekas Pesakit Saraf Pinggang - Hassan",
      name: "Bekas Pesakit Saraf Pinggang - Hassan",
      description:
        "Kerja saya sebagai buruh kasar, banyak angkat kerja berat-berat. Oleh kerana pekerjaaan saya, urat saraf saya jadi sakit-sakit, nak buat kerja rasa malas",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: 'wistia-player-container-7',
      playerColor: "d81159",
      height: `${vidHeight}`
    },
    {
      id: 8,
      videoId: "8583qnpxc3",
      alt: "Bekas Pesakit Gout, Tumit Mencucuk - Puan Salmi",
      name: "Bekas Pesakit Gout, Tumit Mencucuk - Puan Salmi",
      description:
        "Dulu saya sakit gout, urat kaki tumit mencucuk macam ada duri-duri kat kaki siap keluar air mata kalau nak bangun. Nak solat pun susah sebab sakit sangat",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: 'wistia-player-container-8',
      playerColor: "aa3e98",
      height: `${vidHeight}`
    },
    {
      id: 9,
      videoId: "f9w966stnb",
      alt: "Bekas Pesakit Gout, Lutut - Shahrudin",
      name: "Bekas Pesakit Gout, Lutut - Shahrudin",
      description:
        "Dulu lutut sakit, saya susah nak ke masjid sebab susah nak bergerak, lutut tak boleh lipat sampai Isteri saya tanya kenapa tak pergi solat jumaat",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: 'wistia-player-container-9',
      playerColor: "0d3b66",
      height: `${vidHeight}`
    },
    {
      id: 10,
      videoId: "kjjd7yfdxv",
      alt: "Bekas Pesakit Tulang Belakang - Zakaria",
      name: "Bekas Pesakit Tulang Belakang - Zakaria",
      description:
        "Saya bekerja sebagai security, bila duduk nak bangun kalau dulu badan rasa berat, sekarang bila nak bangun lebih mudah, bangun je. Sebelum ni nak tidur susah, tulang belakang sakit",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: 'wistia-player-container-10',
      playerColor: "3c6e71",
      height: `${vidHeight}`
    },
    {
      id: 11,
      videoId: "ls11m9u7gd",
      alt: "Bekas Pesakit Lutut - Azali",
      name: "Bekas Pesakit Lutut - Azali",
      description:
        "Dulu makan painkiller, sakit tetap tak hilang. Nak solat, lutut sakit nak lipat. Kerja construction, susah nak naik turun bangunan. Sekarang, Alhamdulillah, nak solat senang, nak naik turun bangunan senang",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: "wistia-player-container-11",
      playerColor: "f2b5d4",
      height: "365px"
    },
    {
      id: 6,
      videoId: "il4nna2z36",
      alt: "Pesakit Mild Stroke - Zainal",
      name: "Pesakit Mild Stroke - Zainal",
      description:
        "Kena mild stroke pada 24 ogos, Mula makan saraf emas pada 9 september 2022. Selepas 7 hari makan saya dah boleh berjalan semula. Alhamdulillah",
      disclaimer: "Disclaimer: Hasil bergantung individu",
      wrapper: 'wistia-player-container-6',
      playerColor: "ff595e",
      height: "365px"
    },
  ];

  return (
    <section className={`${bgColor}`}>
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
                <Link to={btnLihatHarga} className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
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
