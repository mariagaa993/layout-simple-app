import React, {useState} from 'react';
import './home.scss';
import Modal from '../modal/Modal';

const Home = _ => {
    const [openModal, setOpenModal] = useState(false);

    return (
       
        <div className="home">
            <h1>Welcome to <span>Natural</span>Life</h1>
            <button type="button" onClick={() => setOpenModal(!openModal)}>Click Here!</button>
            {
                openModal ?
                <Modal />
                :
                console.log() 
            }
        </div>
    );
};

export default Home;