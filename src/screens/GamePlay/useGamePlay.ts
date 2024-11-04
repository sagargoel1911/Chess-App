import { useEffect, useState } from 'react';
import _ from 'lodash';
import { shallowEqual } from 'react-redux';

import { COLORS, PIECES, RESULTS, RESULT_DESCRIPTIONS, initial_candidate_moves, initial_position } from './constants';
import { useAppDispatch, useAppSelector } from 'src/store';
import { update_result } from 'src/actions/persistedUserData';
import { GAME_RESULTS } from 'src/utils/constants';
import { update_user_data } from 'src/actions/persistedAllUsersData';
import { SOUNDS } from 'src/assets/sounds/Sounds';
import { Audio } from 'expo-av';

const useGamePlay = (game_info) => {
	const { player_color, opponent_name, time_control } = game_info;

	const [current_position, set_current_position] = useState<any>(initial_position);
	const [current_candidate_moves, set_current_candidate_moves] = useState<any>(initial_candidate_moves);
	const [en_passant_square, set_en_passant_square] = useState<any>(null);
	const [black_castling_rights, set_black_castling_rights] = useState<any>({ k: true, q: true });
	const [white_castling_rights, set_white_castling_rights] = useState<any>({ k: true, q: true });
	const [turn, set_turn] = useState<string>(COLORS.WHITE);
	const [white_king_position, set_white_king_position] = useState<any>([7, 4]);
	const [black_king_position, set_black_king_position] = useState<any>([0, 4]);
	const [in_check, set_in_check] = useState<boolean>(false);
	const [all_candidate_moves, set_all_candidate_moves] = useState<any>({});
	const [half_moves, set_half_moves] = useState<number>(0);
	const [result, set_result] = useState<string>('');
	const [result_description, set_result_description] = useState<string>('');
	const [is_open_results_modal, set_is_open_results_modal] = useState<boolean>(false);
	const [is_open_promotion_modal, set_is_open_promotion_modal] = useState<boolean>(false);
	const [promotion_square, set_promotion_square] = useState<any>([-1, -1]);
	const [sound, set_sound] = useState<any>();
	const [white_time_left, set_white_time_left] = useState<number>(time_control.time);
	const [black_time_left, set_black_time_left] = useState<number>(time_control.time);
	const [clock_interval_id, set_clock_interval_id] = useState<any>(null);

	const { username } = useAppSelector(
		(state) => ({
			username: state.persistedUserData.username,
		}),
		shallowEqual,
	);

	const dispatch = useAppDispatch();

	useEffect(() => {
		return sound
			? () => {
					sound.unloadAsync();
				}
			: undefined;
	}, []);

	useEffect(() => {
		play_sound(SOUNDS.game_start.id);

		if (time_control.label !== 'NULL') {
			set_clock_interval_id(
				setInterval(() => {
					set_white_time_left((previous_time) => previous_time - 1000);
				}, 1000),
			);
		}
	}, []);

	useEffect(() => {
		if (white_time_left === 0) {
			clearInterval(clock_interval_id);
			set_result(RESULTS.BLACK_WON);
			set_result_description(RESULT_DESCRIPTIONS.TIMEOUT);
			open_results_modal();
			play_sound(SOUNDS.game_end.id);
		} else if (black_time_left === 0) {
			clearInterval(clock_interval_id);
			set_result(RESULTS.WHITE_WON);
			set_result_description(RESULT_DESCRIPTIONS.TIMEOUT);
			open_results_modal();
			play_sound(SOUNDS.game_end.id);
		}
	}, [white_time_left, black_time_left]);

	useEffect(() => {
		const current_all_candidate_moves = get_all_candidate_moves();
		const piece_situation = get_piece_situation();
		if (_.isEqual(current_all_candidate_moves, {})) {
			if (in_check) {
				set_result(turn === COLORS.WHITE ? RESULTS.BLACK_WON : RESULTS.WHITE_WON);
				set_result_description(RESULT_DESCRIPTIONS.CHECKMATE);
				set_all_candidate_moves({});
				open_results_modal();
				const winner_color = turn === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE;
				if (username) {
					dispatch(
						update_result({
							opponent: opponent_name,
							result: winner_color === player_color ? GAME_RESULTS.WIN : GAME_RESULTS.LOSS,
						}),
					);
					dispatch(
						update_user_data({
							username,
							game: {
								opponent: opponent_name,
								result: winner_color === player_color ? GAME_RESULTS.WIN : GAME_RESULTS.LOSS,
							},
						}),
					);
				}
				play_sound(SOUNDS.game_end.id);
			} else {
				set_result(RESULTS.DRAW);
				set_result_description(RESULT_DESCRIPTIONS.STALEMATE);
				set_all_candidate_moves({});
				open_results_modal();
				if (username) {
					dispatch(
						update_result({
							opponent: opponent_name,
							result: GAME_RESULTS.DRAW,
						}),
					);
				}
				play_sound(SOUNDS.game_end.id);
			}
		} else if (half_moves === 100) {
			// check for 50 move rule
			set_result(RESULTS.DRAW);
			set_result_description(RESULT_DESCRIPTIONS.FIFTY_MOVE_RULE);
			set_all_candidate_moves({});
			open_results_modal();
			if (username) {
				dispatch(
					update_result({
						opponent: opponent_name,
						result: GAME_RESULTS.DRAW,
					}),
				);
			}
			play_sound(SOUNDS.game_end.id);
		} else if (check_insufficient_material(piece_situation)) {
			set_result(RESULTS.DRAW);
			set_result_description(RESULT_DESCRIPTIONS.INSUFFICIENT_MATERIAL);
			set_all_candidate_moves({});
			open_results_modal();
			if (username) {
				dispatch(
					update_result({
						opponent: opponent_name,
						result: GAME_RESULTS.DRAW,
					}),
				);
			}
			play_sound(SOUNDS.game_end.id);
		} else {
			set_all_candidate_moves(current_all_candidate_moves);
		}
	}, [turn]);

	const play_sound = async (sound_name: any) => {
		const { sound: sound_to_play } = await Audio.Sound.createAsync(SOUNDS[sound_name].file);

		set_sound(sound_to_play);

		await sound_to_play.playAsync();
	};

	const is_attacked = (rank: number, file: number, position: any, enemy_color: string): boolean => {
		if (enemy_color === COLORS.BLACK && rank > 0) {
			if (file > 0 && position[rank - 1][file - 1] === 'bp') {
				return true;
			} else if (file < 7 && position[rank - 1][file + 1] === 'bp') {
				return true;
			}
		} else if (rank < 7) {
			if (file > 0 && position[rank + 1][file - 1] === 'wp') {
				return true;
			} else if (file < 7 && position[rank + 1][file + 1] === 'wp') {
				return true;
			}
		}

		let x = [2, -2, 2, -2, 1, -1, 1, -1],
			y = [1, 1, -1, -1, 2, 2, -2, -2];
		for (let i = 0; i < 8; i++) {
			let cur_rank = rank + x[i],
				cur_file = file + y[i];
			if (cur_rank >= 0 && cur_rank < 8 && cur_file >= 0 && cur_file < 8 && position[cur_rank][cur_file] === `${enemy_color}n`) {
				return true;
			}
		}

		x = [0, 0, -1, -1, -1, 1, 1, 1];
		y = [-1, 1, -1, 0, 1, -1, 0, 1];
		for (let i = 0; i < 8; i++) {
			let cur_rank = rank + x[i],
				cur_file = file + y[i];
			if (cur_rank >= 0 && cur_rank < 8 && cur_file >= 0 && cur_file < 8 && position[cur_rank][cur_file] === `${enemy_color}k`) {
				return true;
			}
		}

		x = [1, -1, 0, 0];
		y = [0, 0, 1, -1];
		for (let i = 0; i < 4; i++) {
			let cur_rank = rank + x[i],
				cur_file = file + y[i];
			while (cur_rank >= 0 && cur_rank < 8 && cur_file >= 0 && cur_file < 8) {
				if (position[cur_rank][cur_file] === `${enemy_color}r` || position[cur_rank][cur_file] === `${enemy_color}q`) {
					return true;
				} else if (position[cur_rank][cur_file] !== '') {
					break;
				}
				cur_rank += x[i];
				cur_file += y[i];
			}
		}

		x = [1, -1, 1, -1];
		y = [1, 1, -1, -1];
		for (let i = 0; i < 4; i++) {
			let cur_rank = rank + x[i],
				cur_file = file + y[i];
			while (cur_rank >= 0 && cur_rank < 8 && cur_file >= 0 && cur_file < 8) {
				if (position[cur_rank][cur_file] === `${enemy_color}b` || position[cur_rank][cur_file] === `${enemy_color}q`) {
					return true;
				} else if (position[cur_rank][cur_file] !== '') {
					break;
				}
				cur_rank += x[i];
				cur_file += y[i];
			}
		}

		return false;
	};

	const is_in_check = (rank: number, file: number, position: any, color: string): boolean => {
		if (color === COLORS.WHITE) {
			return is_attacked(rank, file, position, COLORS.BLACK);
		} else {
			return is_attacked(rank, file, position, COLORS.WHITE);
		}
	};

	const check_and_turn_change = (piece: string, new_position: any): boolean => {
		if (piece[0] === COLORS.WHITE) {
			if (is_in_check(black_king_position[0], black_king_position[1], new_position, COLORS.BLACK)) {
				set_in_check(true);
				set_turn(COLORS.BLACK);

				if (time_control.label !== 'NULL') {
					set_white_time_left((previous_time) => previous_time + time_control.increment);
					clearInterval(clock_interval_id);
					set_clock_interval_id(
						setInterval(() => {
							set_black_time_left((previous_time) => previous_time - 1000);
						}, 1000),
					);
				}
				return true;
			} else {
				set_in_check(false);
				if (time_control.label !== 'NULL') {
					set_white_time_left((previous_time) => previous_time + time_control.increment);
					clearInterval(clock_interval_id);
					set_clock_interval_id(
						setInterval(() => {
							set_black_time_left((previous_time) => previous_time - 1000);
						}, 1000),
					);
				}
				set_turn(COLORS.BLACK);
				return false;
			}
		}

		if (piece[0] === COLORS.BLACK) {
			if (is_in_check(white_king_position[0], white_king_position[1], new_position, COLORS.WHITE)) {
				set_in_check(true);
				set_turn(COLORS.WHITE);

				if (time_control.label !== 'NULL') {
					set_black_time_left((previous_time) => previous_time + time_control.increment);
					clearInterval(clock_interval_id);
					set_clock_interval_id(
						setInterval(() => {
							set_white_time_left((previous_time) => previous_time - 1000);
						}, 1000),
					);
				}
				return true;
			} else {
				set_in_check(false);
				set_turn(COLORS.WHITE);

				if (time_control.label !== 'NULL') {
					set_black_time_left((previous_time) => previous_time + time_control.increment);
					clearInterval(clock_interval_id);
					set_clock_interval_id(
						setInterval(() => {
							set_white_time_left((previous_time) => previous_time - 1000);
						}, 1000),
					);
				}
				return false;
			}
		}
	};

	const open_promotion_modal = () => {
		set_is_open_promotion_modal(true);
	};

	const close_promotion_modal = () => {
		set_is_open_promotion_modal(false);
	};

	const perform_promotion = (piece: string) => {
		const new_position = _.cloneDeep(current_position);
		new_position[promotion_square[0]][promotion_square[1]] = piece;
		set_current_position(new_position);
		const is_check_done: boolean = check_and_turn_change(piece, new_position);
		//make sound
		if (is_check_done) {
			play_sound(SOUNDS.check.id);
		} else {
			play_sound(SOUNDS.promote.id);
		}
		close_promotion_modal();
	};

	const change_position = (new_rank: number, new_file: number, rank: number, file: number, piece: string) => {
		let is_capture: boolean = false,
			is_castle: boolean = false;

		const new_position = _.cloneDeep(current_position);
		new_position[rank][file] = '';
		new_position[new_rank][new_file] = current_position[rank][file];

		if (current_position[new_rank][new_file] !== '') {
			is_capture = true;
		}

		//increment half move for 50 move draw
		if (piece[1] == PIECES.PAWN || current_position[new_rank][new_file] !== '') {
			set_half_moves(0);
		} else {
			set_half_moves((previous_count) => previous_count + 1);
		}

		//en passant move check
		if (piece[1] === PIECES.PAWN && en_passant_square && en_passant_square[0] === new_rank && en_passant_square[1] === new_file) {
			if (piece[0] === COLORS.WHITE) {
				new_position[new_rank + 1][new_file] = '';
			} else {
				new_position[new_rank - 1][new_file] = '';
			}
			is_capture = true;
		}

		//castling rights logic
		if (piece[1] === PIECES.KING) {
			if (piece[0] === COLORS.WHITE) {
				set_white_castling_rights({ k: false, q: false });
			} else {
				set_black_castling_rights({ k: false, q: false });
			}
		} else if (piece[1] === PIECES.ROOK) {
			if (rank === 0) {
				if (file === 0) {
					set_black_castling_rights({ ...black_castling_rights, q: false });
				} else if (file === 7) {
					set_black_castling_rights({ ...black_castling_rights, k: false });
				}
			} else if (rank === 7) {
				if (file === 0) {
					set_white_castling_rights({ ...white_castling_rights, q: false });
				} else if (file === 7) {
					set_white_castling_rights({ ...white_castling_rights, k: false });
				}
			}
		}

		//castling move logic
		if (piece[1] === PIECES.KING) {
			if (piece[0] === COLORS.WHITE) {
				set_white_king_position([new_rank, new_file]);
			} else {
				set_black_king_position([new_rank, new_file]);
			}
			if (file - new_file === 2) {
				new_position[rank][3] = current_position[rank][0];
				new_position[rank][0] = '';
				is_castle = true;
			} else if (new_file - file === 2) {
				new_position[rank][5] = current_position[rank][7];
				new_position[rank][7] = '';
				is_castle = true;
			}
		}

		//en passant square change logic
		if (piece === 'wp' && rank - new_rank === 2) {
			set_en_passant_square([new_rank + 1, file]);
		} else if (piece === 'bp' && new_rank - rank === 2) {
			set_en_passant_square([new_rank - 1, file]);
		} else {
			set_en_passant_square(null);
		}

		set_current_position(new_position);

		//promotion logic
		if (piece[1] === PIECES.PAWN && (new_rank === 0 || new_rank === 7)) {
			set_promotion_square([new_rank, new_file]);
			open_promotion_modal();
		} else {
			const is_check_done: boolean = check_and_turn_change(piece, new_position);

			if (is_check_done) {
				play_sound(SOUNDS.check.id);
			} else if (is_capture) {
				play_sound(SOUNDS.capture.id);
			} else if (is_castle) {
				play_sound(SOUNDS.castle.id);
			} else {
				play_sound(SOUNDS.move.id);
			}
		}
	};

	const validate_move = (new_rank: number, new_file: number, rank: number, file: number, piece: string): boolean => {
		const new_position = _.cloneDeep(current_position);
		new_position[rank][file] = '';
		new_position[new_rank][new_file] = current_position[rank][file];
		if (piece[1] === PIECES.PAWN && en_passant_square && en_passant_square[0] === new_rank && en_passant_square[1] === new_file) {
			if (piece[0] === COLORS.WHITE) {
				new_position[new_rank + 1][new_file] = '';
			} else {
				new_position[new_rank - 1][new_file] = '';
			}
		}

		if (piece[1] === PIECES.KING) {
			if (file - new_file === 2) {
				new_position[rank][3] = current_position[rank][0];
				new_position[rank][0] = '';
			} else if (new_file - file === 2) {
				new_position[rank][5] = current_position[rank][7];
				new_position[rank][7] = '';
			}
		}

		if (piece[0] === COLORS.WHITE) {
			const king_rank = piece[1] === PIECES.KING ? new_rank : white_king_position[0];
			const king_file = piece[1] === PIECES.KING ? new_file : white_king_position[1];

			return !is_in_check(king_rank, king_file, new_position, piece[0]);
		} else {
			const king_rank = piece[1] === PIECES.KING ? new_rank : black_king_position[0];
			const king_file = piece[1] === PIECES.KING ? new_file : black_king_position[1];

			return !is_in_check(king_rank, king_file, new_position, piece[0]);
		}
	};

	const get_rook_moves = (rank: number, file: number, piece: string) => {
		const updated_candidate_moves = _.cloneDeep(initial_candidate_moves);

		const x = [1, -1, 0, 0],
			y = [0, 0, 1, -1];
		for (let i = 0; i < 4; i++) {
			let cur_rank = rank + x[i],
				cur_file = file + y[i];
			while (cur_rank >= 0 && cur_rank < 8 && cur_file >= 0 && cur_file < 8) {
				if (current_position[cur_rank][cur_file] === '') {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 1;
					}
				} else if (current_position[cur_rank][cur_file][0] === piece[0]) {
					break;
				} else {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 2;
					}
					break;
				}
				cur_rank += x[i];
				cur_file += y[i];
			}
		}
		return updated_candidate_moves;
	};

	const get_bishop_moves = (rank: number, file: number, piece: string) => {
		const updated_candidate_moves = _.cloneDeep(initial_candidate_moves);

		const x = [1, -1, 1, -1],
			y = [1, 1, -1, -1];
		for (let i = 0; i < 4; i++) {
			let cur_rank = rank + x[i],
				cur_file = file + y[i];
			while (cur_rank >= 0 && cur_rank < 8 && cur_file >= 0 && cur_file < 8) {
				if (current_position[cur_rank][cur_file] === '') {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 1;
					}
				} else if (current_position[cur_rank][cur_file][0] === piece[0]) {
					break;
				} else {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 2;
					}
					break;
				}
				cur_rank += x[i];
				cur_file += y[i];
			}
		}
		return updated_candidate_moves;
	};

	const get_queen_moves = (rank: number, file: number, piece: string) => {
		const updated_candidate_moves = _.cloneDeep(initial_candidate_moves);

		const x = [1, -1, 1, -1, 1, -1, 0, 0],
			y = [1, 1, -1, -1, 0, 0, 1, -1];
		for (let i = 0; i < 8; i++) {
			let cur_rank = rank + x[i],
				cur_file = file + y[i];
			while (cur_rank >= 0 && cur_rank < 8 && cur_file >= 0 && cur_file < 8) {
				if (current_position[cur_rank][cur_file] === '') {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 1;
					}
				} else if (current_position[cur_rank][cur_file][0] === piece[0]) {
					break;
				} else {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 2;
					}
					break;
				}
				cur_rank += x[i];
				cur_file += y[i];
			}
		}
		return updated_candidate_moves;
	};

	const get_knight_moves = (rank: number, file: number, piece: string) => {
		const updated_candidate_moves = _.cloneDeep(initial_candidate_moves);

		const x = [2, -2, 2, -2, 1, -1, 1, -1],
			y = [1, 1, -1, -1, 2, 2, -2, -2];
		for (let i = 0; i < 8; i++) {
			let cur_rank = rank + x[i],
				cur_file = file + y[i];
			if (cur_rank >= 0 && cur_rank < 8 && cur_file >= 0 && cur_file < 8) {
				if (current_position[cur_rank][cur_file] === '') {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 1;
					}
				} else if (current_position[cur_rank][cur_file][0] === piece[0]) {
				} else {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 2;
					}
				}
			}
		}
		return updated_candidate_moves;
	};

	const get_king_moves = (rank: number, file: number, piece: string) => {
		const updated_candidate_moves = _.cloneDeep(initial_candidate_moves);

		const x = [1, -1, 1, -1, 1, -1, 0, 0],
			y = [1, 1, -1, -1, 0, 0, 1, -1];
		for (let i = 0; i < 8; i++) {
			let cur_rank = rank + x[i],
				cur_file = file + y[i];
			if (cur_rank >= 0 && cur_rank < 8 && cur_file >= 0 && cur_file < 8) {
				if (current_position[cur_rank][cur_file] === '') {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 1;
					}
				} else if (current_position[cur_rank][cur_file][0] === piece[0]) {
				} else {
					if (validate_move(cur_rank, cur_file, rank, file, piece)) {
						updated_candidate_moves[cur_rank][cur_file] = 2;
					}
				}
			}
		}

		if (piece[0] === COLORS.WHITE) {
			if (
				white_castling_rights.k &&
				current_position[7][5] === '' &&
				current_position[7][6] === '' &&
				!is_attacked(7, 4, current_position, COLORS.BLACK) &&
				!is_attacked(7, 5, current_position, COLORS.BLACK) &&
				!is_attacked(7, 6, current_position, COLORS.BLACK)
			) {
				updated_candidate_moves[7][6] = 1;
			}
			if (
				white_castling_rights.q &&
				current_position[7][3] === '' &&
				current_position[7][2] === '' &&
				!is_attacked(7, 4, current_position, COLORS.BLACK) &&
				!is_attacked(7, 3, current_position, COLORS.BLACK) &&
				!is_attacked(7, 2, current_position, COLORS.BLACK)
			) {
				updated_candidate_moves[7][2] = 1;
			}
		} else {
			if (
				black_castling_rights.k &&
				current_position[0][5] === '' &&
				current_position[0][6] === '' &&
				!is_attacked(0, 4, current_position, COLORS.WHITE) &&
				!is_attacked(0, 5, current_position, COLORS.WHITE) &&
				!is_attacked(0, 6, current_position, COLORS.WHITE)
			) {
				updated_candidate_moves[0][6] = 1;
			}
			if (
				black_castling_rights.q &&
				current_position[0][3] === '' &&
				current_position[0][2] === '' &&
				!is_attacked(0, 4, current_position, COLORS.WHITE) &&
				!is_attacked(0, 3, current_position, COLORS.WHITE) &&
				!is_attacked(0, 2, current_position, COLORS.WHITE)
			) {
				updated_candidate_moves[0][2] = 1;
			}
		}

		return updated_candidate_moves;
	};

	const get_pawn_moves = (rank: number, file: number, piece: string) => {
		const updated_candidate_moves = _.cloneDeep(initial_candidate_moves);

		if (piece[0] === COLORS.WHITE) {
			if (current_position[rank - 1][file] === '') {
				if (validate_move(rank - 1, file, rank, file, piece)) updated_candidate_moves[rank - 1][file] = 1;
				if (rank === 6 && current_position[4][file] === '' && validate_move(4, file, rank, file, piece)) {
					updated_candidate_moves[4][file] = 1;
				}
			}
			if (
				file - 1 >= 0 &&
				validate_move(rank - 1, file - 1, rank, file, piece) &&
				((current_position[rank - 1][file - 1] !== '' && current_position[rank - 1][file - 1][0] === COLORS.BLACK) ||
					(en_passant_square && en_passant_square[0] === rank - 1 && en_passant_square[1] === file - 1))
			) {
				updated_candidate_moves[rank - 1][file - 1] = 2;
			}
			if (
				file + 1 < 8 &&
				validate_move(rank - 1, file + 1, rank, file, piece) &&
				((current_position[rank - 1][file + 1] !== '' && current_position[rank - 1][file + 1][0] === COLORS.BLACK) ||
					(en_passant_square && en_passant_square[0] === rank - 1 && en_passant_square[1] === file + 1))
			) {
				updated_candidate_moves[rank - 1][file + 1] = 2;
			}
		} else {
			if (current_position[rank + 1][file] === '') {
				if (validate_move(rank + 1, file, rank, file, piece)) updated_candidate_moves[rank + 1][file] = 1;
				if (rank === 1 && current_position[3][file] === '' && validate_move(3, file, rank, file, piece)) {
					updated_candidate_moves[3][file] = 1;
				}
			}
			if (
				file - 1 >= 0 &&
				validate_move(rank + 1, file - 1, rank, file, piece) &&
				((current_position[rank + 1][file - 1] !== '' && current_position[rank + 1][file - 1][0] === COLORS.WHITE) ||
					(en_passant_square && en_passant_square[0] === rank + 1 && en_passant_square[1] === file - 1))
			) {
				updated_candidate_moves[rank + 1][file - 1] = 2;
			}
			if (
				file + 1 < 8 &&
				validate_move(rank + 1, file + 1, rank, file, piece) &&
				((current_position[rank + 1][file + 1] !== '' && current_position[rank + 1][file + 1][0] === COLORS.WHITE) ||
					(en_passant_square && en_passant_square[0] === rank + 1 && en_passant_square[1] === file + 1))
			) {
				updated_candidate_moves[rank + 1][file + 1] = 2;
			}
		}

		return updated_candidate_moves;
	};

	const get_candidate_moves = (rank: number, file: number, piece: string) => {
		switch (piece[1]) {
			case PIECES.ROOK: {
				return get_rook_moves(rank, file, piece);
			}
			case PIECES.BISHOP: {
				return get_bishop_moves(rank, file, piece);
			}
			case PIECES.QUEEN: {
				return get_queen_moves(rank, file, piece);
			}
			case PIECES.KNIGHT: {
				return get_knight_moves(rank, file, piece);
			}
			case PIECES.KING: {
				return get_king_moves(rank, file, piece);
			}
			case PIECES.PAWN: {
				return get_pawn_moves(rank, file, piece);
			}
			default:
				return;
		}
	};

	const get_all_candidate_moves = () => {
		const current_all_candidate_moves = {};
		for (let rank = 0; rank < 8; rank++) {
			for (let file = 0; file < 8; file++) {
				if (current_position[rank][file] !== '' && current_position[rank][file][0] === turn) {
					const piece_candidate_moves = get_candidate_moves(rank, file, current_position[rank][file]);
					if (_.isEqual(initial_candidate_moves, piece_candidate_moves) === false) {
						current_all_candidate_moves[`${rank}${file}`] = piece_candidate_moves;
					}
				}
			}
		}
		return current_all_candidate_moves;
	};

	const get_piece_candidate_moves = (rank: number, file: number) => {
		let updated_candidate_moves = _.cloneDeep(initial_candidate_moves);
		if (all_candidate_moves[`${rank}${file}`]) {
			updated_candidate_moves = _.cloneDeep(all_candidate_moves[`${rank}${file}`]);
		}
		set_current_candidate_moves(updated_candidate_moves);
	};

	const get_piece_situation = () => {
		const white_piece_situation = {},
			black_piece_situation = {};
		let white_bishop_square = '',
			black_bishop_square = '';
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				if (current_position[i][j] !== '' && current_position[i][j][0] === COLORS.WHITE) {
					const piece = current_position[i][j][1];
					white_piece_situation[piece] = (white_piece_situation[piece] || 0) + 1;
					if (piece === PIECES.BISHOP) {
						const current_bishop_type = (i + j) % 2 ? COLORS.BLACK : COLORS.WHITE;
						if (white_bishop_square == '') {
							white_bishop_square = current_bishop_type;
						} else if (white_bishop_square !== current_bishop_type) {
							white_bishop_square = 'both';
						}
					}
				} else if (current_position[i][j] !== '' && current_position[i][j][0] === COLORS.BLACK) {
					const piece = current_position[i][j][1];
					black_piece_situation[piece] = (black_piece_situation[piece] || 0) + 1;
					if (piece === PIECES.BISHOP) {
						const current_bishop_type = (i + j) % 2 ? COLORS.BLACK : COLORS.WHITE;
						if (black_bishop_square == '') {
							black_bishop_square = current_bishop_type;
						} else if (black_bishop_square !== current_bishop_type) {
							black_bishop_square = 'both';
						}
					}
				}
			}
		}
		const piece_situation = {
			[COLORS.WHITE]: white_piece_situation,
			[COLORS.BLACK]: black_piece_situation,
			white_bishop_square: white_bishop_square,
			black_bishop_square: black_bishop_square,
		};
		return piece_situation;
	};

	const check_insufficient_material = (piece_situation: any) => {
		if (
			_.isEqual(piece_situation[COLORS.WHITE], { [PIECES.KING]: 1 }) &&
			_.isEqual(piece_situation[COLORS.BLACK], { [PIECES.KING]: 1 })
		) {
			return true;
		}
		if (
			_.isEqual(piece_situation[COLORS.WHITE], { [PIECES.KING]: 1, [PIECES.BISHOP]: 1 }) &&
			_.isEqual(piece_situation[COLORS.BLACK], { [PIECES.KING]: 1 })
		) {
			return true;
		}
		if (
			_.isEqual(piece_situation[COLORS.WHITE], { [PIECES.KING]: 1 }) &&
			_.isEqual(piece_situation[COLORS.BLACK], { [PIECES.KING]: 1, [PIECES.BISHOP]: 1 })
		) {
			return true;
		}
		if (
			_.isEqual(piece_situation[COLORS.WHITE], { [PIECES.KING]: 1 }) &&
			_.isEqual(piece_situation[COLORS.BLACK], { [PIECES.KING]: 1, [PIECES.KNIGHT]: 1 })
		) {
			return true;
		}
		if (
			_.isEqual(piece_situation[COLORS.WHITE], { [PIECES.KING]: 1, [PIECES.KNIGHT]: 1 }) &&
			_.isEqual(piece_situation[COLORS.BLACK], { [PIECES.KING]: 1 })
		) {
			return true;
		}
		if (
			_.isEqual(piece_situation[COLORS.WHITE], { [PIECES.KING]: 1, [PIECES.BISHOP]: 1 }) &&
			_.isEqual(piece_situation[COLORS.BLACK], { [PIECES.KING]: 1, [PIECES.BISHOP]: 1 }) &&
			piece_situation.white_bishop_square === piece_situation.black_bishop_square
		) {
			return true;
		}
		return false;
	};

	const open_results_modal = () => {
		set_is_open_results_modal(true);
	};

	const close_results_modal = () => {
		set_is_open_results_modal(false);
	};

	const reset_candidate_moves = () => {
		set_current_candidate_moves(_.cloneDeep(initial_candidate_moves));
	};
	return {
		current_candidate_moves,
		current_position,
		change_position,
		get_candidate_moves,
		reset_candidate_moves,
		get_piece_candidate_moves,
		close_results_modal,
		result,
		result_description,
		is_open_results_modal,
		is_open_promotion_modal,
		perform_promotion,
		promotion_square,
		white_time_left,
		black_time_left,
		time_control,
	};
};

export default useGamePlay;
