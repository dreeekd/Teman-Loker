"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Edit, Trash, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

// Define the Contact type
interface Contact {
  id: string
  firstName: string
  lastName: string
  fullName: string
  jobTitle: string
  company: string
  email: string
  linkedin: string
  twitter: string
  location: string
  phone: string
  goal: string
  status: string
  relationship: string
  followUp: string
}

// Initial dummy data
const initialContacts: Contact[] = [
  {
    id: "1",
    firstName: "Andreas",
    lastName: "Naufal Aiman",
    fullName: "Andreas Naufal Aiman",
    jobTitle: "Stakeholder di TEC",
    company: "TEC ITB",
    email: "tec-itb@km.itb.ac.id",
    linkedin: "",
    twitter: "",
    location: "Bandung",
    phone: "081234245678675132324",
    goal: "Networking",
    status: "Meeting Scheduled",
    relationship: "Co-Worker",
    followUp: "05/15/2025",
  },
  {
    id: "2",
    firstName: "Muhammad",
    lastName: "Kamal",
    fullName: "Muhammad Kamal",
    jobTitle: "Anggota",
    company: "HIPMI PT ITB",
    email: "",
    linkedin: "",
    twitter: "",
    location: "Bekasi",
    phone: "",
    goal: "Research Career",
    status: "Follow Up Needed",
    relationship: "Other",
    followUp: "05/15/2025",
  },
]

export default function ContactDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [contact, setContact] = useState<Contact | null>(null)
  const [notes, setNotes] = useState<string>("Beliau sangat pintar\n\npaste aja chat line disini")

  useEffect(() => {
    // In a real app, you would fetch this from an API
    const foundContact = initialContacts.find((c) => c.id === params.id)
    if (foundContact) {
      setContact(foundContact)
    } else {
      router.push("/trackers/people")
    }
  }, [params.id, router])

  if (!contact) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left sidebar */}
        <div className="w-[300px] border-r h-screen overflow-y-auto">
          <div className="p-4 border-b">
            <h2 className="font-medium">Contacts</h2>
          </div>
          <div>
            {initialContacts.map((c) => (
              <div
                key={c.id}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${c.id === contact.id ? "bg-gray-50" : ""}`}
                onClick={() => router.push(`/trackers/people/${c.id}`)}
              >
                <div className="font-medium">{c.fullName}</div>
                <div className="text-sm text-gray-600">
                  {c.jobTitle} at {c.company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mr-6 flex items-center justify-center text-gray-400 text-2xl">
                {contact.firstName.charAt(0)}
                {contact.lastName.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{contact.fullName}</h1>
                <div className="text-gray-600">
                  {contact.jobTitle} at {contact.company}
                </div>
                <div className="text-gray-600">{contact.location}</div>
                <div className="flex gap-4 mt-2">
                  <Button variant="ghost" size="sm" className="text-amber-600">
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <Trash className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Button variant="outline" className="justify-start">
                <Copy className="h-4 w-4 mr-2" />
                <span className="sr-only">Copy</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="sr-only">Back</span>
              </Button>
            </div>

            <div className="border rounded-md mb-6">
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="font-medium text-lg">{contact.goal}</h2>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-4 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Relationship</label>
                  <Select defaultValue={contact.relationship}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Co-Worker">Co-worker</SelectItem>
                      <SelectItem value="Client">Client</SelectItem>
                      <SelectItem value="Manager">Manager</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Goal</label>
                  <Select defaultValue={contact.goal}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Networking">Networking</SelectItem>
                      <SelectItem value="Research Career">Research Career</SelectItem>
                      <SelectItem value="Job Opportunity">Job Opportunity</SelectItem>
                      <SelectItem value="Mentorship">Mentorship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
                  <Select defaultValue={contact.status}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Meeting Scheduled">Meeting scheduled</SelectItem>
                      <SelectItem value="Follow Up Needed">Follow Up Needed</SelectItem>
                      <SelectItem value="Connected">Connected</SelectItem>
                      <SelectItem value="Waiting Response">Waiting Response</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="border rounded-md mb-6">
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="font-medium text-lg">Dates</h2>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-4 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Date saved</label>
                  <Input value={contact.followUp} readOnly />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Last contacted</label>
                  <Input placeholder="Add a date" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Follow up</label>
                  <Input value={contact.followUp} />
                </div>
              </div>
            </div>

            <div className="border rounded-md mb-6">
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="font-medium text-lg">Contact Information</h2>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <div>{contact.email || "-"}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">LinkedIn</label>
                  <div>{contact.linkedin || "-"}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                  <div>{contact.phone || "-"}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Twitter</label>
                  <div>{contact.twitter || "-"}</div>
                </div>
              </div>
            </div>

            <div className="border rounded-md">
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="font-medium text-lg">Notes</h2>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-4">
                <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="min-h-[200px]" />
                <div className="text-xs text-gray-500 mt-2">* changes will be automatically saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
