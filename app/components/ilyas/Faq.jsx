import { Link } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';

const Faq = ({ bgColor }) => {
    return <div>
        <section className={`${bgColor}`}>
            <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
                <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
                    <div className="lg:w-2/5 lg:pr-24 flex flex-col items-start md:mb-16 text-left">
                        <h3 className="text-xl font-bold mb-6 text-green-500 capitalize">
                            Soalan Lazim
                        </h3>
                        <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                            FAQ
                        </h2>
                        <ul className='ml-5 list-decimal mb-8 text-base leading-relaxed text-left text-gray-600'>
                            <li className=''>
                                <span className='font-bold'>Sebotol Ada Berapa Isi?</span>
                                <p>24 packet dalam 1 botol.</p>
                            </li>
                            <li className=''>
                                <span className='font-bold'>Berapa Lama Boleh Guna 1 Botol?</span>
                                <p>Boleh guna hingga 1 bulan jika makan sehari sekali.</p>
                            </li>
                            <li className=''>
                                <span className='font-bold'>Bagaimana Bentuk Isi Dalam?</span>
                                <p>Boleh lihat gambar yang disertakan</p>
                            </li>
                            <li className=''>
                                <span className='font-bold'>Cara makan macam macam?</span>
                                <p>Mudah Sahaja. Telan sekaligus atau makan satu per satu & minum air suam. InsyaAllah sakit akan beransur sembuh.</p>
                            </li>
                        </ul>
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
                            <Image
                                src="https://cdn.shopify.com/s/files/1/0673/5999/8259/files/ori-ubat-750.webp?v=1692622643"
                                alt="saraf emas yang mujarab merawat pelbagai penyakit"
                                width={600}
                                height={'auto'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default Faq;
