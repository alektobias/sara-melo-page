import React from 'react';
import Logo from '../Logo';
import Link from 'next/link'
import { MenuContainer } from './styles';

const Menu: React.FC = () => {
  return (
      <MenuContainer>
        <nav>
          <div>
            <Logo/>
            <h1>Sara Melo</h1>
          </div>
          
          <ul>
            <li><Link href="#inicio">Home</Link></li>
            <li><Link href="#sobre">Sobre</Link></li>
            <li><Link href="#depoimentos">Depoimentos</Link></li>
            <li><Link href="#serviços">Serviços</Link></li>
            <li><Link href="#contatos">Contatos</Link></li>
          </ul>
        </nav>
      </MenuContainer>
  );
}

export default Menu;