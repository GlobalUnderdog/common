export type CollectContactStatus = 'invalid' | 'success' | 'error'

export interface Contact {
  /** Timestamp in ms */
  created?: number
  id?: string
  name?: string
  email: string
  project: string
  linkedinUrl?: string
  googleTrackingId?: string
}

export interface ContactVirtualCoffee extends Contact {
  asMentee: boolean
  asMentor: boolean
}
