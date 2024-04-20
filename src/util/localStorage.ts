import decodeToken from "./decodeToken";
const keyName = "key";

export const setKeyToLocalStorage = (key: string) => {
  localStorage.setItem(keyName, key);
};

export const getKeyFromLocalStorage = (key:string) => {
    if (!key || typeof window === "undefined") {
        return "";
    }
    return localStorage.getItem(key);
};

export const deleteKeyFromLocalStorage = () => {
    localStorage.removeItem(keyName);
}

export const loggedInUserInfo = () => {
    const key = getKeyFromLocalStorage('key') as string;
    if(key){
        const decodeJwt:any = decodeToken(key);
        return {
            ...decodeJwt,
            role:decodeJwt?.role
        }
    }
};
