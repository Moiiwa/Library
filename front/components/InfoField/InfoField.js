import React from 'react'
import './InfoField.css'

class InfoField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p id='infoFieldLabel' className='inline'>{this.props.label}</p>
                <p id='infoFieldValue' className='inline'>{this.props.value}</p>
            </div>
        );
    }
}

export default InfoField;