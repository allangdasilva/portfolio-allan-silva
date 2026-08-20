export default function TextBody({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`type-lg max-w-[64ch] ${props.className}`}>{children}</p>
  );
}
