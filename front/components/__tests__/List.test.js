import React from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from '../List/List';

Enzyme.configure({ adapter: new Adapter() });

describe('List', () => {
    it('renders correctly with props', () => {
        const props = {
            list: [{ id: 1, title: "title", author: "author", owner: "owner" }]
        }
        const wrapper = shallow(<List {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('works without props', () => {
        const props = {
            list: null
        }
        const wrapper = shallow(<List {...props} />).find('#list');
        expect(wrapper).toEqual({});
    });
});