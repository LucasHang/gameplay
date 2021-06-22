import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/global/styles/theme';
import { SignIn } from './src/screens/SignIn';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <SignIn />
            <StatusBar style="inverted" />
        </ThemeProvider>
    );
}
