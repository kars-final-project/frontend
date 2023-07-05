import React, { ReactNode, createContext, useContext, useState } from "react";
import { localAPI } from "../services/index";
import {
  iSendEmail,
  iPasswordRecovery,
  iUpdateUser,
  LoginData,
  RegisterData,
  iUpdateAddress,
} from "../schemas/users.schema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  children: ReactNode;
}

interface authProviderData {
  modalPassword: boolean;
  setModalPassword: React.Dispatch<React.SetStateAction<boolean>>;
  modalUpdateUser: boolean;
  setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
  modalUpdateAddress: boolean;
  setModalUpdateAddress: React.Dispatch<React.SetStateAction<boolean>>;
  sendEmail: (data: iSendEmail) => void;
  passwordRecovery: (data: iPasswordRecovery, token: string) => void;
  updateUser: (data: iUpdateUser, id: string) => void;
  updateAddress: (data: iUpdateAddress) => void;
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  submitDelete(): Promise<void>;
  submitLogin(data: LoginData): Promise<void>;
  submitRegister(data: RegisterData): Promise<void>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  loading: boolean;
  getUserData: (id: number) => void;
  nameInitial: string;
}

export interface UserData {
  id: number;
  birthday: string;
  cpf: string;
  description: string;
  email: string;
  name: string;
  phone: string;
  type: string;
}

const AuthContext = createContext<authProviderData>({} as authProviderData);

function AuthProvider({ children }: Props) {
  const [modalPassword, setModalPassword] = useState(false);
  const [modalUpdateUser, setModalUpdateUser] = useState(false);
  const [modalUpdateAddress, setModalUpdateAddress] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [type, setType] = useState("COMPRADOR");
  const [loading, setLoading] = useState(false);
  const [nameInitial, setNameInitial] = useState("");

  const navigate = useNavigate();

  function getNameInitial(name: string) {
    const initial = name.split(" ").map((word) => word.charAt(0));
    const initialString = initial.join("").toUpperCase();
    setNameInitial(initialString);
  }

  async function getUserData(id: number) {
    try {
      const response = await localAPI.get(`users/${id}`);
      setUser(response.data);
      getNameInitial(response.data.name);
    } catch (error) {
      console.log(error);
    }
  }

  async function submitLogin(data: LoginData) {
    console.log(data);
    try {
      const response = await localAPI.post("/login", data);

      const { token } = response.data;

      localAPI.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  async function submitRegister(data: RegisterData) {
    try {
      await localAPI.post("/users", { ...data, type: type });
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  async function submitDelete() {
    try {
      await localAPI.delete(`/users/${user?.id}`);
      localStorage.clear;
    } catch (error) {
      console.error(error);
    }
  }

  async function sendEmail(data: iSendEmail) {
    try {
      setLoading(true);
      const response = await localAPI.post("/users/resetPassword", data);
      setModalPassword(false);
      toast.success("Email enviado com sucesso", {
        autoClose: 1000,
      });
    } catch (error) {
      toast.error("Usuario não encontrado", {
        autoClose: 1000,
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function passwordRecovery(data: iPasswordRecovery, token: string) {
    try {
      setLoading(true);
      const response = await localAPI.patch(
        `/users/resetPassword/${token}`,
        data
      );
      toast.success("Senha alterada com sucesso", {
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (error) {
      toast.error("Não foi possivel alterar a senha", {
        autoClose: 1000,
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateUser(data: iUpdateUser, id: string) {
    const token = localStorage.getItem("@kars_login");

    try {
      const response = await localAPI.patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Atualizado com sucesso", {
        autoClose: 1000,
      });
      setModalUpdateUser(false);
    } catch (error) {
      toast.error("Não foi possivel atualizar usuario", {
        autoClose: 1000,
      });
    }
  }

  async function updateAddress(data: iUpdateAddress) {
    const token = localStorage.getItem("@kars_login");

    try {
      const response = await localAPI.patch(`/adresses`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Atualizado com sucesso", {
        autoClose: 1000,
      });
      setModalUpdateAddress(false);
    } catch (error) {
      toast.error("Não foi possivel atualizar endereço", {
        autoClose: 1000,
      });
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
        updateAddress,
        user,
        setUser,
        submitDelete,
        submitLogin,
        submitRegister,
        setType,
        type,
        loading,
        modalUpdateAddress,
        setModalUpdateAddress,
        getUserData,
        nameInitial,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);