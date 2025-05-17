"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Send, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define types for our chat
interface Message {
  role: "user" | "assistant"
  content: string
  company?: string
}

interface Company {
  id: string
  name: string
  color?: string
}

interface Industry {
  id: string
  name: string
}

export default function TanyaHRDAIPage() {
  // List of companies - removed Kraft Heinz, Coca-Cola, PepsiCo, and Nike as requested
  const companies: Company[] = [
    { id: "unilever", name: "Unilever", color: "#1F36C7" },
    { id: "pg", name: "Procter & Gamble (P&G)", color: "#0046BE" },
    { id: "indofood", name: "Indofood", color: "#0057A8" },
    { id: "mayora", name: "Mayora", color: "#E4002B" },
    { id: "sinarmas", name: "Sinar Mas", color: "#00843D" },
    { id: "gudanggaram", name: "Gudang Garam", color: "#E4002B" },
    { id: "loreal", name: "L'Oréal", color: "#000000" },
  ]

  // List of industries
  const industries: Industry[] = [
    { id: "consumer", name: "Consumer" },
    { id: "technology", name: "Technology" },
    { id: "energy", name: "Energy" },
    { id: "health", name: "Health" },
    { id: "finance", name: "Finance" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "transport", name: "Transport" },
    { id: "industrial", name: "Industrial" },
    { id: "property", name: "Property" },
    { id: "more", name: "More coming Soon" },
  ]

  // State
  const [selectedCompany, setSelectedCompany] = useState<Company>(
    companies.find((c) => c.id === "unilever") || companies[0],
  )
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industries[0])
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Initial welcome message when company changes
  useEffect(() => {
    const welcomeMessage = getWelcomeMessage(selectedCompany.id)
    setMessages([{ role: "assistant", content: welcomeMessage, company: selectedCompany.id }])
  }, [selectedCompany])

  // Auto scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Get welcome message based on company
  const getWelcomeMessage = (companyId: string): string => {
    switch (companyId) {
      case "unilever":
        return "Halo, saya HRD dari Unilever, disini saya dengan senang hati akan menjawab semua pertanyaan yang Anda punya terkait proses rekrutmen, wawancara, serta hal-hal lain yang berkaitan dengan lingkungan kerja di perusahaan kami. Silahkan bertanya"
      case "pg":
        return "Hi there! I'm a recruiter from Procter & Gamble (P&G). Feel free to ask me anything about our hiring process, career opportunities, or company culture."
      case "indofood":
        return "Selamat datang! I'm representing Indofood's HR team. How can I assist you with your career inquiries today?"
      case "mayora":
        return "Hello! I'm from Mayora's recruitment team. I'd be happy to discuss our job openings, application process, or anything else you'd like to know."
      case "sinarmas":
        return "Halo! Saya HRD dari SINAR MAS. Please feel free untuk bertanya terkait keluarga bisnis kami dan career path yang kami tawarkan."
      case "gudanggaram":
        return "Hello! I represent Gudang Garam's HR department. I'm here to answer your questions about working with us."
      case "loreal":
        return "Bonjour! I'm from L'Oréal's HR department. I'd be delighted to share insights about our beauty industry careers."
      default:
        return "Hello! I'm a recruiter ready to answer your questions about careers and opportunities at our company."
    }
  }

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const newMessages = [...messages, { role: "user", content: inputValue }]
    setMessages(newMessages)
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(inputValue, selectedCompany.id)
      setMessages([...newMessages, { role: "assistant", content: response, company: selectedCompany.id }])
      setIsLoading(false)
    }, 1000)
  }

  // Generate a response based on user input and selected company
  const generateResponse = (input: string, companyId: string): string => {
    const lowercaseInput = input.toLowerCase()

    // Company-specific responses
    if (companyId === "unilever") {
      if (lowercaseInput.includes("interview") || lowercaseInput.includes("process")) {
        return "Di Unilever, proses wawancara kami umumnya dimulai dengan tahap penyaringan awal, dilanjutkan dengan penilaian yang menguji kemampuan teknis dan juga kesesuaian dengan budaya perusahaan. Untuk pertanyaan seputar perilaku, kami menggunakan STAR method (Situation, Task, Action, Result). Tahap terakhir biasanya berupa wawancara panel bersama anggota tim senior."
      } else if (lowercaseInput.includes("salary") || lowercaseInput.includes("compensation")) {
        return "While I can't discuss specific salary ranges as they vary by position and location, Unilever offers competitive compensation packages that include performance bonuses, comprehensive benefits, and various wellness programs. We benchmark our offers against industry standards to ensure they're attractive to top talent."
      } else if (lowercaseInput.includes("culture") || lowercaseInput.includes("values")) {
        return "Unilever's culture is built around our core values of integrity, respect, responsibility, and pioneering. We emphasize sustainability in everything we do, and promote diversity and inclusion across all our operations. Our workplace encourages innovation, collaboration, and continuous learning."
      } else if (lowercaseInput.includes("apply") || lowercaseInput.includes("application")) {
        return "To apply for positions at Unilever, visit our careers website at unilever.com/careers. There you can search for roles that match your skills and interests. Make sure your resume highlights relevant experience and demonstrates how you align with our values. We review applications thoroughly and aim to respond to all candidates."
      }
    }

    // Generic responses for all companies
    if (lowercaseInput.includes("benefit") || lowercaseInput.includes("perks")) {
      return `${selectedCompany.name} offers a comprehensive benefits package that typically includes health insurance, retirement plans, paid time off, and professional development opportunities. Many of our locations also provide amenities like fitness centers, flexible working arrangements, and employee discount programs.`
    } else if (lowercaseInput.includes("remote") || lowercaseInput.includes("work from home")) {
      return `${selectedCompany.name} has adopted flexible working policies that vary by role and department. Many positions offer hybrid arrangements, while some are fully remote or require on-site presence. We evaluate each role individually to determine the most effective working model.`
    } else if (lowercaseInput.includes("internship") || lowercaseInput.includes("entry level")) {
      return `${selectedCompany.name} has robust internship and entry-level programs designed to develop future talent. These typically run throughout the year with our main intake during summer months. We provide mentorship, meaningful projects, and networking opportunities to help launch your career.`
    }

    // Default response
    return `Terima kasih sudah mau diskusi terkait perusahan kami, ${selectedCompany.name}! Saya senang bisa bantu kasih info lebih detail. Bagian mana yang masih dibingungkan? dari proses rekrutmennya, budaya kerja di sini, atau ada posisi tertentu yang pengin kamu tau?`
  }

  // Handle company selection
  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company)
  }

  // Handle industry selection
  const handleSelectIndustry = (industry: Industry) => {
    setSelectedIndustry(industry)
  }

  // Handle input submission on Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Get company avatar with initial or colored background
  const getCompanyAvatar = (company: Company) => {
    // Use company initials and colors instead of images
    let bgColor = "#1F36C7"
    let initial = company.name.charAt(0)

    if (company.id === "unilever") {
      bgColor = "#1F36C7"
      initial = "U"
    } else if (company.id === "pg") {
      bgColor = "#0046BE"
      initial = "P"
    } else if (company.id === "indofood") {
      bgColor = "#0057A8"
      initial = "I"
    } else if (company.id === "mayora") {
      bgColor = "#E4002B"
      initial = "M"
    } else if (company.id === "sinarmas") {
      bgColor = "#00843D"
      initial = "S"
    } else if (company.id === "gudanggaram") {
      bgColor = "#E4002B"
      initial = "G"
    } else if (company.id === "loreal") {
      bgColor = "#000000"
      initial = "L"
    }

    return (
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: bgColor }}
      >
        {initial}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold mb-2">Ngobrol bareng HRD.ai</h1>
        <p className="text-gray-600">
          Kamu bakal ngobrol langsung sama HRD.ai yang sudah dilatih informasi soal perusahaan Fortune Indonesia 100!
          Jadi, gak usah ragu buat nanya apa aja—mau itu soal lowongan kerja, tips wawancara, atau bahkan cuman pengen
          tau apakah mereka ada kerjaan yang dibayar untuk ke Bali (sambil liburan hehe). Pokoknya bebas, tanya apa aja
          deh!
        </p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar - Company selection */}
        <div className="w-[350px] border-r flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex justify-between w-full px-4 py-2 h-auto">
                  <span className="font-medium">{selectedIndustry.name}</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[300px]">
                {industries.map((industry) => (
                  <DropdownMenuItem
                    key={industry.id}
                    onClick={() => handleSelectIndustry(industry)}
                    className={selectedIndustry.id === industry.id ? "bg-gray-100" : ""}
                  >
                    {industry.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          <div className="overflow-y-auto flex-1">
            {companies.map((company) => (
              <button
                key={company.id}
                className={`flex items-center w-full p-4 hover:bg-gray-50 ${
                  selectedCompany.id === company.id ? "bg-[#00574B]/10 border-l-4 border-[#00574B]" : ""
                }`}
                onClick={() => handleSelectCompany(company)}
              >
                <div className="mr-3">{getCompanyAvatar(company)}</div>
                <span className="text-sm">{company.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4" ref={chatContainerRef}>
            {messages.map((message, index) => (
              <div key={index} className={`mb-6 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "assistant" && (
                  <div className="mr-3 flex-shrink-0">{getCompanyAvatar(selectedCompany)}</div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === "user" ? "bg-[#00574B] text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-6">
                <div className="mr-3 flex-shrink-0">{getCompanyAvatar(selectedCompany)}</div>
                <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "600ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t p-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder={`Chat with ${selectedCompany.name} recruiter`}
                className="flex-1 bg-transparent outline-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                size="icon"
                className={`rounded-full ${inputValue.trim() ? "bg-[#00574B] text-white" : "bg-gray-300 text-gray-500"}`}
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
