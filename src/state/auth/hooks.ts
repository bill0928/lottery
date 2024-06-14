import { useCallback, useEffect, useState } from "react";
import { useAuthState } from "./store";
import credentialCookie from "./cookie";
import { useFetcher } from "@/state/swrHooks";
import { UserInfo, AuthInfo } from "./types";
import { logoutHandel, anonymous } from "./api";
import { checkLogin } from "./util";
import { LOGIN_STATUS } from "../constant";
// import api from "@/state/api";
// import useSWRMutation from "swr/mutation";

export const useAuth = () => {
  const [authState, setAuthState] = useAuthState();

  const guest = 
    async () => {
      const res = await anonymous();
      if(res){
        credentialCookie.set(res)
        setAuthState({
          credential: res,
          tokenLoading: false,
        });
      }
    }

  const logout = () => {
    logoutHandel();
    setAuthState({ credential: undefined, tokenLoading: false });
  }

  return {
    guest,
    logout,
    credential: authState.credential,
    isLogin: !!authState.credential,
    loading: authState.tokenLoading,
    isLegal: !!authState.credential && checkLogin() === LOGIN_STATUS.LOGIN,
  };
};

/** 先不控管，直接覆盖auth资讯 */
export const useUserProfile = () => {
  const [url, set] = useState("");
  const { credential } = useAuth();

  useEffect(() => {
    if (credential) {
      // const { twofa } = credential;
      // if (twofa !== "challenging") {
      //   set("/user/self");
      // }
    }
  }, [credential]);

  const { data, mutate, error } = useFetcher<UserInfo>(url);
  return { data, mutate, error };
};

