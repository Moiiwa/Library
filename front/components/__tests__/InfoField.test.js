import React from 'react';
import InfoField from '../InfoField/InfoField';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('InfoField', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<InfoField />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('works with props', () => {
        const props = {
            label: 'Title',
            value: 'ValueTitle'
        }
        const wrapper = shallow(<InfoField {...props} />).find('#infoFieldLabel');
        expect(wrapper.text().includes('Title')).toBe(true);
    });

    it('works without props', () => {
        const props = {
            label: null,
            value: null
        }
        const wrapper = shallow(<InfoField {...props} />).find('.label');
        expect(wrapper).toEqual({});
    });
});