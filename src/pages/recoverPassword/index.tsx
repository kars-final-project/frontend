import { StyledRecoverPassword } from "./style";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  iPasswordRecovery,
  passwordRecoverySchema,
} from "../../schemas/users.schema";
import { useAuth } from "../../contexts/auth.context";
import  Input  from "../../components/input"

function RecoverPassword() {
  const { passwordRecovery } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPasswordRecovery>({
    resolver: zodResolver(passwordRecoverySchema),
  });

  const params = useParams();

  const token = params.token;

  const submit: SubmitHandler<iPasswordRecovery> = (data) => {
    console.log(data);
    passwordRecovery(data, token as string);
  };

  return (
    <StyledRecoverPassword>
      <Header />
      <div className="div-form-recover">
        <h2>Altere sua senha</h2>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            id="password"
            label="Nova senha"
            placeholder="Digitar nova senha"
            type="password"
            register={register("password")}
            error={errors["password"]?.message}
            disabled={false}
          />
          <Input
            id="confirmPassword"
            label="Confirmar senha"
            placeholder="Digitar nova senha"
            type="password"
            register={register("confirmPassword")}
            error={errors["confirmPassword"]?.message}
            disabled={false}
          />
          <button type="submit" className="button-brand">
            Alterar senha
          </button>
        </form>
      </div>
      <Footer />
    </StyledRecoverPassword>
  );
}

export default RecoverPassword;
