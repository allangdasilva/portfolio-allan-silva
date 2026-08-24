import highlight from '@/app/images/highlight.webp';

export default function CertificatesBanner({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      {/* first image */}
      <div
        style={{ backgroundImage: `url(${highlight.src})` }}
        className="w-8/10 relative z-20 aspect-video bg-contain"
      ></div>
      {/* second image */}
      <div className="max-h-4/10 absolute inset-0 top-1/2 z-10 -translate-y-1/2 bg-[#1f0c46]"></div>
    </div>
  );
}
