import type { ApiResponse } from './server.models'

// Профиль
export type UserProfileResponse = ApiResponse<UserProfile>
export type UserInfo = Pick<UserProfile, 'firstName' | 'lastName' | 'avatarUrl'>
export type UserProfile = {
  id: string
  userName: string
  firstName: string
  lastName: string
  patronymic: string | null
  avatarUrl: string
  email: string
  roles: string[] | null
  phoneNumber: string | null
  positionName: string | null
}
