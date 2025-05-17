import { Button } from "@/components/ui/button"
import { Pencil, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Premium Banner */}
      <div className="bg-[#00574B] text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <h2 className="text-lg font-medium">Semua Fitur Unlimited dengan TemanLoker+</h2>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span>Analisis Loker Unlimited</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span>Storage Data Unlimited</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span>Semua AI Unlimited</span>
            </div>
          </div>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">Upgrade TemanLoker+</Button>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Career Goal Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Goal Karir: Jadi Presiden</h2>
              <Button variant="ghost" size="sm" className="text-amber-600">
                <Pencil className="h-4 w-4 mr-2" />
                Edit Goals
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Target Title</p>
                <p className="font-medium">Not set</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Target Date</p>
                <p className="font-medium">Not set</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Target Salary Range</p>
                <p className="font-medium">Rp20.000.000-Rp50.000.000</p>
              </div>
            </div>

            <div className="border-t my-4"></div>

            {/* Video Section */}
            <div className="aspect-video bg-gray-100 rounded-md relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#00574B] flex items-center justify-center text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Belajar gimana cara pakai TemanLoker</h3>
                <p className="text-sm text-gray-600">
                  Tonton video tutorial ini tentang bagaimana menggunakan SEMUA TOOLS dari TemanLoker agar kamu diterima kerja lebih cepat.
                </p>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                Tandai Selesai
              </Button>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Mulai Pakai TemanLoker!</h2>
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">0% Progress</p>
                <p className="text-sm text-gray-600">0 of 3 Tugas</p>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div className="w-0 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Task 1 */}
              <div className="flex items-start space-x-4 p-4 border-b">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-medium">Mulai pakai fitur AI Resume Builder</h3>
                  <p className="text-sm text-gray-600">
                    Import LinkedIn profile kamu, upload resume/CV yang sudah ada, atau manfaatkan fitur AI kamu untuk bikin costum resume buat tiap loker.
                  </p>
                </div>
                <Button className="bg-white text-black border hover:bg-gray-50">Bikin Resume</Button>
              </div>

              {/* Task 2 */}
              <div className="flex items-start space-x-4 p-4 border-b">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-medium">Install Chrome Extension - GRATIS!</h3>
                  <p className="text-sm text-gray-600">
                    Download chrome extension TemanLoker untuk simpan data Loker, Kontak Network, Perusahaan & Resume dalam satu tempat yang terintegrasi.
                  </p>
                </div>
                <Button className="bg-white text-black border hover:bg-gray-50">
                  Install Extension
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Task 3 */}
              <div className="flex items-start space-x-4 p-4">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-medium">Tambahkan Loker di Job Tracker</h3>
                  <p className="text-sm text-gray-600">
                    Bookmark Loker dari platform cari kerja favoritmu menggunakan Chrome Extension TemanLoker atau input manual.
                  </p>
                </div>
                <Button className="bg-white text-black border hover:bg-gray-50">Simpan Loker dari Linkedin</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
