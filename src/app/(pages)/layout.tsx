import Sidebar from "../../components/sections/sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside className=" hidden lg:block p-4 overflow-y-auto ">

        <Sidebar />

      </aside>
      <main className="container mx-auto overflow-y-auto  ">
        {children}
      </main>
    
    </>

  );
}