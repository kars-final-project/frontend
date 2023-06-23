import React, { ReactNode, createContext, useContext, useState } from 'react';
import { localAPI } from '../services/index';
import { iSendEmail, iPasswordRecovery, iUpdateUser } from 'schemas/users.schema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface Props {
    children: ReactNode;
  }
  
  interface authProviderData {
    modalPassword: boolean;
    modalUpdateUser: boolean
    setModalPassword: React.Dispatch<React.SetStateAction<boolean>>;
    setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
    sendEmail: (data: iSendEmail) => void
    passwordRecovery: (data: iPasswordRecovery, token: string) => void
    updateUser: (data: iUpdateUser, id: string) => void
  }
  
  const AuthContext = createContext<authProviderData>({} as authProviderData);
  
  function AuthProvider({ children }: Props) {
    const [modalPassword, setModalPassword] = useState(false);
    const [modalUpdateUser, setModalUpdateUser] = useState(false)

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

    async function updateUser(data: iUpdateUser, id: string) {
      const token = localStorage.getItem("token")

      try {
        const response = await localAPI.patch(`/users/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        toast.success("Atualizado com sucesso", {
          autoClose: 1000
        })
        setModalUpdateUser(false)
      } catch (error) {
        console.log(error)
      }
    }
  
    return (
      <AuthContext.Provider
        value={{
          modalPassword,
          modalUpdateUser,
          setModalPassword,
          setModalUpdateUser,
          sendEmail,
          passwordRecovery,
          updateUser,
        }}
      >
          {children}
      </AuthContext.Provider>
    );
  }
  
  export default AuthProvider;
  
  export const useAuth = () => useContext(AuthContext);