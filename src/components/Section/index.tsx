import React from 'react';

import { Container, Content } from './style';

interface Props {
  variant: "blue" | "beige" | "white" | "black";
  title: string;
  description: string;
}

const Sections: React.FC<Props> = ({ variant, title, description }) => {
  return (
    <div>
      <Container>
        <Content>
          <h1>{title}</h1>
          <p>{description}</p>

        </Content>
      </Container>
    </div>
  );
}

export default Sections;