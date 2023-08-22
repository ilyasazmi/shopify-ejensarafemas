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
// import StyledBody from './StyledBody';

const IlyasComponent = () => {
  const linkHarga = 'https://sarafemas.net/67359998259/checkouts/8ad8d7792bf169ddeb1e02314a4661a0?channel=buy_button';
  return (
    <>
      <Headline bgColor="bg-green-100" />
      <SectionDerita bgColor="bg-green-50" />
      <CeritaSaya bgColor="bg-white" />
      <VideoTestimoni bgColor="bg-green-50" btnLihatHarga={linkHarga} />
      <Testimoni bgColor="bg-white" />
      <SectionMemperkenalkan bgColor="bg-green-50" />
      <SectionBody bgColor="bg-white" />
      <Fungsi bgColor="bg-white" />
      <Khasiat bgColor="bg-green-50" />
      <Awas bgColor="bg-gray-100" />
      <Sah bgColor="bg-white" />
      <TakBolehMakan bgColor="bg-green-50" />
      <Gerenti bgColor="bg-white" />
      <Ninjavan bgColor="bg-red-50" />
      <Faq bgColor="bg-green-50" />
      <Price bgColor="bg-white" />
      <Whatsapp bgColor="bg-green-50" />

      {/* reserve component */}
      {/* <StyledBody bgColor="bg-green-50" /> */}
    </>
  );
};

export default IlyasComponent;
