import Footer from "../components/sections/Footer";


export default function Home() {
  return (
    <div className=" mx-auto py-8 px-3 ">
      <h1 className="text-3xl font-bold mb-4 text-emerald-200">Welcome to My Site</h1>
      <p className="text-lg mb-8 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      <div className=" grid grid-cols-12  ">
        <div className="col-span-12 md:col-span-6 xl:col-span-4 p-4 m-4 bg-slate-100 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">Feature 1</h2>
          <p className="text-lg mb-4 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded">Learn More</button>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 p-4 m-4 bg-slate-100 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">Feature 1</h2>
          <p className="text-lg mb-4 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded">Learn More</button>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 p-4 m-4 bg-slate-100 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">Feature 1</h2>
          <p className="text-lg mb-4 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded">Learn More</button>
        </div><div className="col-span-12 md:col-span-6 xl:col-span-4 p-4 m-4 bg-slate-100 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">Feature 1</h2>
          <p className="text-lg mb-4 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded">Learn More</button>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 p-4 m-4 bg-slate-100 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">Feature 1</h2>
          <p className="text-lg mb-4 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded">Learn More</button>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 p-4 m-4 bg-slate-100 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">Feature 1</h2>
          <p className="text-lg mb-4 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded">Learn More</button>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 p-4 m-4 bg-slate-100 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">Feature 1</h2>
          <p className="text-lg mb-4 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded">Learn More</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
