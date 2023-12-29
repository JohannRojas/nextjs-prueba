'use client'

import Link from 'next/link'

export const CustomNavbar = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center">
      <ul className="flex items-center justify-center">
        <BanknoteIcon className="h-6 w-6" />
        <span className="sr-only">Digital Bank</span>
      </ul>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href={ "/" } className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
          Home
        </Link>
        <Link href={ "/usuario" } className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
          Registrar usuario
        </Link>
        <Link href={ "/usuario/consulta" } className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
          Consultar usuarios
        </Link>
      </nav>
    </header>
  )
}

const BanknoteIcon = (props: any) => {
  return (
    <svg
      { ...props }
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}