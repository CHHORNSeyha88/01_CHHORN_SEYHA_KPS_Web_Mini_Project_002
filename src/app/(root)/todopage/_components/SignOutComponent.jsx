'use client'

import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

const SignOutComponent = () => {
  const handleSignOut = () => {
    signOut({
      callbackUrl: '/login' // Redirect to login after signout
    })
  }

  return (
    <button
      onClick={handleSignOut}
      className="cursor-pointer flex items-center gap-x-5 justify-start w-full p-2"
    >
      <LogOut size={25} className="text-[#009990] font-bold" />
      <span className="text-[#009990] font-bold">Logout</span>
    </button>
  )
}

export default SignOutComponent
