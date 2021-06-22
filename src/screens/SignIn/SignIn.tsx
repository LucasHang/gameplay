import React from 'react';

import { ButtonIcon } from '../../components/ButtonIcon';

import IlustrationImg from '../../assets/illustration.png';
import { Container, TopImage, Content, Title, Subtitle } from './styles';

export function SignIn() {
    return (
        <Container>
            <TopImage source={IlustrationImg} resizeMode="stretch" />

            <Content>
                <Title>
                    Organize{`\n`}
                    suas jogatinas{`\n`}
                    facilmente
                </Title>

                <Subtitle>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos
                </Subtitle>

                <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
            </Content>
        </Container>
    );
}
