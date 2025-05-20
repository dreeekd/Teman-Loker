"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Home,
  FileText,
  BarChart2,
  Headphones,
  Search,
  Settings,
  HelpCircle,
  PuzzleIcon,
  BookOpen,
  MessageSquareText,
  DollarSign,
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-[175px] h-full border-r bg-white flex flex-col">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#00574B] to-[#00A896] bg-clip-text text-transparent">
            TemanGAWE
          </h1>
        </Link>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          <NavItem href="/" icon={<Home className="w-5 h-5" />} label="Home" isActive={pathname === "/"} />
          <NavItem
            href="/resume-builder"
            icon={<FileText className="w-5 h-5" />}
            label="Atur Resume AI"
            isActive={pathname === "/resume-builder"}
          />
          <NavItem
            href="/trackers"
            icon={<BarChart2 className="w-5 h-5" />}
            label="Tracker"
            isActive={pathname.startsWith("/trackers")}
          />
          <NavItem
            href="/interview-practice"
            icon={<Headphones className="w-5 h-5" />}
            label="TemanInterview™"
            isActive={pathname === "/interview-practice"}
          />
          <NavItem
            href="/job-search"
            icon={<Search className="w-5 h-5" />}
            label="Cari Loker"
            isActive={pathname === "/job-search"}
          />
          <NavItem
            href="/extension"
            icon={<PuzzleIcon className="w-5 h-5" />}
            label="Extension"
            isActive={pathname === "/extension"}
          />
          <NavItem
            href="/bank-pertanyaan"
            icon={<BookOpen className="w-5 h-5" />}
            label="Bank Pertanyaan"
            isActive={pathname === "/bank-pertanyaan"}
          />
          <NavItem
            href="/tanya-hrd-ai"
            icon={<MessageSquareText className="w-5 h-5" />}
            label="Tanya HRD.ai"
            isActive={pathname === "/tanya-hrd-ai"}
          />
          <NavItem
            href="/pricing"
            icon={<DollarSign className="w-5 h-5" />}
            label="Harga"
            isActive={pathname === "/pricing"}
          />
        </ul>
      </nav>
      <div className="mt-auto py-4">
        <ul className="space-y-1">
          <NavItem
            href="/support-center"
            icon={<HelpCircle className="w-5 h-5" />}
            label="Support Center"
            isActive={pathname === "/support-center"}
          />
          <NavItem
            href="/account-settings"
            icon={<Settings className="w-5 h-5" />}
            label="Account Settings"
            isActive={pathname === "/account-settings"}
          />
        </ul>
      </div>
    </div>
  )
}

function NavItem({
  href,
  icon,
  label,
  isActive,
}: {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
}) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors
          ${
            isActive
              ? "bg-[#00574B]/10 text-[#00574B] font-medium"
              : "text-gray-700 hover:bg-gray-100 hover:text-[#00574B]"
          }`}
      >
        <span className={`mr-3 ${isActive ? "text-[#00574B]" : ""}`}>{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  )
}
