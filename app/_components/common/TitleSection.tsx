export default function TitleSection({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={`font-serif ${props.className}`}>
      <span aria-hidden>“</span> {children}
    </h2>
  );
}
