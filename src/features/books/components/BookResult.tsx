import { Box, Typography } from '@mui/material';
import { book } from '../types';
import { ReactNode } from 'react';

const BookResult = ({
	author,
	children,
	title,
	coverPhotoURL,
}: Omit<book, 'readingLevel'> & {
	children: ReactNode;
}) => {
	return (
		<Box
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'flex-start'}
			marginBottom={1}
			minWidth={600}
			gap={1}
		>
			<Box
				loading="lazy"
				component="img"
				sx={{ width: 140, height: 140, borderRadius: 2 }}
				src={`/src/${coverPhotoURL}`}
				alt={'A picture of a reading book'}
			/>
			<Box
				sx={(theme) => ({
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
					[theme.breakpoints.down('md')]: {
						maxWidth: 200,
					},
				})}
			>
				<Box sx={{ flex: '1 0 auto', p: 0 }}>
					<Typography
						overflow={'hidden'}
						textOverflow={'ellipsis'}
						display={'block'}
						component="h3"
						variant="h6"
						whiteSpace={'nowrap'}
					>
						{title}
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						by {author}
					</Typography>
				</Box>
			</Box>
			{children}
		</Box>
	);
};

export default BookResult;
