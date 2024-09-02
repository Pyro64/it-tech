import type { ServiceTypeKeys } from './service.models'

export type BidPersonal = {
  organization: string
  phone: string
  name: string
  email: string
  industry: string
}
export type BidInfo = BidPersonal & {
  services: ServiceTypeKeys[]
}
