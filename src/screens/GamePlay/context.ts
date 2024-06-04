import React from 'react';

interface Props {
	current_candidate_moves: any;
	current_position: any;
	change_position: any;
	get_candidate_moves: any;
	reset_candidate_moves: () => void;
	get_piece_candidate_moves: any;
}

const GamePlayContext = React.createContext<Props>(null);

export default GamePlayContext;
