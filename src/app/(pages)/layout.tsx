import Sidebar from "../../components/sections/sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="hidden lg:block p-4 h-screen overflow-auto">
      
      <Sidebar/>

    </div>
    <main className="container mx-auto  overflow-x-auto">
      {children}
    </main>
    </>
  
  );
}