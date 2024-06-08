import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'Mulish, Arial',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
        @font-face {
          font-family: 'Mulish';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
		},
	},
});

export const AppThemeProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
