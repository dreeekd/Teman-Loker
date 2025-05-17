"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function TrackersIndexPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/trackers/jobs")
  }, [router])

  return <div className="p-8">Redirecting to Jobs...</div>
}
