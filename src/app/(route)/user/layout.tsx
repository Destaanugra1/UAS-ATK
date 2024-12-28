import "./user.css"
import NavUserPage from "@/app/components/nav-user2";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="mb-4">
      <NavUserPage />
      </div>
      <main> {children}</main>
    </div>
  )
}