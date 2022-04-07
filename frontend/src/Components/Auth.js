// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(localStorage.getItem("User")); // reads from localStorage

//   const login = (user) => {
//     setUser(user);
//     localStorage.setItem("User", user);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.clear();
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
