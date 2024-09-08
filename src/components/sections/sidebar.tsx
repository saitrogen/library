
import React from "react";
import Link from "next/link";
import resources from "../../data/sidebar/resources.json"



const Sidebar = () => {
  return (
    <><nav className="overflow-auto">
      
      {resources.map((item) => (
        <>
        <h5 className=" mt-8 mb-8 lg:mb-3 font-semibold text-md text-slate-900 dark:text-emerald-200">{item.title}</h5>
        <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-emerald-700 text-sm">
          {item.children.map((child) => (
            <li><Link className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-emerald-500 text-slate-700 hover:text-slate-900 dark:text-emerald-400 dark:hover:text-emerald-300" href={""}>{child.sub}</Link></li>
          ))}
        </ul>
        </>
      ))}

    </nav>
      
    </>
  );
};

export default Sidebar;
