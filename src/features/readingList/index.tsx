import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BookTile from './components/BookTile';
import { useReadingList, useReadingListActions } from './store';

const ReadingList = () => {
	const readingList = useReadingList();
	const { removeBookFromReadingList } = useReadingListActions();

	return (
		<Box marginTop={'32px'}>
			<Typography
				color={'primary.dark'}
				marginBottom={'16px'}
				component="h2"
				variant="h5"
			>
				Reading List
			</Typography>
			{readingList.length ? (
				<Box gap={2.5} display={'flex'} sx={{ flexWrap: 'wrap' }}>
					{readingList.map(({ coverPhotoURL, title }, index) => (
						<BookTile
							key={title + index}
							coverPhotoURL={coverPhotoURL}
							onRemoveBookFromList={() => {
								removeBookFromReadingList(title);
							}}
						/>
					))}
				</Box>
			) : (
				<Typography
					display={'block'}
					component={'span'}
					textAlign={'center'}
					variant="subtitle1"
					color="text.secondary"
				>
					Added books will appear here.
				</Typography>
			)}
		</Box>
	);
};

export default ReadingList;
