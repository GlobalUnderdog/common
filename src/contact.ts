export type CollectContactStatus = 'invalid' | 'success' | 'error'

export type Projects =
  | 'virtual-coffee'
  | 'social-pull'
  | 'globalunderdog'
  | 'insurance'

export interface Contact {
  /** Timestamp in ms */
  created?: number
  id?: string
  name?: string
  company?: string
  email: string
  project: Projects
  linkedinUrl?: string
  googleTrackingId?: string
}

export interface ContactVirtualCoffee extends Contact {
  project: 'virtual-coffee'
  asMentee: boolean
  asMentor: boolean
}

export interface ContactSocialPull extends Contact {
  project: 'social-pull'
}

export interface ContactInsurance extends Contact {
  project: 'insurance'
  name: string
}
