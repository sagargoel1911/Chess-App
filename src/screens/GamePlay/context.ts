import React from 'react';

interface Props {
	current_candidate_moves: any;
	current_position: any;
	change_position: any;
	get_candidate_moves: any;
	reset_candidate_moves: () => void;
	get_piece_candidate_moves: any;
	close_results_modal: () => void;
	result: string;
	result_description: string;
	is_open_results_modal: boolean;
	is_open_promotion_modal: boolean;
	perform_promotion: any;
	promotion_square: any;
	white_time_left: number;
	black_time_left: number;
	time_control: any;
}

const GamePlayContext = React.createContext<Props>(null);

export default GamePlayContext;
