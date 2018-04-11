import { AppState, GameStatus, Store } from '../types';

import configureStore from './configureStore';

describe('Configure Store', () => {
  it('should be able to configure', () => {
    const state: AppState = {
      game: {
        status: GameStatus.notStarted,
      },
    };

    const store: Store = configureStore(state);
    expect(store).toBeTruthy();
  });
});
