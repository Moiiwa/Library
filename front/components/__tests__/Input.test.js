import React from 'react';
import Input from '../Input/Input';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { jest } from '@jest/globals';

Enzyme.configure({ adapter: new Adapter() });

describe('Input', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Input />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('updates input value', () => {
        const wrapper = shallow(<Input />);
        wrapper.find('input').simulate('change', { target: { value: '666-6-6666-6666-6' } });
        expect(wrapper.find('input').props().value).toEqual('666-6-6666-6666-6');
    });

    it('Updates isbn state', () => {
        const wrapper = shallow(<Input />);
        wrapper.find('input').simulate('change', { target: { value: '666-6-6666-6666-6' } });
        expect(wrapper.instance().state.isbn).toBe('666-6-6666-6666-6');
    });

    it('formatMessage state is true when right isbn', () => {
        const wrapper = shallow(<Input />)
        const instance = wrapper.instance()
        const handleSubmitMock = jest.spyOn(instance, 'handleSubmit')
        instance.forceUpdate();

        const but = wrapper.find('button')
        but.simulate('click')
        expect(handleSubmitMock).toHaveBeenCalled()
    });

});