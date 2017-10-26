import * as Enzyme from 'enzyme';
const ADAPTER = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new ADAPTER() });

export const mount = Enzyme.mount;
