export default async function AfterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      애프터레이아웃
      {children}
    </div>
  );
}
