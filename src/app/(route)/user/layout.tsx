import NavUser from "@/app/components/NavUser";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavUser />
      <main> {children}</main>
    </div>
  )
}