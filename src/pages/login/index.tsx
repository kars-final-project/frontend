import React from 'react'
import { StyledLogin } from './style'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Input from '../../components/input/index'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schema } from './validator'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { localAPI } from '../../services/index'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    const navigate = useNavigate()

    async function submitLogin(data: LoginData) {
        console.log(data)
        try {
            const response = await localAPI.post("/login", data)
      
            const { token } = response.data
      
            localAPI.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem("token", token)
      
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <StyledLogin>
        <Header />
            <div className='div-form'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(submitLogin)}>
                    <div className='div-inputs'>
                        <Input
                            id='email'
                            label='Email'
                            placeholder="Digitar email"
                            type="email"
                            register={register('email')}
                            error={errors['email']?.message}
                            disabled={false}
                            />
                        <div>
                            <Input
                                id='password'
                                label='Senha'
                                placeholder="Digitar senha"
                                type="password"
                                register={register('password')}
                                error={errors['password']?.message}
                                disabled={false}
                                />
                            <a>Esqueci minha senha</a>
                        </div>
                        </div>
                    <div className='div-buttons'>
                        <button type='submit' className='button-brand'>Entrar</button>
                        <p>Ainda não possui conta?</p>
                        <Link to={'/register'}><button className='button-white'>Cadastrar</button></Link>
                    </div>
                </form>
            </div>
        <Footer />
        </StyledLogin>
    )
}

export default Login