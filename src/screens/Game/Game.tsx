import React, { useState } from 'react';
import GameInfo from './components/GameInfo/GameInfo';
import GamePlay from './components/GamePlay/GamePlay';
import { View } from 'react-native';
import GameContext from './context';
import useGame from './useGame';

const Game = () => {
	const value = useGame();

	const { is_game_started } = value;

	return (
		<View style={{ flex: 1 }}>
			<GameContext.Provider value={value}>{is_game_started ? <GamePlay /> : <GameInfo />}</GameContext.Provider>
		</View>
	);
};

export default Game;
