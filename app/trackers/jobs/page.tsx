"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Star } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function JobsPage() {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 border-b">
        <div className="grid grid-cols-7 gap-4 text-center">
          <div className="border rounded-md p-4">
            <div className="font-bold text-xl">3</div>
            <div className="text-sm font-medium">BOOKMARKED</div>
          </div>
          <div className="border rounded-md p-4">
            <div className="font-bold text-xl">--</div>
            <div className="text-sm font-medium">APPLYING</div>
          </div>
          <div className="border rounded-md p-4">
            <div className="font-bold text-xl">--</div>
            <div className="text-sm font-medium">APPLIED</div>
          </div>
          <div className="border rounded-md p-4">
            <div className="font-bold text-xl">--</div>
            <div className="text-sm font-medium">INTERVIEWING</div>
          </div>
          <div className="border rounded-md p-4">
            <div className="font-bold text-xl">--</div>
            <div className="text-sm font-medium">NEGOTIATING</div>
          </div>
          <div className="border rounded-md p-4">
            <div className="font-bold text-xl">--</div>
            <div className="text-sm font-medium">ACCEPTED</div>
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center border-b">
        <div className="flex items-center">
          <Checkbox id="select-all" className="mr-2" />
          <label htmlFor="select-all" className="text-sm text-gray-600">
            {selectedJobs.length} selected
          </label>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Group by: None
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem checked={false}>None</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={false}>Company</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={false}>Status</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm">
            Columns
          </Button>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="border rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="w-10 p-4">
                  <Checkbox />
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Job Position
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Company
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Max. Salary
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Location
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Status
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Excitement
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">
                  <Checkbox />
                </td>
                <td className="p-4">Test Instrumentation Engineer</td>
                <td className="p-4">Rolls Royce</td>
                <td className="p-4">Rp40.000.000</td>
                <td className="p-4">Massachusetts, USA</td>
                <td className="p-4">Bookmarked</td>
                <td className="p-4">
                  <div className="flex">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <Checkbox />
                </td>
                <td className="p-4">Asisten Mata Kuliah Pengenalan Komputasi</td>
                <td className="p-4">Institut Teknologi Bandung</td>
                <td className="p-4">Rp6.000.000</td>
                <td className="p-4">Bandung, Indonesia</td>
                <td className="p-4">Bookmarked</td>
                <td className="p-4">
                  <div className="flex">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-gray-300" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <Checkbox />
                </td>
                <td className="p-4">Senior Product Designer</td>
                <td className="p-4">Apple</td>
                <td className="p-4">Rp25.000.000</td>
                <td className="p-4">Waltham, MA</td>
                <td className="p-4">Bookmarked</td>
                <td className="p-4">
                  <div className="flex">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-gray-300" />
                    <Star className="h-4 w-4 text-gray-300" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
