import { Dimensions } from 'react-native';

export const ranks: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
export const files: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
export const tile_size = Dimensions.get('window').width / 8;

export const initial_position = [
	['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
	['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
	['', '', '', '', '', '', '', ''],
	['', '', '', '', '', '', '', ''],
	['', '', '', '', '', '', '', ''],
	['', '', '', '', '', '', '', ''],
	['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
	['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
];
