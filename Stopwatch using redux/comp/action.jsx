export const START = 'START';
export const STOP = 'STOP';
export const RESET = 'RESET';
export const TICK = 'TICK';

export const start = () => ({ type: START });
export const stop = () => ({ type: STOP });
export const reset = () => ({ type: RESET });
export const tick = () => ({ type: TICK });
