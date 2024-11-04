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

export const initial_candidate_moves = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
];

export const PIECES = {
	ROOK: 'r',
	BISHOP: 'b',
	PAWN: 'p',
	KING: 'k',
	QUEEN: 'q',
	KNIGHT: 'n',
};

export const COLORS = {
	WHITE: 'w',
	BLACK: 'b',
};

export const RESULTS = {
	WHITE_WON: 'White Won',
	BLACK_WON: 'Black Won',
	DRAW: 'Draw',
};

export const RESULT_DESCRIPTIONS = {
	CHECKMATE: 'checkmate',
	STALEMATE: 'stalemate',
	FIFTY_MOVE_RULE: '50 move rule',
	INSUFFICIENT_MATERIAL: 'insufficient material',
	TIMEOUT: 'timeout',
	THREEFOLD_REPETITION: 'threefold repetition',
};
