import React from 'react'
import { StyledRegister } from './style'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Input from '../../components/input/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { RegisterData, registerSchema } from '../../schemas/users.schema'
import { useAuth } from '../../contexts/auth.context'

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterData>({
		resolver: zodResolver(registerSchema),
	})

	const { submitRegister, setType, type } = useAuth();

	return (
		<StyledRegister>
			<Header />
			<div className='div-form'>
				<h2>Cadastro</h2>
				<form onSubmit={handleSubmit(submitRegister)}>
					<p>Informações pessoais</p>
					<Input
						id='name'
						label='Nome'
						placeholder='Ex: Samuel Leão'
						type='text'
						register={register('name')}
						error={errors['name']?.message}
						disabled={false}
					/>
					<Input
						id='email'
						label='Email'
						placeholder='Digitar email'
						type='email'
						register={register('email')}
						error={errors['email']?.message}
						disabled={false}
					/>
					<Input
						id='cpf'
						label='CPF'
						placeholder='000.000.000-00'
						type='text'
						register={register('cpf')}
						error={errors['cpf']?.message}
						disabled={false}
					/>
					<Input
						id='phone'
						label='Celular'
						placeholder='(DDD) 90000-0000'
						type='text'
						register={register('phone')}
						error={errors['phone']?.message}
						disabled={false}
					/>
					<Input
						id='birthday'
						label='Data de nascimento'
						placeholder='00/00/00'
						type='text'
						register={register('birthday')}
						error={errors['birthday']?.message}
						disabled={false}
					/>
					<Input
						id='description'
						label='Descrição'
						placeholder='Digitar descrição'
						type='text'
						register={register('description')}
						error={errors['description']?.message}
						disabled={false}
					/>
					<p>Informações de endereço</p>
					<Input
						id='zip_code'
						label='CEP'
						placeholder='00000.000'
						type='text'
						register={register('zip_code')}
						error={errors['zip_code']?.message}
						disabled={false}
					/>
					<Input
						id='state'
						label='Estado'
						placeholder='Digitar Estado'
						type='text'
						register={register('state')}
						error={errors['state']?.message}
						disabled={false}
					/>
					<Input
						id='city'
						label='Cidade'
						placeholder='Digitar cidade'
						type='text'
						register={register('city')}
						error={errors['city']?.message}
						disabled={false}
					/>
					<Input
						id='street'
						label='Rua'
						placeholder='Digitar rua'
						type='text'
						register={register('street')}
						error={errors['street']?.message}
						disabled={false}
					/>
					<div>
						<Input
							id='number'
							label='Número'
							placeholder='Digitar número'
							type='text'
							register={register('number')}
							error={errors['number']?.message}
							disabled={false}
						/>
						<Input
							id='complement'
							label='Complemento'
							placeholder='Digitar número'
							type='text'
							register={register('complement')}
							error={errors['complement']?.message}
							disabled={false}
						/>
					</div>
					<p>Tipo de conta</p>
					<div>
						<button
							className={`${type === 'COMPRADOR' ? 'button-brand' : 'button-white'} `}
							type='button'
							onClick={() => {setType('COMPRADOR')
						console.log(type)}}
						>
							Comprador
						</button>
						<button
							className={`${type === 'ANUNCIANTE' ? 'button-brand' : 'button-white'} `}
							type='button'
							onClick={() => {setType('ANUNCIANTE')
						console.log(type)}}
						>
							Anunciante
						</button>
					</div>
					<Input
						id='password'
						label='Senha'
						placeholder='Digitar senha'
						type='password'
						register={register('password')}
						error={errors['password']?.message}
						disabled={false}
					/>
					{/* <Input
                        id='password'
                        label='Confirmar Senha'
                        placeholder="Digitar senha"
                        type="password"
                        register={register('password')}
                        error={errors['password']?.message}
                        disabled={false}
                    /> */}
					<button
						type='submit'
						className='button-brand'
					>
						Finalizar cadastro
					</button>
				</form>
			</div>
			<Footer />
		</StyledRegister>
	)
}

export default Register
