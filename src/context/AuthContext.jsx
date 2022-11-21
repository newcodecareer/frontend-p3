import { createContext } from "react";

export const AuthContext = createContext(null);

// export const AuthContextProvider = ({ children }) => {
//   const [isLogin, setIsLogin] = useState(false);
//   return <AuthContext.Provider value={{ isLogin, setIsLogin }}>{children}</AuthContext.Provider>;
// };

// export const useAuthContext = () => {
//   try {
//     const { isLogin, setIsLogin } = useContext(AuthContext);
//     //   console.log(`auth login: ${isLogin}`);}
//     return { isLogin, setIsLogin };
//   } catch (e) {
//     throw new Error("Please check context provider");
//   }
// };
