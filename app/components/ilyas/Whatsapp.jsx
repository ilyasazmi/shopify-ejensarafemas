import { Link } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';

const Whatsapp = ({ bgColor, anchorText }) => {
    return (
        <section className={`${bgColor}`} id={anchorText}>
            <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
                <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
                    <div className="lg:w-2/5 lg:pr-24 flex flex-col items-start md:mb-16 text-left">
                        <h3 className="text-xl font-bold mb-6 text-green-500 capitalize">
                            Lebih Suka Membeli Di Whatsapp?
                        </h3>
                        <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                            Whatsapp Kami
                        </h2>
                        <p className="inline md:hidden mb-8 text-base leading-relaxed text-left text-gray-600">
                            Klik butang dibawah untuk terus chat dengan kami di Whatsapp
                        </p>
                        {/* <div className="inline md:hidden mt-1">
                            <Link to="https://api.whatsapp.com/send?phone=601169799840&text=%21ShareInfoSarafEmas" className="w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                                011-6979 9840
                            </Link>
                        </div> */}
                        <p className="hidden md:inline mb-8 text-base leading-relaxed text-left text-gray-600">
                            Imbas Kod QR whatsapp untuk terus chat dengan kami di Whatsapp
                        </p>
                        {/* <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
                                <div className="sm:mt-0 mt-3">
                                    <button className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                                        Lihat Harga
                                    </button>
                                </div>
                            </div> */}
                    </div>
                    <div className="lg:w-3/5 xl:mt-0 w-full md:mt-12">
                        <div className="relative items-center w-full md:px-5 md:py-12">
                            {/* <div className="grid grid-cols-2 gap-10">
                                    <div>
                                        <Image
                                            src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/qr-code--4--300.webp?v=1692628873"
                                            alt="whatsapp saraf emas"
                                            width={250}
                                            className="mb-4"
                                        />
                                        <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
                                            Imbas Kod QR whatsapp untuk terus chat dengan kami di Whatsapp
                                        </p>
                                    </div>
                                    <div>
                                        <Image
                                            src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/seller-300x300-1.png?v=1692628873"
                                            alt="whatsapp saraf emas"
                                            width={250}
                                            className="mb-4"
                                        />
                                    </div>
                                </div> */}

                            <div className="md:bg-green-100 p-5 grid sm:grid-cols-1 md:grid-cols-3 items-center justify-center">
                                <div>
                                    <Image
                                        src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/seller-300x300-1.png?v=1692628873"
                                        alt="whatsapp saraf emas"
                                        width={200}
                                    />
                                </div>
                                <div>
                                    <h2 className="text-gray-900 md:text-xl lg:text-xl mb-8 font-extrabold leading-none tracking-tighter">
                                        ZAMRI JAMAL
                                    </h2>
                                    <ul className='list-none'>
                                        <li>Founder Saraf Emas</li>
                                        <li>Tel : 011-6979 9840</li>
                                        <p className="italic text-sm">Respon kami dalam 5 minit</p>
                                    </ul>
                                </div>
                                <div className="hidden md:block">
                                    <Image
                                        src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/qr-code--4--300.webp?v=1692628873"
                                        alt="whatsapp saraf emas"
                                        width={150}
                                    />
                                </div>
                                <div className="block md:hidden mt-3">
                                    <Link to="https://api.whatsapp.com/send?phone=601169799840&text=%21ShareInfoSarafEmas" className="w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500">
                                        whatsapp 011-6979 9840
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Whatsapp;
