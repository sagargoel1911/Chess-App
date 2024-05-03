import React from 'react';

interface Props {
	is_game_started: boolean;
	start_game: () => void;
	end_game: () => void;
	current_candidate_moves: any;
	current_position: any;
	change_position: any;
	get_candidate_moves: any;
	reset_candidate_moves: () => void;
	get_piece_candidate_moves: any;
}

const GameContext = React.createContext<Props>(null);

export default GameContext;
