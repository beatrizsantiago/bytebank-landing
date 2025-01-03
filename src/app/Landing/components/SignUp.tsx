import { useState } from 'react';
import { Input, Button } from '@bytebank/styleguide';

import Modal from '../../../components/Modal';
import SignUpLogo from '../../../assets/sign_up.svg';
import useApi from '../../../services/useApi'
import toast from '../../../utils/toast';

type Props = {
  onClose: () => void;
};

const SignUp = ({ onClose }:Props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignUpClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const response = await useApi({
      url: 'user',
      options: {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      },
    })

    const data = await response.json();

    if (data?.result?.id) {
      toast({ text: 'Conta criada com sucesso!', type: 'SUCCESS' });
      onClose();
    } else {
      toast({ text: 'Erro ao criar conta, tente novamente!', type: 'ERROR' });
    }

    setLoading(false);    
  };

  return (
    <Modal isVisible onClose={onClose}>
      <form className="flex justify-center my-4" onSubmit={onSignUpClick}>
        <div className="w-11/12 md:w-10/12 flex flex-col items-center z-10 relative">
          <img
            src={SignUpLogo}
            alt="Cadastrar"
            width={350}
            height={260}
          />

          <h2 className="font-bold text-center text-lg my-7 leading-5">
            Preencha os campos abaixo para criar sua conta corrente!
          </h2>

          <div className="w-full flex flex-col mb-6">
            <label className="mb-1"><b>Nome</b></label>
            <Input
              placeholder="Digite seu nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength={3}
              required
            />
          </div>

          <div className="w-full flex flex-col mb-6">
            <label className="mb-1"><b>E-mail</b></label>
            <Input
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="w-full flex flex-col mb-6">
            <label className="mb-1"><b>Senha</b></label>
            <Input
              placeholder="Digite sua senha"
              type="password"
              className="max-w-[280px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
            <p className="text-secondary-main underline">Esqueci a senha!</p>
          </div>

          <div className="w-full flex items-center mb-8">
            <input
              type="checkbox"
              className="appearance-none min-w-6 min-h-6 bg-gray-100 border-2 border-secondary-main rounded checked:bg-secondary-main checked:border-transparent"
              required
            />
            <label htmlFor="checkbox" className="leading-4 ml-3">
              Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.
            </label>
          </div>

          <Button
            text="Criar conta"
            className="max-w-[250px]"
            color="secondary"
            type="submit"
            loading={loading}
            disabled={loading}
          />
        </div>
      </form>
    </Modal>
  );
};

export default SignUp;
