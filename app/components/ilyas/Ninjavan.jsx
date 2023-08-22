import { Image } from '@shopify/hydrogen';

const Ninjavan = ({ bgColor }) => {
    return (
        <div>
            <section className={`${bgColor}`}>
                <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
                    <div className="2xl:max-w-7xl flex flex-wrap items-start mx-auto">
                        <div className="lg:w-2/5 lg:pr-24 md:mb-0 flex flex-col items-start md:mb-16 text-left">
                            <h3 className="text-xl font-bold mb-6 text-green-500 capitalize">
                                Beli Dengan Ninjavan
                            </h3>
                            <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                                Penghantaran Pantas Ninjavan
                            </h2>
                            <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
                                <ul className='ml-5 list-disc'>
                                    <li className='hover:font-semibold'>
                                        <span className='font-bold'>Kami Postage Pukul 3 Setiap Hari.</span>
                                        <p>Ya, setiap hari kami pos untuk pastikan parcel anda cepat sampai.</p>
                                    </li>
                                    <li className='hover:font-semibold'>
                                        <span className='font-bold'>Parcel Sampai 3 Hari.</span>
                                        <p>Kami hantar dengan pantas. Ramai pelanggan suka dengan kami</p>
                                    </li>
                                    <li className='hover:font-semibold'>
                                        <span className='font-bold'>C.O.D Semenanjung Malaysia.</span>
                                        <p>Bayaran secara barang sampai baru anda bayar tersedia. Lebih selamat untuk anda yang baru pertama kali nak beli.</p>
                                        <p className='italic text-sm pt-2'>Sabah, Sarawak, Labuan coming soon</p>
                                    </li>
                                </ul>
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
                                    src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/78020480282-29-750.webp?v=1692625947"
                                    alt="saraf emas original dan tiruan"
                                    width={500}
                                    className="mb-4"
                                />
                            </div>
                            <div className="bg-red-100 p-10">
                                <h2 className="text-gray-900 md:text-xl lg:text-xl mb-8 font-extrabold leading-none tracking-tighter">
                                    How To Buy Cash On Delivery - Barang Sampai Baru Bayar
                                </h2>
                                <ul className='list-decimal'>
                                    <li>Pilih Pakej</li>
                                    <li>Pilih Negeri di laman checkout.</li>
                                    <li><span className='italic'>Jika negeri anda layak,</span> maka anda akan lihat pilihan bayaran <span className='font-bold'>Cash On Delivery (C.O.D)</span></li>
                                    <p className="italic text-sm">Penting: Buat masa ini, Sabah, Sarawak & Labuan belum tersedia C.O.D. Coming soon </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Ninjavan;
