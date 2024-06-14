import api from '@/state/api'
import { Auth, AuthInfo, UserInfo } from './types'
import credentialCookie from './cookie'
import { errCodes } from '@/state/constant'

const [, NeedVerified] = errCodes
/** 登出后清空 cookie */
export const logoutHandel = async () => {
  try {
    await api.post("/player/logout");
    credentialCookie.cleanup()
  } catch (error) {
    console.error(error)
  }
}
export const anonymous = async () => {
  try {
    const response = await api.get("/player/guest");
    if ("error" in response) return undefined
    const auth: UserInfo = response.data
    credentialCookie.set(auth);
    return auth
  } catch (error) {
    console.error(error)
    return undefined
  }
}

