export const GAME_RESULTS = {
	WIN: 'w',
	LOSS: 'l',
	DRAW: 'd',
};

export const TIME_CONTROLS = [
	{ label: '30 min', time: 1800000, increment: 0 },
	{ label: '15 | 10', time: 900000, increment: 10000 },
	{ label: '10 min', time: 600000, increment: 0 },
	{ label: '5 | 5', time: 300000, increment: 5000 },
	{ label: '3 | 2', time: 180000, increment: 2000 },
	{ label: '2 | 1', time: 120000, increment: 1000 },
	{ label: '5 min', time: 300000, increment: 0 },
	{ label: '3 min', time: 180000, increment: 0 },
	{ label: '1 min', time: 60000, increment: 0 },
	{ label: 'None', time: null, increment: null },
];
