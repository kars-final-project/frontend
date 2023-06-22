import React, { ReactNode, createContext, useContext, useState } from 'react';
import { localAPI } from '../services/index';
import { iSendEmail, iPasswordRecovery } from 'schemas/users.schema';
import { useNavigate } from 'react-router-dom';

interface Props {
    children: ReactNode;
  }
  
  interface authProviderData {
    modalPassword: boolean;
    setModalPassword: React.Dispatch<React.SetStateAction<boolean>>;
    sendEmail: (data: iSendEmail) => void
    passwordRecovery: (data: iPasswordRecovery, token: string) => void
  }
  
  const AuthContext = createContext<authProviderData>({} as authProviderData);
  
  function AuthProvider({ children }: Props) {
    const [modalPassword, setModalPassword] = useState(false);

    const navigate = useNavigate()

    async function sendEmail(data: iSendEmail) {
      try {
          const response = await localAPI.post("/users/resetPassword", data)
          setModalPassword(false)
      } catch (error) {
          console.log(error)
      }
    }

    async function passwordRecovery(data: iPasswordRecovery, token: string) {
      try {
          const response = await localAPI.patch(`/users/resetPassword/${token}`, data)
          navigate("/login")
      } catch (error) {
          console.log(error)
      }
    }
  
    return (
      <AuthContext.Provider
        value={{
          modalPassword,
          setModalPassword,
          sendEmail,
          passwordRecovery
        }}
      >
          {children}
      </AuthContext.Provider>
    );
  }
  
  export default AuthProvider;
  
  export const useAuth = () => useContext(AuthContext);