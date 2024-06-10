import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const BookTile = ({
	onRemoveBookFromList,
	coverPhotoURL,
}: {
	coverPhotoURL: string;
	onRemoveBookFromList: () => void;
}) => {
	return (
		<Box
			sx={{
				perspective: '1000px',
			}}
		>
			<Box
				width={200}
				height={300}
				sx={{
					position: 'relative',
					transformStyle: 'preserve-3d',
					transition: 'transform 0.6s',
					'&:hover': {
						transform: 'rotateY(180deg)',
					},
				}}
			>
				<Box
					sx={{
						width: '100%',
						position: 'absolute',
						height: '100%',
						backfaceVisibility: 'hidden',
						borderRadius: '8px',
						boxShadow:
							'0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
					}}
				>
					<Box
						loading="lazy"
						component="img"
						src={`/src/${coverPhotoURL}`}
						alt={'A picture of a reading book'}
						width={'100%'}
						borderRadius={2}
						height={'100%'}
						sx={{
							objectFit: 'cover',
						}}
					/>
				</Box>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backfaceVisibility: 'hidden',
						borderRadius: '8px',
						boxShadow:
							'0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						transform: 'rotateY(180deg)',
						overflow: 'hidden',
						position: 'relative',
						backgroundBlendMode: 'overlay',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundImage: `url(/src/${coverPhotoURL})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							filter: 'blur(10px)',
							zIndex: 1,
						}}
					></Box>
					<Button
						color="error"
						variant="contained"
						onClick={onRemoveBookFromList}
						sx={{
							borderRadius: '50px',
							fontWeight: 700,
							minWidth: '64px',
							transition: 'background-color 0.3s ease',
							zIndex: 2,
							position: 'relative',
						}}
					>
						Remove
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default BookTile;
