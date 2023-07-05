import { useAuth } from "../../../contexts/auth.context";
import StyledModalUpdateUser from "./style";
import { iUpdateUser, updateUserSchema } from "../../../schemas/users.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../input";

function UpdateUserModal() {
  const { updateUser, setModalUpdateUser, user, submitDelete } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateUser>({
    resolver: zodResolver(updateUserSchema),
  });

  const submit: SubmitHandler<iUpdateUser> = (data) => {
    updateUser(data, user!.id.toString());
  };

  return (
    <StyledModalUpdateUser>
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <h2>Editar perfil</h2>
            <button onClick={() => setModalUpdateUser(false)} type="button">
              X
            </button>
          </div>
        </div>
        <h3>Informações pessoais</h3>
        <form noValidate onSubmit={handleSubmit(submit)}>
          <Input
            id="name"
            label="Nome"
            placeholder="Ex: Samuel Leão"
            type="text"
            register={register("name")}
            error={errors["name"]?.message}
            disabled={false}
            defaultValue={user?.name}
          />
          <Input
            id="email"
            label="Email"
            placeholder="Digitar email"
            type="email"
            register={register("email")}
            error={errors["email"]?.message}
            disabled={false}
            defaultValue={user?.email}
          />
          <Input
            id="cpf"
            label="CPF"
            placeholder="000.000.000-00"
            type="text"
            register={register("cpf")}
            error={errors["cpf"]?.message}
            disabled={false}
            defaultValue={user?.cpf}
          />
          <Input
            id="phone"
            label="Celular"
            placeholder="(DDD) 90000-0000"
            type="text"
            register={register("phone")}
            error={errors["phone"]?.message}
            disabled={false}
            defaultValue={user?.phone}
          />
          <Input
            id="birthday"
            label="Data de nascimento"
            placeholder="00/00/00"
            type="text"
            register={register("birthday")}
            error={errors["birthday"]?.message}
            disabled={false}
            defaultValue={user?.birthday}
          />
          <label>Descrição</label>
          <textarea
            {...register("description")}
            placeholder="Descrição"
            name="description"
            defaultValue={user?.description}
          />
          <div className="modal-buttons">
            <button
              onClick={() => setModalUpdateUser(false)}
              type="button"
              className="cancel-button"
            >
              Cancelar
            </button>
            <button onClick={submitDelete} type="button" className="delete-button">
              Excluir Perfil
            </button>
            <button type="submit" className="save-button">
              Salvar alterações
            </button>
          </div>
        </form>
      </div>
    </StyledModalUpdateUser>
  );
}

export default UpdateUserModal;
