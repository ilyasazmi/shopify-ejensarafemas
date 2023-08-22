import React from 'react';
import {Link} from '@remix-run/react';

// START_CODE
const StyledBody = ({children, bgColor}) => {
  return (
    <>
      <section className={`${bgColor}`}>
        <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
          <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
            <div className="lg:w-2/5 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
              <h3 className="text-xl font-bold mb-6 text-green-500">
                Sejak 2 Bulan Pelancaran Saraf Emas
              </h3>
              <h2 className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
                10,102 Unit Telah Terjual
              </h2>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
                Bertahun lama di pasaran. Ramai pelanggan berulang.
              </p>
              <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
                <div className="sm:mt-0 mt-3">
                  <Link
                    to="https://sarafemas.net/67359998259/checkouts/ce329580d2129dc73cfbb04ddfe256a2?channel=buy_button"
                    // Use the Tailwind CSS classes to style the link
                    className="items-center px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500"
                    target="_blank"
                  >
                    Lihat Harga
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 xl:mt-0 w-full mt-12">
              <div className="relative items-center w-full px-5 py-12">
                <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(72 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(144 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(216 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(288 12 12)"
                        ></line>
                      </svg>
                    </div>
                    <h3 className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                      Core Themeptation
                    </h3>
                    <p className="mx-auto text-base leading-relaxed text-gray-700">
                      Free and Premium themes, UI Kit's, templates and landing
                      pages built with Tailwind CSS, HTML &amp; Next.js.
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(72 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(144 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(216 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(288 12 12)"
                        ></line>
                      </svg>
                    </div>
                    <h3 className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                      Plugin Development
                    </h3>
                    <p className="mx-auto text-base leading-relaxed text-gray-700">
                      Free and Premium themes, UI Kit's, templates and landing
                      pages built with Tailwind CSS, HTML &amp; Next.js.
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(72 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(144 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(216 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(288 12 12)"
                        ></line>
                      </svg>
                    </div>
                    <h3 className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                      Core Themeptation
                    </h3>
                    <p className="mx-auto text-base leading-relaxed text-gray-700">
                      Free and Premium themes, UI Kit's, templates and landing
                      pages built with Tailwind CSS, HTML &amp; Next.js.
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(72 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(144 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(216 12 12)"
                        ></line>
                        <line
                          x1="3.6"
                          y1="15"
                          x2="14.15"
                          y2="15"
                          transform="rotate(288 12 12)"
                        ></line>
                      </svg>
                    </div>
                    <h3 className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                      Core Themeptation
                    </h3>
                    <p className="mx-auto text-base leading-relaxed text-gray-700">
                      Free and Premium themes, UI Kit's, templates and landing
                      pages built with Tailwind CSS, HTML &amp; Next.js.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StyledBody;
