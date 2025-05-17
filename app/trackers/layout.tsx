"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Plus } from "lucide-react"

export default function TrackersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<"jobs" | "people" | "companies" | null>(null)

  useEffect(() => {
    if (pathname.includes("/jobs")) {
      setActiveSection("jobs")
    } else if (pathname.includes("/people")) {
      setActiveSection("people")
    } else if (pathname.includes("/companies")) {
      setActiveSection("companies")
    } else {
      setActiveSection(null)
    }
  }, [pathname])

  const handleAddNew = () => {
    if (activeSection === "people") {
      // Trigger the add contact modal via custom event
      const event = new CustomEvent("openAddContactModal")
      window.dispatchEvent(event)
    } else if (activeSection === "jobs") {
      router.push("/trackers/jobs/add")
    } else if (activeSection === "companies") {
      router.push("/trackers/companies/add")
    }
  }

  const getAddButtonText = () => {
    switch (activeSection) {
      case "jobs":
        return "Add a New Job"
      case "people":
        return "Add a New Contact"
      case "companies":
        return "Add a New Company"
      default:
        return "Add New"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="border-b">
        <div className="flex justify-between items-center p-4">
          <div className="flex space-x-6">
            <button
              onClick={() => router.push("/trackers/jobs")}
              className={`flex items-center px-2 py-1 ${
                activeSection === "jobs" ? "text-[#00574B] font-medium" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 11H9V5H4V11ZM4 18H9V12H4V18ZM10 18H15V12H10V18ZM16 18H21V12H16V18ZM10 11H15V5H10V11ZM16 5V11H21V5H16Z"
                  fill="currentColor"
                />
              </svg>
              Loker
            </button>
            <button
              onClick={() => router.push("/trackers/people")}
              className={`flex items-center px-2 py-1 ${
                activeSection === "people" ? "text-[#00574B] font-medium" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
              Network
            </button>
            <button
              onClick={() => router.push("/trackers/companies")}
              className={`flex items-center px-2 py-1 ${
                activeSection === "companies" ? "text-[#00574B] font-medium" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z"
                  fill="currentColor"
                />
              </svg>
              Perusahaan
            </button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Menu className="h-4 w-4 mr-2" />
              Menu
            </Button>
            {activeSection && (
              <Button className="bg-[#00574B] hover:bg-[#004a3f]" onClick={handleAddNew}>
                <Plus className="h-4 w-4 mr-2" />
                {getAddButtonText()}
              </Button>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
