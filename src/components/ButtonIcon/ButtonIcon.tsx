import React from 'react';
import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { Container, IconWrapper, Title, Icon } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
    title: string;
}

export function ButtonIcon({ title, style, ...rest }: ButtonIconProps) {
    return (
        <Container style={style as any} {...rest}>
            <IconWrapper>
                <Icon source={DiscordImg} />
            </IconWrapper>

            <Title>{title}</Title>
        </Container>
    );
}
