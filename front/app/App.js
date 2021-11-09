import React from 'react'
import Input from '../components/Input'
import InfoField from '../components/InfoField/InfoField'

function App() {
    return (
        <React.Fragment>
            <Input />
            <InfoField label='Title:' value='Kotiki' />
            <InfoField label='Author:' value='Maria' />
        </React.Fragment>
    );
}

export default App;