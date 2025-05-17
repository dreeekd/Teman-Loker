"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Plus } from "lucide-react"

export default function CompaniesPage() {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="w-16 h-16 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <h2 className="text-xl font-bold mb-2">You don't have any saved companies</h2>
      <p className="text-gray-600 text-center mb-6">
        Save companies from across the web using our Chrome Extension or add them manually.
      </p>
      <div className="flex gap-4">
        <Button className="bg-[#00574B] hover:bg-[#004a3f]">
          Install Chrome Extension
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Add company
        </Button>
      </div>
    </div>
  )
}
