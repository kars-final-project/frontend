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
    loading: boolean
  }
  
  const AuthContext = createContext<authProviderData>({} as authProviderData);
  
  function AuthProvider({ children }: Props) {
    const [modalPassword, setModalPassword] = useState(false);
    const [modalUpdateUser, setModalUpdateUser] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function sendEmail(data: iSendEmail) {
      try {
          setLoading(true)
          const response = await localAPI.post("/users/resetPassword", data)
          setModalPassword(false)
          toast.success("Email enviado com sucesso", {
            autoClose: 1000
          })
      } catch (error) {
          toast.error("Usuario não encontrado", {
            autoClose: 1000
          })
          console.log(error)
      } finally {
          setLoading(false)
      }
    }

    async function passwordRecovery(data: iPasswordRecovery, token: string) {
      try {
          setLoading(true)
          const response = await localAPI.patch(`/users/resetPassword/${token}`, data)
          toast.success("Senha alterada com sucesso", {
            autoClose: 1000
          })
          setTimeout(() => {
            navigate("/login")
          }, 500);
      } catch (error) {
          toast.error("Não foi possivel alterar a senha", {
            autoClose: 1000
          })
          console.log(error)
      } finally {
        setLoading(false)
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
          loading,
        }}
      >
          {children}
      </AuthContext.Provider>
    );
  }
  
  export default AuthProvider;
  
  export const useAuth = () => useContext(AuthContext);