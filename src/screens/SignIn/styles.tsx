import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

const TopImage = styled.Image`
    width: 100%;
    height: 360px;
`;

const Content = styled.View`
    margin-top: -40px;
    padding: 0px 50px;
`;

const Title = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
`;

const Subtitle = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    font-size: 15px;
    margin-bottom: 64px;
`;

export { Container, TopImage, Content, Title, Subtitle };
