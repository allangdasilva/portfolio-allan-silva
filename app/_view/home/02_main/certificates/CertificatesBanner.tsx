import highlightBg from '@/app/images/highlight-bg.webp';
import highlight from '@/app/images/highlight.webp';

export default function CertificatesBanner({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      {/* first image */}
      <div
        style={{ backgroundImage: `url(${highlight.src})` }}
        className="z-2 w-8/10 relative aspect-video bg-contain"
      ></div>
      {/* second image */}
      <div
        style={{ backgroundImage: `url(${highlightBg.src})` }}
        className="z-1 max-h-4/10 bg-tertiary absolute inset-0 top-1/2 -translate-y-1/2 bg-cover"
      ></div>
    </div>
  );
}
