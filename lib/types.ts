export interface VolunteerFormData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  interests: string[]
  message?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  address: string
  description?: string
  rsvpUrl?: string
}

export interface Issue {
  id: string
  title: string
  body: string
  icon?: string
}

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}