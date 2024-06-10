import { Container } from '@mui/material';
import { ApolloClientProvider } from './lib/apollo/client';
import { AppThemeProvider } from './lib/mui/theme';
import SearchBooks from './features/books';
import ReadingList from './features/readingList';
import QueryBooks from './features/books/hocs/QueryBooks';

function App() {
	return (
		<AppThemeProvider>
			<ApolloClientProvider>
				<Container>
					<QueryBooks>
						<SearchBooks />
						<ReadingList />
					</QueryBooks>
				</Container>
			</ApolloClientProvider>
		</AppThemeProvider>
	);
}

export default App;
