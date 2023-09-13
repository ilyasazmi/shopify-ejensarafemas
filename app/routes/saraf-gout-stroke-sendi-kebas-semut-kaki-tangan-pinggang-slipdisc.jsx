import CeritaSaya from '../components/ilyas/CeritaSaya';
import Fungsi from '../components/ilyas/Fungsi';
import Headline from '../components/ilyas/Headline';
import Khasiat from '../components/ilyas/Khasiat';
import SectionBody from '../components/ilyas/SectionBody';
import SectionDerita from '../components/ilyas/SectionDerita';
import SectionMemperkenalkan from '../components/ilyas/SectionMemperkenalkan';
import VideoTestimoni from '../components/ilyas/VideoTestimoni';
import Testimoni from '../components/ilyas/Testimoni';
import Faq from '../components/ilyas/Faq';
import Price from '../components/ilyas/Price';
import Awas from '../components/ilyas/Awas';
import Sah from '../components/ilyas/Sah';
import TakBolehMakan from '../components/ilyas/TakBolehMakan';
import Gerenti from '../components/ilyas/Gerenti';
import Ninjavan from '../components/ilyas/Ninjavan';
import Whatsapp from '../components/ilyas/Whatsapp';
import FooterMobile from '../components/ilyas/FooterMobile';

//SHOPIFY ANALYTICS
import { AnalyticsPageType } from '@shopify/hydrogen';
import { useLoaderData } from '@remix-run/react';
import { defer } from '@shopify/remix-oxygen';

export default function Landingpage() {
    const data = useLoaderData()

    return (
        <>
            <Headline bgColor="bg-green-100" />
            <SectionDerita bgColor="bg-green-50" />
            <CeritaSaya bgColor="bg-white" anchorText="ceritasaya" />
            <VideoTestimoni bgColor="bg-green-50" anchorText="testimoni" />
            <Testimoni bgColor="bg-white" />
            <SectionDerita bgColor="bg-green-100" />
            <SectionMemperkenalkan bgColor="bg-green-50" />
            <SectionBody bgColor="bg-white" />
            <Fungsi bgColor="bg-white" anchorText="khasiat" />
            <Khasiat bgColor="bg-green-50" />
            <Awas bgColor="bg-gray-100" anchorText="original" />
            <Sah bgColor="bg-white" />
            <TakBolehMakan bgColor="bg-green-50" />
            <Gerenti bgColor="bg-white" anchorText="jaminan" />
            <Ninjavan bgColor="bg-red-50" />
            <Faq bgColor="bg-gray-100" />
            <Price bgColor="bg-white" anchorText="harga" />
            <Whatsapp bgColor="bg-green-50" anchorText="whatsapp" />
            <FooterMobile />
        </>
    );
};

export async function loader() {
    return defer({
        analytics: {
            pageType: AnalyticsPageType.page,
        },
    });
}
