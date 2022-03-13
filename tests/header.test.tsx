import { h } from 'preact';
import Header from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
    test('Header renders 3 nav items', () => {
        const context = shallow(<Header siteUrlPrefix='' />);
        expect(context.find('h1').text()).toBe('臺灣 VTuber 列表 (目前無內容)');
        expect(context.find('Link').length).toBe(11);
    });
});