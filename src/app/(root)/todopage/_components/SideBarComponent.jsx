// app/sidebar/SideBarComponent.js
import { getAllWorkSpaces } from "@/service/workspace/getallworkspace.service";
import { Ellipsis, FolderHeart, FolderPlus } from "lucide-react";
import Link from "next/link";
import SignOutComponent from "./SignOutComponent";
import AddNewWorkSpaceComponent from "./AddNewWorkSpaceComponent";
import { Button } from "@/components/ui/button";

const SideBarComponent = async () => {
  const data = await getAllWorkSpaces();
  const worSpace = data?.payload || [];

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
  const favoriteWorkspaces = worSpace.filter((workspace) => workspace.isFavorite);

  return (
    <div className="h-[100vh] shadow-xl sticky top-0">
      <main className="flex justify-between px-10 py-4 items-center">
        <h2 className="text-[#94A3B8] text-2xl font-bold">WorkSpace</h2>
        {/* Add query parameter to show modal */}
       <AddNewWorkSpaceComponent/>
      </main>
      <ul>
        {worSpace.map((Workspace) => (
          <li key={Workspace.workspaceId} className="px-5 py-4 text-gray-900 text-center text-[20px] font-bold hover:bg-[#F8FAFC] cursor-pointer flex justify-between items-center">
            <Link href={`/todopage/${Workspace.workspaceId}`} className="w-full flex justify-between items-center">
              <div className="text-1xl text-black flex justify-center items-center gap-x-5">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: getRandomColor() }}></span>
                {Workspace.workspaceName}
              </div>
              <Ellipsis size={25} />
            </Link>
          </li>
        ))}
      </ul>

      <ul className="mt-10">
        <main className="flex justify-between px-5 py-4 items-center">
          <h2 className="text-[#94A3B8] text-2xl font-bold">Favorite</h2>
          <Link href="/is">
            <FolderHeart size={30} />
          </Link>
        </main>

        {favoriteWorkspaces.map((workspace) => (
          <li key={`fav-${workspace.workspaceId}`} className="px-5 py-4 text-gray-900 text-center text-[20px] font-bold hover:bg-[#F8FAFC] cursor-pointer flex justify-between items-center">
            <Link href={`/todopage/${workspace.workspaceId}`} className="w-full flex justify-between items-center">
              <div className="flex items-center gap-x-5">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: getRandomColor() }}></span>
                {workspace.workspaceName}
              </div>
              <Ellipsis size={25} />
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <div className="border-t border-gray-200 px-5 py-4 bg-white">
        <SignOutComponent/>
      </div>
    </div>
  );
};

export default SideBarComponent;