export default function Navbar() {
  const links = [
    { name: "Home", url: "#" },
    { name: "Episodes", url: "#" },
    { name: "Pricing", url: "#" },
    { name: "Contact", url: "#" },
  ];
  return (
    <div className="flex flex-row justify-between text-white relative z-50">
      <a href="#" className="text-5xl font-bold hover:text-slate-200 transition-colors duration-300 hover:cursor-pointer">FJ Films</a>
      <div className="flex flex-row justify-between items-center w-[30%]">
        {
            links.map((link, index) => (
                <a key={index} className="w-fit hover:text-slate-200 transition-colors duration-300" href={link.url}>
                    {link.name}
                </a>
            ))
        }
      </div>
      <a href="#">
        <button className="border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
            Talk to Us
        </button>
      </a>
    </div>
  );
}
