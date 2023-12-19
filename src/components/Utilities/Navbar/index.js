import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row justify-between flex-col p-4 items-center">
        <Link className="font-bold text-white text-2xl" href="/">
          CUYANIMELIST
        </Link>
        <input className="p-2 rounded" placeholder="Cari Anime...."></input>
      </div>
    </header>
  );
};

export default Navbar;
