import React from 'react';
import LoginPage from '../LoginPage/LoginPage';
import toJson from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('LoginPage', () => {
    let wrapper;
    let mockSubmit;

    beforeEach(() => {
        mockSubmit = jest.fn();
        wrapper = shallow(<LoginPage submit={mockSubmit} />);
    });

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("handle change", () => {
        const mockEvent = {
            target: {
                name: "username",
                value: "test"
            }
        };

        const expected = {
            user: {
                username: "test",
                password: "",
            },
            "submitted": false,
            "wrongCredits": false
        };

        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state()).toEqual(expected)
    });

    it('handle submit', () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };

        const instance = wrapper.instance()
        const handleSubmitMock = jest.spyOn(instance, 'handleSubmit')
        instance.forceUpdate();

        const but = wrapper.find('#submit')
        but.simulate('submit', fakeEvent);
        expect(handleSubmitMock).toHaveBeenCalled()
    });

});