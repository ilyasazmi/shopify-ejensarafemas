import { Link } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';

const Sah = ({ bgColor }) => {
    return (
        <div>
            <section className={`${bgColor}`}>
                <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
                    <div className="2xl:max-w-7xl flex flex-wrap items-start mx-auto">
                        <div className="lg:w-2/5 lg:pr-24 flex flex-col items-start md:mb-16 text-left">
                            <h3 className="text-xl font-bold mb-6 text-green-500 capitalize">
                                Pastikan Original sebelum beli
                            </h3>
                            <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                                Sahkan Saraf Emas Anda!
                            </h2>
                            <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
                                HQ Saraf Emas tidak lagi jual di <span className="font-bold">Shopee atau pun di Lazada.</span> Pastikan anda membeli dengan website yang disahkan oleh HQ Saraf Emas sahaja.
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
                            <div className="relative items-center w-full md:px-5 md:py-12">
                                <div className="grid grid-cols-2 gap-4">
                                    <Image
                                        src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/step-1-min-500.webp?v=1692623999"
                                        alt="saraf emas original dan tiruan"
                                        width={600}
                                        className="mb-4"
                                    />
                                    <Image
                                        src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/step-2-min-500.webp?v=1692624000"
                                        alt="saraf emas original dan tiruan"
                                        width={600}
                                        className="mb-4"
                                    />
                                    <Image
                                        src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/step-3-min-500.webp?v=1692623999"
                                        alt="saraf emas original dan tiruan"
                                        width={600}
                                        className="mb-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Sah;
