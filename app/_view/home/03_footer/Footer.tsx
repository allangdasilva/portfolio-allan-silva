import AllanCodingLogo from '@/app/_components/svgs/AllanCodingLogoSvg';
import { footerContactCopy, footerSocialCopy } from '@/app/data/footer';
import FooterList from './FooterList';

export default function Footer() {
  const contactCopy = footerContactCopy;
  const socialCopy = footerSocialCopy;

  return (
    <footer className="bg-tertiary px-base text-primary relative flex min-h-dvh pb-6 pt-16 lg:pt-24">
      <div className="max-w-component  flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-4 lg:gap-y-6">
            <AllanCodingLogo />
            <span className="type-xs opacity-50">© 2026 Allan Silva</span>
          </div>

          <div className="flex flex-col gap-y-5 lg:gap-y-8">
            <FooterList copy={contactCopy} />
            <FooterList copy={socialCopy} />
          </div>
        </div>

        <div>
          <p className="type-2xl relative text-justify uppercase [text-align-last:justify]">
            Thanks for visiting
          </p>
        </div>
      </div>
    </footer>
  );
}
