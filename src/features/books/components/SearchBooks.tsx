import { Box, Button, Container, InputBase, Typography } from '@mui/material';
import { useRef, useState } from 'react';

import BookResult from './BookResult';
import {
	useReadingList,
	useReadingListActions,
} from '@/features/readingList/store';
import { keyframes } from '@emotion/react';
import { book } from '../types';
import useBooks from '../hooks/useBooks';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MIN_SEARCH_QUERY_LENGTH = 3;
const SearchBooks = () => {
	const inputBaseRef = useRef<HTMLElement>();

	const [searchQuery, setSearchQuery] = useState('');
	const books = useBooks();
	const formattedSearchQuery = searchQuery.trim().toLowerCase();
	const showSearchResults =
		formattedSearchQuery.length >= MIN_SEARCH_QUERY_LENGTH;
	const booksFoundByQuery = books.filter(({ title }) =>
		title.toLowerCase().includes(formattedSearchQuery)
	);
	const emptyResults = booksFoundByQuery.length === 0;
	const readingList = useReadingList();
	const { addBookToReadingList, removeBookFromReadingList } =
		useReadingListActions();
	const isAdded = (bookToMatch: book) => (bookInTheList: book) =>
		bookToMatch.title === bookInTheList.title;
	return (
		<Container>
			<Box
				bgcolor={'white'}
				width={'100%'}
				marginTop={'32px'}
				position={'relative'}
				padding={2}
				borderRadius={2}
			>
				<InputBase
					ref={inputBaseRef}
					fullWidth
					autoFocus
					value={searchQuery}
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
					sx={{
						border: '1px solid',
						borderColor: (theme) => theme.palette.primary.main,
						padding: '8px',
						paddingLeft: '16px',
						borderRadius: '16px',
					}}
					placeholder="Search Books...Enter at least 3 characters"
				/>
				{Boolean(formattedSearchQuery.length) && (
					<Box
						sx={{
							boxShadow:
								'0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
							borderRadius: '8px',
							padding: '10px',
							maxHeight: '300px',
							overflow: 'auto',
							animation: `${fadeInUp} 1s forwards`,
						}}
						marginTop={'8px'}
						width={'100%'}
					>
						{!showSearchResults ? (
							<Typography
								display={'block'}
								component={'span'}
								textAlign={'center'}
								variant="subtitle1"
								color="text.secondary"
							>
								Enter at least 3 characters ...
							</Typography>
						) : emptyResults ? (
							<Typography
								display={'block'}
								component={'span'}
								textAlign={'center'}
								variant="subtitle1"
								color="text.secondary"
							>
								No matching results found for <strong>{searchQuery}</strong>
							</Typography>
						) : (
							<>
								{booksFoundByQuery.map((book, index) => (
									<BookResult
										key={index + book.title}
										title={book.title}
										author={book.author}
										coverPhotoURL={book.coverPhotoURL}
									>
										{readingList.some(isAdded(book)) ? (
											<Button
												color="error"
												variant="contained"
												onClick={() => {
													removeBookFromReadingList(book.title);
												}}
												sx={{
													borderRadius: '50px',
													minWidth: '64px',
													fontWeight: 700,
												}}
											>
												Remove
											</Button>
										) : (
											<Button
												variant="contained"
												onClick={() => {
													addBookToReadingList(book);
												}}
												sx={{
													borderRadius: '50px',
													fontWeight: 700,
													minWidth: '64px',
												}}
											>
												Add to Reading List
											</Button>
										)}
									</BookResult>
								))}
							</>
						)}
					</Box>
				)}
			</Box>
		</Container>
	);
};

export default SearchBooks;
