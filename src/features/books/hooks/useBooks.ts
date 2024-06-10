import { useApolloClient } from '@apollo/client';
import { GET_BOOKS } from '../gql/queries';
import { book } from '../types';

export default function useBooks() {
	const client = useApolloClient();
	return client.readQuery<{
		books: book[];
	}>({
		query: GET_BOOKS,
	})!.books;
}
