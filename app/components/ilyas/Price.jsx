import { Image } from '@shopify/hydrogen';

const Price = ({ bgColor }) => {
    return <div>
        <section className={`${bgColor}`}>
            <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
                <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
                    <div className="lg:w-2/5 lg:pr-24 flex flex-col items-start md:mb-16 text-left">
                        <h3 className="text-xl font-bold mb-6 text-green-500 capitalize">
                            Pelbagai Pakej Jimat
                        </h3>
                        <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                            Beli Banyak, Jimat Banyak
                        </h2>
                        <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
                            Belian secara COD (barang sampai baru bayar) tersedia. Delivery by Ninjavan.
                        </p>
                    </div>
                    <div className="lg:w-3/5 xl:mt-0 w-full mt-12">
                        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-9'>

                            <div className="relative items-center w-full text-center p-4">
                                <h2 className="text-gray-900 md:text-2xl lg:text-4xl text-3xl font-extrabold leading-none tracking-tighter">
                                    1 Botol
                                </h2>
                                <h3 className="text-gray-900 md:text-2xl lg:text-2xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                                    RM120
                                </h3>
                                <h2 className="text-green-500 md:text-xl lg:text-xl mb-8 font-bold leading-none tracking-tighter underline">
                                    Guna 1 Bulan
                                </h2>
                                <Image
                                    src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/Product_1.png?v=1680492094"
                                    alt="saraf emas yang mujarab merawat pelbagai penyakit"
                                    width={85}
                                    height={'auto'}
                                    className='mx-auto'
                                />
                                <ul className='mb-8 text-base leading-relaxed text-left text-gray-600 list-decimal'>
                                    <li>Harga: RM120 Untuk 1 Botol</li>
                                    <li>Pos Percuma (Ninjavan)</li>
                                    <li>COD by Ninjavan</li>
                                    <li>COD fee <span className="italic">+rm10 (Ninjavan)</span></li>
                                </ul>
                                <div className='mt-4 items-end h-10'>
                                    <button className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                                        Beli 1 Botol
                                    </button>


                                </div>
                            </div>
                            <div className="relative items-center w-full text-center bg-green-100 p-10">
                                <h2 className="text-green-500 md:text-2xl lg:text-4xl text-3xl font-extrabold leading-none tracking-tighter">
                                    3 Botol
                                </h2>
                                <h3 className="text-green-500 md:text-2xl lg:text-2xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                                    RM300
                                </h3>
                                <h2 className="text-gray-600 md:text-xl lg:text-xl mb-8 font-bold leading-none tracking-tighter underline">
                                    Guna 3 Bulan
                                </h2>
                                <Image
                                    src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/Harga_3.png?v=1691775491"
                                    alt="saraf emas yang mujarab merawat pelbagai penyakit"
                                    width={500}
                                    height={'auto'} className='mx-auto'
                                />
                                <ul className='mb-8 text-base leading-relaxed text-left text-gray-600 list-decimal'>
                                    <li>Harga: RM300 Untuk 3 Botol</li>
                                    <li>Pos Percuma (Ninjavan)</li>
                                    <li>COD by Ninjavan</li>
                                    <li>COD Percuma</li>
                                </ul>
                                <div className='mt-4 items-end'>
                                    <button className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                                        Beli 3 Botol
                                    </button>

                                </div>
                            </div>
                            <div className="relative items-center w-full text-center p-4">
                                <h2 className="text-gray-900 md:text-2xl lg:text-4xl text-3xl font-extrabold leading-none tracking-tighter">
                                    5 Botol
                                </h2>
                                <h3 className="text-gray-900 md:text-2xl lg:text-2xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                                    RM475
                                </h3>
                                <h2 className="text-green-500 md:text-xl lg:text-xl mb-8 font-bold leading-none tracking-tighter underline">
                                    Guna 5 Bulan
                                </h2>
                                <Image
                                    src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/Harga_5.png?v=1680492779"
                                    alt="saraf emas yang mujarab merawat pelbagai penyakit"
                                    width={500}
                                    height={'auto'}
                                    className='mx-auto'
                                />
                                <ul className='mb-8 text-base leading-relaxed text-left text-gray-600 list-decimal'>
                                    <li>Harga: RM475 Untuk 5 Botol</li>
                                    <li>Pos Percuma (Ninjavan)</li>
                                    <li>COD by Ninjavan</li>
                                    <li>COD Percuma</li>
                                </ul>
                                <div className='mt-4 items-end'>
                                    <button className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                                        Beli 5 Botol
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default Price;
