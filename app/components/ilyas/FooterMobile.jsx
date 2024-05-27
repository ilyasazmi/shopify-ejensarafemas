import { Link } from "@remix-run/react";

const FooterMobile = () => {
    return (
        <>
            {/* <section clasddName="bg-green-500 fixed bottom-32 right-2 z-20 p-1 rounded-lg border-2 border-green-50 md:hidden mb-2" > */}
            {/* <div className="grid grid-cols-1 gap-6 text-xs text-center p-2 "> */}
            <Link prefetch="viewport" className="text-white text-sm bg-green-500 p-2 h-10 w-20 mb-1 fixed bottom-32 right-2 z-20 rounded-lg border-2 border-green-50 md:hidden" to="https://api.whatsapp.com/send?phone=601169799840&text=%21ShareInfoSarafEmas">Whatsapp</Link>
            {/* </div> */}
            {/* </section> */}
            <section className="bg-gray-900 fixed bottom-2 right-2 z-20 p-1 rounded-lg border-2 border-green-50 md:hidden" >
                <div className="">
                    <div className="grid grid-cols-1 gap-6 text-xs text-center p-2">

                        <Link prefetch="viewport" className="text-white" to="#harga">Harga</Link>
                        <Link prefetch="viewport" className="text-white" to="#khasiat">Fungsi</Link>
                        <Link prefetch="viewport" className="text-white" to="#testimoni">Testimoni</Link>
                    </div>
                </div>
            </section>
        </>
    )
};

export default FooterMobile;
