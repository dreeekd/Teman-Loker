import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"

interface ComingSoonProps {
  title: string
  description: string
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4">
      <div className="w-20 h-20 rounded-full bg-[#00574B]/10 flex items-center justify-center mb-6">
        <Clock className="w-10 h-10 text-[#00574B]" />
      </div>
      <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-gray-600 text-center max-w-md mb-8">{description}</p>
      <Button asChild className="bg-[#00574B] hover:bg-[#004a3f]">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </Button>
    </div>
  )
}
