import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/1993081?s=460&u=63c9a59beb3567b3b7aae98960ba695b47ddc3b8&v=4"
            alt="Profile"
          />
          <div>
            <strong>github/V1n1c1us</strong>
            <p>
              Seeing something unexpected? Take a look at the GitHub profile
              guide 🚀.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/1993081?s=460&u=63c9a59beb3567b3b7aae98960ba695b47ddc3b8&v=4"
            alt="Profile"
          />
          <div>
            <strong>github/V1n1c1us</strong>
            <p>
              Seeing something unexpected? Take a look at the GitHub profile
              guide 🚀.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/1993081?s=460&u=63c9a59beb3567b3b7aae98960ba695b47ddc3b8&v=4"
            alt="Profile"
          />
          <div>
            <strong>github/V1n1c1us</strong>
            <p>
              Seeing something unexpected? Take a look at the GitHub profile
              guide 🚀.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
