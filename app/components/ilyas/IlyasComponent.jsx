import CeritaSaya from './CeritaSaya';
import Fungsi from './Fungsi';
import Headline from './Headline';
import Khasiat from './Khasiat';
import SectionBody from './SectionBody';
import SectionDerita from './SectionDerita';
import SectionMemperkenalkan from './SectionMemperkenalkan';
import VideoTestimoni from './VideoTestimoni';
import Testimoni from './Testimoni';
import Faq from './Faq';
import Price from './Price';
import Awas from './Awas';
import Sah from './Sah';
import TakBolehMakan from './TakBolehMakan';
import Gerenti from './Gerenti';
import Ninjavan from './Ninjavan';
import Whatsapp from './Whatsapp';
import FooterMobile from './FooterMobile';

const IlyasComponent = () => {


  return (
    <>
      <Headline bgColor="bg-green-100" />
      <SectionDerita bgColor="bg-green-50" />
      <CeritaSaya bgColor="bg-white" anchorText="ceritasayadf" />
      <VideoTestimoni bgColor="bg-green-50" anchorText="testimoni" />
      <Testimoni bgColor="bg-white" />
      <SectionDerita bgColor="bg-green-100" />
      <SectionMemperkenalkan bgColor="bg-green-50" />
      <SectionBody bgColor="bg-white" />
      <Fungsi bgColor="bg-white" anchorText="khasiat" />
      <Khasiat bgColor="bg-green-50" />
      {/* <Awas bgColor="bg-gray-100" anchorText="original" /> */}
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

export default IlyasComponent;

export async function loader() {
  return defer({
    product,
    analytics: {
      pageType: 'page',
    }
  });
}
