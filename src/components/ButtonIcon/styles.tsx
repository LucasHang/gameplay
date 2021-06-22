import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    width: '100%';
    height: 56px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
`;

const Title = styled.Text`
    flex: 1;
    color: ${({ theme }) => theme.colors.heading};
    font-size: 15px;
    text-align: center;
`;

const IconWrapper = styled.View`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.colors.line};
`;

const Icon = styled.Image`
    width: 24px;
    height: 18px;
`;

export { Container, Title, IconWrapper, Icon };
