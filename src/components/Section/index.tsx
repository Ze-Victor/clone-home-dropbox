import React from 'react';

import { Container, HeaderWrapper, Header, DropboxIcon, Content } from './style';

interface Props {
  variant: "blue" | "beige" | "white" | "black";
  title: string;
  description: string;
}

const Sections: React.FC<Props> = ({ variant, title, description }) => {

  const buttonText = Math.round(Math.random());

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <div>
      <Container className={variant}>
        <HeaderWrapper>
          <Header>
            <h1>
              <DropboxIcon />
              <span>Dropbox</span>
            </h1>

            <button onClick={handleToggle}>{buttonText === 0 ? 'Interagir' : 'Acessar'}</button>
          </Header>
        </HeaderWrapper>
        <Content>
          <h2>{title}</h2>
          <p>{description}</p>

        </Content>
      </Container>
    </div>
  );
}

export default Sections;