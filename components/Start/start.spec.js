import * as React from 'react';
import StartButton from './index';
import { mount } from 'enzyme';
import { Level } from "../../types";
describe('Start tests', () => {
    it('Will call startGame action on click', () => {
        let startGame = jest.fn();
        const wrapper = mount(React.createElement(StartButton, { startGame: startGame }));
        wrapper.find('#easy').simulate('click');
        expect(startGame.mock.calls[0][0]).toBe(Level.easy);
    });
    it('Will call startGame action on click', () => {
        let startGame = jest.fn();
        const wrapper = mount(React.createElement(StartButton, { startGame: startGame }));
        wrapper.find('#hard').simulate('click');
        expect(startGame.mock.calls[0][0]).toBe(Level.hard);
    });
});
//# sourceMappingURL=start.spec.js.map