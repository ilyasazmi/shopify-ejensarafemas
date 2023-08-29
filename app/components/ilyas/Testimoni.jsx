import { Link } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';

const Testimoni = ({ bgColor }) => {
  const images = [
    {
      id: 1,
      url: 'https://cdn.shopify.com/s/files/1/0673/5999/8259/files/T_pekerja_kilang.jpg?v=1680516085',
      alt: 'testimoni pelanggan saraf emas yg puas hati',
    },
    {
      id: 2,
      url: 'https://cdn.shopify.com/s/files/1/0673/5999/8259/files/T_pekerja_swasta.jpg?v=1680516085',
      alt: 'testimoni pelanggan saraf emas yg puas hati',
    },
    {
      id: 3,
      url: 'https://cdn.shopify.com/s/files/1/0673/5999/8259/files/T_Driver_Tanker.jpg?v=1680516084',
      alt: 'testimoni pelanggan saraf emas yg puas hati',
    },
    {
      id: 4,
      url: 'https://cdn.shopify.com/s/files/1/0673/5999/8259/files/T_Suri_Rumah.jpg?v=1680516084',
      alt: 'testimoni pelanggan saraf emas yg puas hati',
    },
    {
      id: 5,
      url: 'https://cdn.shopify.com/s/files/1/0673/5999/8259/files/T_Suri_Rumah2.jpg?v=1680516085',
      alt: 'testimoni pelanggan saraf emas yg puas hati',
    },
    {
      id: 6,
      url: 'https://cdn.shopify.com/s/files/1/0673/5999/8259/files/T_Kerja_Kantin.jpg?v=1680516084',
      alt: 'testimoni pelanggan saraf emas yg puas hati',
    },
  ];
  return (
    <section className={`${bgColor}`}>
      <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
        <div className="2xl:max-w-7xl flex flex-wrap items-start mx-auto">
          <div className="lg:w-2/5 lg:pr-24 flex flex-col items-start md:mb-16 text-left">
            <h3 className="text-xl font-bold mb-6 text-green-500 capitalize">
              Kami tambah lagi testimoni
            </h3>
            <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
              Lagi Testimoni Pelanggan...
            </h2>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
              Saraf Emas Mampu Membantu Melegakan Penderitaan Dengan Kadar
              Segera.
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
            <div className="relative items-start w-full md:px-5 md:py-12">
              <div className="grid md:grid-cols-2 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="mx-auto py-4 px-4">
                    <Image
                      src={image.url}
                      width={300}
                      height={300}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
