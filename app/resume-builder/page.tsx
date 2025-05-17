import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, ChevronDown, ChevronUp, Pencil, Copy, Trash } from "lucide-react"

export default function ResumeBuilder() {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 border-b flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#00574B]">Atur-atur Resume (pakai AI)!</h1>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search Resumes" className="pl-10 pr-4 py-2 w-64 border rounded-md" />
          </div>
          <Button variant="outline" size="sm">
            <Menu className="h-4 w-4 mr-2" />
            Menu
          </Button>
          <Button className="bg-[#00574B] hover:bg-[#004a3f]">Create New Resume</Button>
        </div>
      </div>

      <div className="p-6">
        <div className="border rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Resume
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Score
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Matched Job
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Match
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Created
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Last Edited
                    <ChevronUp className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Test Instrumentation Engineer at Rolls Royce</td>
                <td className="p-4">43%</td>
                <td className="p-4 text-amber-600">Test Instrumentation Engineer at Rolls Royce</td>
                <td className="p-4">—</td>
                <td className="p-4">16/15/2025</td>
                <td className="p-4">16/15/2025</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash className="h-4 w-4" />
                    </Button>
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
