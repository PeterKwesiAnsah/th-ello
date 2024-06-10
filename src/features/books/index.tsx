import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import SearchBooks from './components/SearchBooks';

const Books = () => {
	const [showSearchBooksModal, setShowSearchBooksModal] = useState(false);
	return (
		<Box width={'100%'} marginTop={'32px'} position={'relative'}>
			<Button
				fullWidth
				variant="outlined"
				onClick={() => {
					setShowSearchBooksModal(true);
				}}
				sx={{
					padding: '8px',
					paddingLeft: '16px',
					borderRadius: '16px',
					justifyContent: 'flex-start',
					textDecoration: 'capitalize',
				}}
			>
				Search Books...
			</Button>
			<Modal
				open={showSearchBooksModal}
				onClose={() => {
					setShowSearchBooksModal(false);
				}}
			>
				<SearchBooks />
			</Modal>
		</Box>
	);
};

export default Books;
