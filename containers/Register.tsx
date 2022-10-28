import { Console } from 'console';
import type {NextPage} from 'next';
import Router from 'next/router';
import { NextResponse } from 'next/server';
import { Component, useState } from 'react';
import { executeRequest } from '../services/api';


export const Register : NextPage = () =>{

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const doRegister = async () => {
        try{
            if (!email || !name || !password) {
                setError('Favor preencher os campos.');
                return;
            }
            setLoading(true);

            const body = {
                name,
                email,
                password
            };

            const result = await executeRequest('cadastro', 'POST', body);
                if (result && result.data){
                    Router.push('/');
                }
        }catch(e: any){
            console.log('Ocorreu um erro ao cadastrar novo usuario', e);
            if (e?.response?.data?.error){
                setError(e?.response?.data?.error);
            } else {
                setError('Ocorreu um erro ao cadastrar, tente novamente.');
            }
        }

        setLoading(false);
    }

    return (
        <div className='container-register'>
            <img src='/logo.svg' alt='Logo Fiap' className='logo'/>
            <div className="form">
                {error && <p>{error}</p>}
                <div>
                    <img src='/user.svg' className='icon-user' alt='Nome'/> 
                    <input type="text" placeholder="Nome" 
                        value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <img src='/mail.svg' alt='Email'/> 
                    <input type="text" placeholder="Email" 
                        value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <img src='/lock.svg' alt='Senha'/> 
                    <input type="password" placeholder="Senha" 
                        value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type='button' onClick={doRegister} disabled={loading}>{loading ? '...Aguarde': 'Cadastrar'}</button>
                <p className='back'><a href='/'>Voltar</a></p>
            </div>
        </div>
    );
}