import React, { ReactNode, createContext, useContext, useState } from 'react';

interface Props {
    children: ReactNode;
  }
  
  interface authProviderData {
    modalPassword: boolean;
    setModalPassword: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const AuthContext = createContext<authProviderData>({} as authProviderData);
  
  function AuthProvider({ children }: Props) {
    const [modalPassword, setModalPassword] = useState(false);
  
    return (
      <AuthContext.Provider
        value={{
          modalPassword,
          setModalPassword,
        }}
      >
          {children}
      </AuthContext.Provider>
    );
  }
  
  export default AuthProvider;
  
  export const useAuth = () => useContext(AuthContext);