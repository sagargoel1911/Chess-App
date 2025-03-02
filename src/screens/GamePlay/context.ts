import React from 'react';
import useGamePlay from './useGamePlay';

type Props = ReturnType<typeof useGamePlay>;

const GamePlayContext = React.createContext<Props>({} as Props);

export default GamePlayContext;
