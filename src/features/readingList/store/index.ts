import { book } from '@/features/books/types';
import { create } from 'zustand';
const readingListStore = create<{
	readingList: book[];
	actions: {
		addBookToReadingList: (book: book) => void;
		removeBookFromReadingList: (title: string) => void;
	};
}>((set) => ({
	readingList: [],
	actions: {
		addBookToReadingList(book) {
			set((state) => ({
				readingList: [...state.readingList, book],
			}));
		},
		removeBookFromReadingList(title) {
			set((state) => ({
				readingList: state.readingList.filter(
					(book) => book.title.toLowerCase() !== title.toLowerCase()
				),
			}));
		},
	},
}));

export const useReadingList = () =>
	readingListStore((state) => state.readingList);
export const useReadingListActions = () =>
	readingListStore((state) => state.actions);
