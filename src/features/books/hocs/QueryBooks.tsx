import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../gql/queries';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

const QueryBooks = ({ children }: { children: ReactNode }) => {
	const { loading, data } = useQuery(GET_BOOKS);
	if (loading) {
		return (
			<Box
				display={'grid'}
				sx={{
					placeItems: 'center',
				}}
				minHeight={'100vh'}
			>
				<Typography
					display={'block'}
					component={'span'}
					textAlign={'center'}
					variant="subtitle1"
					color="text.secondary"
				>
					Fetching Books...
				</Typography>
			</Box>
		);
	} else if (data) {
		return children;
	}
	return (
		<Box
			display={'grid'}
			sx={{
				placeItems: 'center',
			}}
			minHeight={'100vh'}
		>
			<Typography color={'error'}>
				Something Bad Happened. Refresh the page
			</Typography>
		</Box>
	);
};

export default QueryBooks;
