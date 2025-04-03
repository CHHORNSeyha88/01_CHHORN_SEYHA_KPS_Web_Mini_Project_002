import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BellRing, ChevronRight } from "lucide-react";
import { getUser } from "@/service/auth/user.service";

const NarbarComponent = async () => {
    const data = await getUser();
    const userInfo = data.payload;
  return (
    <div className="fixed top-0 left-[20%] right-0 z-50 py-4 px-6 bg-white ">
      {/* Navbar content */}
      <ul className="flex justify-between items-center px-10">
        <li className="flex items-center text-[17px] font-light gap-x-5 text-gray-800">
            <Link href="/workspace">
              <h2>Workspace</h2>
            </Link>
            <span><ChevronRight/></span>
            <Link href="/hrddesign">
            <h2>HRD Design</h2>
            </Link>
        </li>
        <li className="flex items-center gap-x-5     ">
            {/* notification */}
            <BellRing size={25}/>
            <span>
               <Image
               src={userInfo.profile}
               width={40}
               height={40}
               alt="user-profile"
               className="rounded-full"
               />
            </span>
            <span>
                <h2 className="font-bold">{userInfo.username}</h2>
                <h2 className="text-[#009990]">{userInfo.email}</h2>
            </span>
        </li>
      </ul>
      {/* row */}
      <span className="block mt-3 border-b-3 border-[#DBDDDE]"></span>
    </div>
  );
};

export default NarbarComponent;