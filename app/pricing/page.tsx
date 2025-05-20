"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, BarChart2, Star, Mail, FileEdit } from "lucide-react"

interface PricingOption {
  id: string
  price: string
  period: string
  fullPeriod: string
  isPopular?: boolean
}

export default function PricingPage() {
  const pricingOptions: PricingOption[] = [
    {
      id: "weekly",
      price: "Rp59.000",
      period: "minggu",
      fullPeriod: "Setiap minggu",
    },
    {
      id: "monthly",
      price: "Rp239.000",
      period: "bulan",
      fullPeriod: "Setiap bulan",
    },
    {
      id: "quarterly",
      price: "Rp511.000",
      period: "3 bulan",
      fullPeriod: "Setiap 3 bulan",
      isPopular: true,
    },
  ]

  const [selectedOption, setSelectedOption] = useState<string>("quarterly")

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId)
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Pilih Paket TemanGAWE+</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tingkatkan pencarian kerja Anda dengan fitur premium kami. Pilih durasi langganan paket yang sesuai dengan kebutuhan Anda.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Pricing options */}
          <div className="flex-1 bg-white rounded-lg p-8 border shadow-sm">
            <p className="text-center mb-6 text-gray-700">
              Pilih opsi upgrade di bawah ini dan lanjutkan ke pembayaran
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {pricingOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`relative flex flex-col items-center justify-center p-6 rounded-lg border transition-all ${
                    selectedOption === option.id
                      ? "border-[#00574B] bg-[#00574B] text-white"
                      : "border-gray-200 hover:border-gray-300 text-gray-500"
                  }`}
                >
                  <span className="text-3xl font-bold">{option.price}</span>
                  <span className="text-sm">{option.fullPeriod}</span>
                </button>
              ))}
            </div>

            <Button className="w-full py-6 bg-amber-500 hover:bg-amber-600 text-black font-medium text-lg">
              Lanjutkan
            </Button>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Anda dapat membatalkan langganan kapan saja</p>
              <p className="mt-2">
                Dengan melanjutkan, Anda menyetujui{" "}
                <a href="#" className="text-[#00574B] hover:underline">
                  Syarat & Ketentuan
                </a>{" "}
                dan{" "}
                <a href="#" className="text-[#00574B] hover:underline">
                  Kebijakan Privasi
                </a>{" "}
                kami
              </p>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="lg:w-[400px] bg-[#00574B] text-white rounded-lg p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">TemanGAWE+</h2>
              <p>Semua fitur gratis termasuk, ditambah:</p>
            </div>

            <div className="space-y-6">
              <FeatureItem
                icon={<FileText className="h-6 w-6" />}
                title="Atur Resume AI (Unlimited)"
                description="Dapatkan rekomendasi AI untuk CV kamu"
              />

              <FeatureItem
                icon={<Mail className="h-6 w-6" />}
                title="Input Data di Tracker (Unlimited)"
                description="Simpan informasi loker, network, dan perusahaan no limit!"
              />

              <FeatureItem
                icon={<Star className="h-6 w-6" />}
                title="Fitur ATS dari Deskripsi Lowongan (Unlimited)"
                description="Perkuat resume Anda dengan kata kunci yang relevan"
              />

              <FeatureItem
                icon={<BarChart2 className="h-6 w-6" />}
                title="TemanInterview™ (Unlimited)"
                description="Latihan wawancara kerja kapanpun dimanapun tentang apapun"
              />

              <FeatureItem
                icon={<FileEdit className="h-6 w-6" />}
                title="Pembuatan Cover Letter AI (Unlimited)"
                description="Buat cover letter yang disesuaikan Loker dengan AI"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem
              question="Apa perbedaan antara versi gratis dan TemanGAWE+?"
              answer="Versi gratis menawarkan fitur dasar untuk pencarian kerja, sementara TemanGAWE+ memberikan akses tak terbatas ke semua fitur premium seperti analisis resume lanjutan, skor kecocokan, dan pembuatan cover letter dengan AI."
            />
            <FAQItem
              question="Bisakah saya membatalkan langganan kapan saja?"
              answer="Ya, Anda dapat membatalkan langganan kapan saja. Anda akan tetap memiliki akses ke fitur premium hingga akhir periode penagihan Anda."
            />
            <FAQItem
              question="Apakah ada jaminan uang kembali?"
              answer="Ya, kami menawarkan jaminan uang kembali 7 hari. Jika Anda tidak puas dengan TemanGAWE+, Anda dapat meminta pengembalian dana penuh dalam 7 hari pertama berlangganan."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
