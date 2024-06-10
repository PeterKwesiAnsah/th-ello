import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: import.meta.env.VITE_BASE_URI,
	cache: new InMemoryCache(),
});

export const ApolloClientProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
