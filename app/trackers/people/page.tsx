"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"

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

// Column configuration
interface Column {
  id: string
  label: string
  visible: boolean
  editable?: boolean
  customLabel?: string
}

export default function PeoplePage() {
  const router = useRouter()
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newContact, setNewContact] = useState<Partial<Contact>>({})
  const [sortConfig, setSortConfig] = useState<{ column: string; direction: "asc" | "desc" }>({
    column: "fullName",
    direction: "asc",
  })
  const [editingColumn, setEditingColumn] = useState<string | null>(null)
  const [newColumnLabel, setNewColumnLabel] = useState<string>("")

  // Column visibility state
  const [columns, setColumns] = useState<Column[]>([
    { id: "fullName", label: "Full Name", visible: true, editable: true },
    { id: "company", label: "Company", visible: true, editable: true },
    { id: "location", label: "Location", visible: true, editable: true },
    { id: "goal", label: "Goal", visible: true, editable: true },
    { id: "status", label: "Status", visible: true, editable: true },
    { id: "relationship", label: "Relationship", visible: true, editable: true },
    { id: "followUp", label: "Follow up", visible: true, editable: true },
  ])

  // Listen for custom event to open the add contact modal
  useEffect(() => {
    const handleOpenModal = () => setIsAddModalOpen(true)
    window.addEventListener("openAddContactModal", handleOpenModal)
    return () => {
      window.removeEventListener("openAddContactModal", handleOpenModal)
    }
  }, [])

  // Toggle column visibility
  const toggleColumn = (columnId: string) => {
    setColumns(columns.map((col) => (col.id === columnId ? { ...col, visible: !col.visible } : col)))
  }

  // Handle sort
  const handleSort = (column: string) => {
    setSortConfig({
      column,
      direction: sortConfig.column === column && sortConfig.direction === "asc" ? "desc" : "asc",
    })
  }

  // Sort contacts based on current sort configuration
  const sortedContacts = [...contacts].sort((a, b) => {
    const aValue = a[sortConfig.column as keyof Contact] || ""
    const bValue = b[sortConfig.column as keyof Contact] || ""

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1
    }
    return 0
  })

  // Handle checkbox selection
  const handleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([])
    } else {
      setSelectedContacts(contacts.map((contact) => contact.id))
    }
  }

  const handleSelectContact = (id: string) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter((contactId) => contactId !== id))
    } else {
      setSelectedContacts([...selectedContacts, id])
    }
  }

  // Handle adding a new contact
  const handleAddContact = () => {
    if (newContact.firstName && newContact.lastName) {
      const fullName = `${newContact.firstName} ${newContact.lastName}`
      const contact: Contact = {
        id: Date.now().toString(),
        fullName,
        firstName: newContact.firstName,
        lastName: newContact.lastName,
        jobTitle: newContact.jobTitle || "",
        company: newContact.company || "",
        email: newContact.email || "",
        linkedin: newContact.linkedin || "",
        twitter: newContact.twitter || "",
        location: newContact.location || "",
        phone: newContact.phone || "",
        goal: "Networking",
        status: "Follow Up Needed",
        relationship: "Other",
        followUp: new Date().toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        }),
      }

      setContacts([...contacts, contact])
      setNewContact({})
      setIsAddModalOpen(false)
    }
  }

  // Navigate to contact detail page
  const navigateToContact = (contactId: string) => {
    router.push(`/trackers/people/${contactId}`)
  }

  const saveCustomColumnLabel = (columnId: string) => {
    setColumns(columns.map((col) => (col.id === columnId ? { ...col, customLabel: newColumnLabel } : col)))
    setEditingColumn(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex justify-between items-center border-b">
        <div className="flex items-center">
          <Checkbox
            id="select-all"
            checked={selectedContacts.length > 0 && selectedContacts.length === contacts.length}
            onCheckedChange={handleSelectAll}
            className="mr-2"
          />
          <label htmlFor="select-all" className="text-sm text-gray-600">
            {selectedContacts.length} selected
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
              <DropdownMenuCheckboxItem checked={false}>Location</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={false}>Status</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <div className="p-2">
                <h4 className="mb-2 font-medium text-sm">Column Visibility & Customization</h4>
                <p className="text-xs text-gray-500 mb-2">Select columns to show/hide and customize column names</p>
              </div>
              {columns.map((column) => (
                <div key={column.id} className="flex items-center px-2 py-1.5 hover:bg-gray-100 rounded-sm">
                  <DropdownMenuCheckboxItem
                    checked={column.visible}
                    onCheckedChange={() => toggleColumn(column.id)}
                    className="flex-1"
                  >
                    {editingColumn === column.id ? (
                      <div className="flex items-center space-x-2 w-full" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="text"
                          value={newColumnLabel}
                          onChange={(e) => setNewColumnLabel(e.target.value)}
                          className="border rounded px-2 py-1 text-sm w-full"
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === "Enter") saveCustomColumnLabel(column.id)
                            if (e.key === "Escape") setEditingColumn(null)
                          }}
                        />
                      </div>
                    ) : (
                      <span>{column.customLabel || column.label}</span>
                    )}
                  </DropdownMenuCheckboxItem>
                  {column.editable && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        if (editingColumn === column.id) {
                          saveCustomColumnLabel(column.id)
                        } else {
                          setEditingColumn(column.id)
                          setNewColumnLabel(column.customLabel || column.label)
                        }
                      }}
                      className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1"
                    >
                      {editingColumn === column.id ? "Save" : "Edit"}
                    </button>
                  )}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="border rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="w-10 p-4">
                  <Checkbox
                    checked={selectedContacts.length > 0 && selectedContacts.length === contacts.length}
                    onCheckedChange={handleSelectAll}
                  />
                </th>
                {columns.map(
                  (column) =>
                    column.visible && (
                      <th key={column.id} className="text-left p-4 font-medium text-gray-600">
                        <button className="flex items-center" onClick={() => handleSort(column.id)}>
                          {column.customLabel || column.label}
                          {sortConfig.column === column.id ? (
                            sortConfig.direction === "asc" ? (
                              <ChevronDown className="h-4 w-4 ml-1" />
                            ) : (
                              <ChevronUp className="h-4 w-4 ml-1" />
                            )
                          ) : (
                            <ChevronDown className="h-4 w-4 ml-1" />
                          )}
                        </button>
                      </th>
                    ),
                )}
              </tr>
            </thead>
            <tbody>
              {sortedContacts.map((contact) => (
                <tr key={contact.id} className="border-b">
                  <td className="p-4">
                    <Checkbox
                      checked={selectedContacts.includes(contact.id)}
                      onCheckedChange={() => handleSelectContact(contact.id)}
                    />
                  </td>
                  {columns.find((col) => col.id === "fullName")?.visible && (
                    <td
                      className="p-4 cursor-pointer hover:text-[#00574B]"
                      onClick={() => navigateToContact(contact.id)}
                    >
                      {contact.fullName}
                    </td>
                  )}
                  {columns.find((col) => col.id === "company")?.visible && (
                    <td
                      className="p-4 cursor-pointer hover:text-[#00574B]"
                      onClick={() => navigateToContact(contact.id)}
                    >
                      {contact.company}
                    </td>
                  )}
                  {columns.find((col) => col.id === "location")?.visible && <td className="p-4">{contact.location}</td>}
                  {columns.find((col) => col.id === "goal")?.visible && <td className="p-4">{contact.goal}</td>}
                  {columns.find((col) => col.id === "status")?.visible && <td className="p-4">{contact.status}</td>}
                  {columns.find((col) => col.id === "relationship")?.visible && (
                    <td className="p-4">{contact.relationship}</td>
                  )}
                  {columns.find((col) => col.id === "followUp")?.visible && (
                    <td className="p-4 bg-amber-100">{contact.followUp}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Contact Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Add a New Contact</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="after:content-['*'] after:text-red-500 after:ml-0.5">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  value={newContact.firstName || ""}
                  onChange={(e) => setNewContact({ ...newContact, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="after:content-['*'] after:text-red-500 after:ml-0.5">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  value={newContact.lastName || ""}
                  onChange={(e) => setNewContact({ ...newContact, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                placeholder="Job Title"
                value={newContact.jobTitle || ""}
                onChange={(e) => setNewContact({ ...newContact, jobTitle: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                placeholder="Company Name"
                value={newContact.company || ""}
                onChange={(e) => setNewContact({ ...newContact, company: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email Address"
                value={newContact.email || ""}
                onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                placeholder="LinkedIn Profile"
                value={newContact.linkedin || ""}
                onChange={(e) => setNewContact({ ...newContact, linkedin: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input
                id="twitter"
                placeholder="Twitter Handle URL"
                value={newContact.twitter || ""}
                onChange={(e) => setNewContact({ ...newContact, twitter: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Location"
                  value={newContact.location || ""}
                  onChange={(e) => setNewContact({ ...newContact, location: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Phone"
                  value={newContact.phone || ""}
                  onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              className="bg-[#00574B] hover:bg-[#004a3f]"
              onClick={handleAddContact}
              disabled={!newContact.firstName || !newContact.lastName}
            >
              Save Contact
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
