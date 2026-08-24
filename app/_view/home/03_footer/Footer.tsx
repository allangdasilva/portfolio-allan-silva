import BgNoise from '@/app/_components/common/BgNoise';
import AllanCodingLogo from '@/app/_components/svgs/AllanCodingLogoSvg';
import { footerContactCopy, footerSocialCopy } from '@/app/data/footer';
import FooterList from './FooterList';

export default function Footer() {
  const contactCopy = footerContactCopy;
  const socialCopy = footerSocialCopy;

  return (
    <footer className="bg-tertiary px-base fixed left-0 top-0 z-0 flex min-h-dvh w-full ">
      {/* noise */}
      <BgNoise />

      {/* wrapper max-w */}
      <div className="max-w-component relative flex flex-1 flex-col justify-between pb-6 pt-16 lg:pt-24">
        {/* logo */}
        <div className="top-base absolute">
          <AllanCodingLogo />
        </div>

        {/* copy / contact */}
        <div className="flex justify-between">
          <span className="type-xs text-primary opacity-50">
            © 2026 Allan Coding
          </span>

          <div className="flex flex-col items-end gap-y-5 lg:gap-y-8">
            <FooterList copy={contactCopy} />
            <FooterList copy={socialCopy} />
          </div>
        </div>

        {/* high-light */}
        <div>
          <p className="type-2xl text-primary relative text-justify uppercase [text-align-last:justify]">
            Thanks for visiting
          </p>
        </div>
      </div>
    </footer>
  );
}
