export type SignLink = {
  src: string
  title: string
  text: string
}

export type RecoveryForm = Omit<AuthForm, 'password'>

export type AuthForm = {
  email: string
  password: string
}
export type BaseParams = {
  client_id: string
  client_secret: string
  scope: string
  grant_type: string
}
export type AuthParamsRequest = BaseParams & {
  password: string
  username: string
}

export type RefeshParamsRequest = BaseParams & {
  refresh_token: string
}
export type AuthResponse = {
  access_token: string
  expires_in: number
  id_token: string
  refresh_token: string
  token_type: string
}
export type ErrorAuthResponse = {
  error: string
  error_description: string
  error_uri: string
}
