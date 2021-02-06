export type CollectContactStatus = 'invalid' | 'success' | 'error'

export type Projects =
  | 'virtual-coffee'
  | 'social-pull'
  | 'globalunderdog'
  | 'insurance'
  | 'dataka'
  | 'evergreen'

export interface Contact {
  /** Timestamp in ms */
  created?: number
  id?: string
  name?: string
  company?: string
  email: string
  phone?: string
  project: Projects
  linkedinUrl?: string
  googleTrackingId?: string
  newsletter?: boolean
}

export interface ContactVirtualCoffee extends Contact {
  project: 'virtual-coffee'
  asMentee: boolean
  asMentor: boolean
}

export interface ContactSocialPull extends Contact {
  project: 'social-pull'
  pricing: number[]
  price: string | number
}

export interface ContactInsurance extends Contact {
  project: 'insurance'
  name: string
  fromLearnMore: boolean
}

export interface ContactDataka extends Contact {
  project: 'dataka'
  name: string
  email: string
}

export interface ContactEvergreen extends Contact {
  project: 'evergreen'
  name: string
  email: string
}
