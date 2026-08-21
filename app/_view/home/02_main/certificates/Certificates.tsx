import TitleSection from '@/app/_components/common/TitleSection';
import TextFade from '@/app/_components/motion/TextFade';
import { certificatesCopy } from '@/app/data/certificates';
import CertificatesBanner from './CertificatesBanner';
import CertificatesList from './CertificatesList';

export default function Certificates() {
  const half = certificatesCopy.length / 2;
  const copyLeft = certificatesCopy.slice(0, half);
  const copyRight = certificatesCopy.slice(-half);

  return (
    <section className="bg-primary px-base lg:pt-31 lg:pb-47 relative py-24">
      {/* wrapper max-w */}
      <div className="max-w-component gap-x-base grid grid-cols-4 lg:grid-cols-12">
        {/* title */}
        <div className="col-span-full col-start-3 mb-3 lg:col-start-7">
          <TextFade direction="up">
            <TitleSection className="type-base text-secondary">
              Certificações
            </TitleSection>
          </TextFade>
        </div>

        {/* list left */}
        <div className="col-span-full mb-6 lg:col-end-4 lg:row-start-2 lg:mb-0 lg:self-center">
          <CertificatesList copy={copyLeft} isLeft={true} />
        </div>

        {/* banner */}
        <CertificatesBanner className="relative col-span-full mb-6 flex items-center justify-center lg:col-start-4 lg:col-end-10 lg:row-start-2 lg:mb-0" />

        {/* list right */}
        <div className="col-span-full place-self-end lg:col-start-10 lg:self-center">
          <CertificatesList copy={copyRight} />
        </div>
      </div>
    </section>
  );
}
