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
        const wrapper = shallow(<List {...props} />).find('.table');
        expect(wrapper).toEqual({});
    });

    it('update selling status', () => {
        const wrapper = shallow(<List />);
        wrapper.setState({
            books: [{
                id: 2,
                title: "Cell",
                author: "/authors/OL2162284A",
                owner: "anna",
                sellingStatus: false
            }]
        });
        const instance = wrapper.instance()
        const changeSellingStatusMock = jest.spyOn(instance, 'changeSellingStatus')
        instance.forceUpdate();

        const checkbox = wrapper.find('#sell')
        console.debug(checkbox)
        checkbox.simulate('change', { target: { checked: true } });
        expect(changeSellingStatusMock).toHaveBeenCalled()
    });

    it('update sharing status', () => {
        const wrapper = shallow(<List />);
        wrapper.setState({
            books: [{
                id: 2,
                title: "Cell",
                author: "/authors/OL2162284A",
                owner: "anna",
                rentingStatus: false
            }]
        });
        const instance = wrapper.instance()
        const changeSharingStatusMock = jest.spyOn(instance, 'changeSharingStatus')
        instance.forceUpdate();

        const checkbox = wrapper.find('#share')
        console.debug(checkbox)
        checkbox.simulate('change', { target: { checked: true } });
        expect(changeSharingStatusMock).toHaveBeenCalled()
    });
});