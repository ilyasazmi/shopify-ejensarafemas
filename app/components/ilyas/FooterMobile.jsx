import { Link } from "@remix-run/react";

const FooterMobile = () => {
    return (
        <section className="bg-green-100 fixed bottom-2 right-2 z-20 p-1 rounded-lg border-2 border-green-50 md:hidden" >
            <div className="max-h-30">
                <div className="grid grid-cols-1 gap-6 text-sm text-center p-2">
                    <Link className="text-gray-900" to="https://api.whatsapp.com/send?phone=601169799840&text=%21ShareInfoSarafEmas">Whatsapp</Link>
                    <Link className="text-gray-900" to="#harga">Harga</Link>
                    <Link className="text-gray-900" to="#fungsi">Fungsi</Link>
                    <Link className="text-gray-900" to="#testimoni">Testimoni</Link>
                </div>
            </div>
        </section>
    )
};

export default FooterMobile;
