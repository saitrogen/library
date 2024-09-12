import data  from "../../../data/sidebar/resources.json";

export default function page() {
  return (
    <>
    <div className="overflow-y-auto">
      {data.map((item, index) => (
        <div key={index} className="mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4 text-emerald-200">{item.title}</h2>
          {item.title === 'Digital Library' && (
            <div className="p-4">
              <p className="text-lg mb-4 text-slate-400">
                Our digital library provides access to a wide range of e-books, e-journals, and other digital resources.
              </p>
              <ul className="text-lg mb-4 text-slate-400">
                {item.children.map((child, childIndex) => (
                  <li className="my-2" key={childIndex}>
                    <a href="#">{child.sub}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.title === 'Open Resources' && (
            <div className="p-4  ">
              <p className="text-lg mb-4 text-slate-400">
                Our open resources section provides access to a variety of free and open educational resources, including online courses, tutorials, and more.
              </p>
              <ul className="text-lg mb-4 text-slate-400">
                {item.children.map((child, childIndex) => (
                  <li className="my-2" key={childIndex}>
                    <a href="#">{child.sub}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      </div>
    </>
  );
}