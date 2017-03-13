import { GameStatus } from "../types";
import configureStore from './configureStore';
describe('Configure Store', () => {
    it('should be able to configure', () => {
        let state = {
            game: {
                status: GameStatus.notStarted
            }
        };
        const store = configureStore(state);
        expect(store).toBeTruthy();
    });
});
//# sourceMappingURL=configureStore.spec.js.map