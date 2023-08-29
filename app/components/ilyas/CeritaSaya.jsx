import { Link } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';
// import WistiaPlayer from './WistiaPlayer';
import Iframe from 'react-iframe';

const CeritaSaya = ({ bgColor, anchorText }) => {
  const videoId = 'ow8he6t5ri';
  const playerColor = "22C55E";

  return (
    <div>
      <section className={`${bgColor}`} id={anchorText}>
        <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
          <div className="2xl:max-w-7xl flex flex-wrap items-start mx-auto">
            <div className="lg:w-2/5 lg:pr-24 md:mb-0 flex flex-col items-start md:mb-16 text-left">
              <h2 className="text-gray-900 md:text-5xl lg:text-6xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                Cerita Saya
              </h2>
              <p className="bg-green-50 p-4 mb-8 text-base leading-relaxed text-left text-gray-600 capitalize italic">
                "Saya nekad jual saraf emas setelah pulih, selepas sekian lama
                saya terlantar di hospital."
              </p>
              <Image
                src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/signature-1999x2048.jpg?v=1680580225"
                alt="zamri jamal"
                width={500}
              />
              <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
                <div className="hidden md:flex mt-3">
                  <Link to="#harga" className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                    Lihat Harga
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 xl:mt-0 w-full mt-0">
              <div className="relative w-full md:px-5 md:py-12">
                <div className="grid w-full grid-cols-none mx-auto">
                  <div className="p-6 text-base">
                    <h3 className="text-2xl font-extrabold mb-6 text-gray-900 capitalize">
                      Kenapa saya jual saraf emas?
                    </h3>
                    <p>
                      Hampir 3 bulan saya terlantar di hospital selepas doktor
                      mengesahkan saya mengalami sakit &nbsp;
                      <span className="font-bold">slip disc (l4, L5, S1) </span>
                      menyebabkan saya lumpuh dari pinggang hingga ke hujung
                      kaki.
                    </p>

                    <h3 className="pt-4 text-xl font-bold mb-6 text-gray-900 capitalize">
                      Tahap saya kritikal pada waktu itu.
                    </h3>
                    <p>
                      Punca rezeki saya hilang kerana tidak lagi mampu bekerja.
                    </p>
                    <p>
                      Doktor menyarankan saya untuk buat pembedahan jika tidak,
                      saya akan lumpuh seumur hidup. <br />
                      <br />
                      Saya menolak kerana kos pembiayaan yang tinggi. Saya cuma
                      rakyat marhaen yang bekerja biasa.
                      <br />
                      <br />
                      Namun hati ini meraung mahu diri ini kembali normal.
                      <br />
                      <br />
                      Saya nak cari rezeki untuk keluarga. Selepas menolak
                      saranan doktor. <br />
                      <br />
                      Saya berikhtiar cara lain. Apa yang saya katakan pada
                      doktor pada waktu itu "Tak apalah doc, selagi ada tulang 4
                      kerat ini, saya berikhtiar cara lain yang saya mampu."
                    </p>
                    <h3 className="pt-4 text-xl font-bold mb-6 text-gray-900 capitalize">
                      Tiba-tiba
                    </h3>
                    <p>
                      Saya diperkenalkan oleh kawan ubat ajaib ini. <br />
                      <br />
                      Pada mulanya saya ragu nak makan kerana telah
                      bermacam-macam produk telah saya makan. <br />
                      <br />
                      Semua produk yang ada pada market waktu itu telah saya
                      cuba. <br />
                      <br />
                      Katakan sahaja, apa produk yang belum.
                      <br />
                      <br />
                      Tidak ada yang berhasil.
                    </p>
                    <h3 className="pt-4 text-xl font-bold mb-6 text-gray-900 capitalize">
                      Saya Berada dalam hidup atau mati.
                    </h3>
                    <p>
                      Malam itu, saya nekad. 3 bulan terlantar sakit.
                      <br />
                      <br />
                      Sama ada hidup dalam kelumpuhan atau ....
                      <br />
                      <br />
                      Saya makan..
                    </p>
                    <h3 className="pt-4 text-xl font-bold mb-6 text-gray-900 capitalize">
                      Selepas seminggu pertama,
                    </h3>
                    <p>
                      Perubahan yang ketara saya rasa pada badan. <br />
                      <br />
                      Rasa sakit semakin hilang Apabila berjalan, kaki tidak
                      lagi perlu saya heret.
                    </p>
                    <h3 className="pt-4 text-xl font-bold mb-6 text-gray-900 capitalize">
                      Setelah 6 bulan berlalu,
                    </h3>
                    <p>
                      Terus saya amalkan SARAF EMAS SELAMA 6 bulan.
                      <br />
                      <br />
                      Saya kembali ke hospital untuk buat medical checkup.
                      <br />
                      <br />
                      Setelah check MRI, doktor mengesahkan sistem badan saya
                      telah normal. <br />
                      <br />
                      Doktor kehairanan. Saya pun pulang daripada hospital.{' '}
                      <br />
                      <br />
                      Sewaktu saya memandu pulang, Saya menangis dalam gembira.
                    </p>
                    <h3 className="pt-4 text-xl font-bold mb-6 text-gray-900 capitalize">
                      Saya bernazar
                    </h3>
                    <p>
                      "Akan kubantu 1000 manusia yang sedang dalam kesakitan.
                      <br />
                      <br />
                      Sesungguhnya mereka juga ingin mencari rezeki untuk
                      keluarga mereka." <br />
                      <br />
                      Kini, saya sudah boleh cari rezeki untuk keluarga dan
                      hidup lebih gembira.
                    </p>
                    <div className="relative py-4">
                      <Iframe
                        url={`https://fast.wistia.com/embed/iframe/${videoId}?videoFoam=false&playerColor=${playerColor}`}
                        width="100%"
                        height="250px"
                        position="relative"
                      />
                      {/* <WistiaPlayer
                        videoId="ow8he6t5ri"
                        wrapper="wistia-player-container-30"
                      /> */}
                      <p className="mb-4 text-base tracking-wide text-gray-800 text-center">
                        Zamri Jamal - Bekas Pesakit Slip Disc & Founder Saraf
                        Emas
                      </p>
                    </div>
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

export default CeritaSaya;
