import { StyledModalPassword } from "./style";
import { useForm, SubmitHandler } from 'react-hook-form'
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from '../../../contexts/auth.context';
import { iSendEmail, sendEmailSchema, } from '../../../schemas/users.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from "../../input/index";


function ModalPassword() {
  const { setModalPassword, sendEmail, loading } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<iSendEmail>({
    resolver: zodResolver(sendEmailSchema)
  })

  const submit: SubmitHandler<iSendEmail> = (data) => {
    sendEmail(data)
  }

  return (
    <StyledModalPassword>
      <div className="modal-white-background">
        <div>
          <span onClick={()=> setModalPassword(false)}>
            <AiOutlineClose />
          </span>
          <form onSubmit={handleSubmit(submit)} noValidate>
            <p>Informe seu e-mail para enviarmos o link de recuperação</p>
            <Input id='email' label='Email' placeholder="Digitar email" type="email" register={register('email')} error={errors['email']?.message} disabled={false}/>
            <button type='submit'>{loading ? (<p className="spinner"></p>) : "Enviar email"}</button>
          </form>
        </div>
      </div>
    </StyledModalPassword>
  );
}

export default ModalPassword;