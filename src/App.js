import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import { Container } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';

class App extends React.Component {

    componentDidMount() {
        console.log('App component mounted!')
    }

    render() {
        return (
            <>
                <AppNavbar></AppNavbar>
    
                <Container className='mt-5'>
                    <Outlet />
                </Container>    
            </>
        );
    }

}

export default App;
