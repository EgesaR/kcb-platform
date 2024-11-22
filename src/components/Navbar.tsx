import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { CgHomeAlt } from "react-icons/cg";
import { IoInformationOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { LuPlane } from "react-icons/lu";
import { MdSchool } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="w-full h-16 flex flex-row border-b-[0.5px] border-slate-300 bg-black/80 text-white items-center px-2 sticky top-0">
      <h1 className="text-2xl font-semibold">Kiira College Butiki</h1>
      <div className="ml-auto gap-4 flex h-full items-center">
        <Link
          href=""
          className="bg-white flex flex-row items-center gap-2 rounded-xl font-semibold text py-1 px-2 hover:bg-white/50 text-black group group-hover:bg-black group-hover:text-white"
        >
          <CgHomeAlt className="text-black group-hover:text-white" />
          <label>Home</label>
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text py-1 px-2 hover:bg-white/50"
        >
          <MdSchool />
          <label>Admission</label>
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text py-1 px-2 hover:bg-white/50"
        >
          <label>Around the college</label>
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text py-1 px-2 hover:bg-white/50"
        >
          <VscGraph />
          <label>E-Report</label>
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text py-1 px-2 flex flex-row gap-2 items-center hover:bg-white/50"
        >
          <label>Contact</label>
          <FiArrowUpRight size={25} />
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text py-1 px-2 hover:bg-white/50"
        >
          <IoInformationOutline />
          <label>About us</label>
        </Link>
      </div>
    </nav>
  );
}
