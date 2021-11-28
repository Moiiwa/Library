import React from 'react';
import BookPage from '../BookPage/BookPage';
import toJson from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('BookPage', () => {

    const props = {
        match: {
            params: {
                id: 1
            }
        }
    }

    it('componentDidMount() works', () => {
        const wrapper = shallow(<BookPage {...props} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'getBook');
        instance.componentDidMount();
        expect(instance.getBook).toHaveBeenCalledTimes(1);
    });

    it('renders correctly', () => {
        const wrapper = shallow(<BookPage {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('update selling status', () => {
        const wrapper = shallow(<BookPage {...props} />);
        wrapper.setState({
            loading: false,
            bookData: {
                title: 'title',
                sellingStatus: true
            }
        });
        const instance = wrapper.instance()
        const changeSellingStatusMock = jest.spyOn(instance, 'changeSellingStatus')
        instance.forceUpdate();

        const checkbox = wrapper.find('#sell')
        checkbox.simulate('change', { target: { checked: true } });
        expect(changeSellingStatusMock).toHaveBeenCalled()
    });

    it('update renting status', () => {
        const wrapper = shallow(<BookPage {...props} />);
        wrapper.setState({
            loading: false,
            bookData: {
                title: 'title',
                rentingStatus: true
            }
        });
        const instance = wrapper.instance()
        const changeSharingStatusMock = jest.spyOn(instance, 'changeSharingStatus')
        instance.forceUpdate();

        const checkbox = wrapper.find('#share')
        checkbox.simulate('change', { target: { checked: true } });
        expect(changeSharingStatusMock).toHaveBeenCalled()
    });
});