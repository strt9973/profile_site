import { writable } from 'svelte/store';

function createDarkModeStore() {
	const initialValue =
		localStorage.getItem('isDarkMode') !== null
			? Boolean(localStorage.getItem('isDarkMode'))
			: window.matchMedia('(prefers-color-scheme: dark)').matches;
	const { subscribe, update } = writable<boolean>(initialValue);

	return {
		subscribe,
		toggleDarkMode: () => {
			update((currentvalue) => {
				const newValue = !currentvalue;
				localStorage.setItem('isDarkMode', newValue.toString());
				return newValue;
			});
		}
	};
}

export const isDarkMode = createDarkModeStore();
