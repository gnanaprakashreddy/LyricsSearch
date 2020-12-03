import React from 'react';
import Spinner from './Spinner.png'

const Spiner = () => {
    return (
        <div>
            <img src={Spinner} alt="Loading..." style={{width:'200px', margin:'40px auto', display:'block'}}/>
        </div>
    )
}

export default Spiner;