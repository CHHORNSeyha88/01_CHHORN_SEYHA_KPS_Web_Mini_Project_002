// app/create-workspace/page.js
'use client'
import Link from "next/link";
import CreateWorkspaceModal from "./_components/CreateWorkspaceModal";

export default function CreateWorkspacePage() {
  return (
    <div>
      {/* Render the modal */}
      <CreateWorkspaceModal onClose={() => window.history.back()} />

      {/* Optional: Add a link to go back */}
      <Link href="/" className="fixed top-4 left-4 text-blue-500 underline">
        Go Back
      </Link>
    </div>
  );
}