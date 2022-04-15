import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg ';
import expert2 from '../../../images/experts/expert-1.jpg ';
import expert3 from '../../../images/experts/expert-1.jpg ';
import expert4 from '../../../images/experts/expert-1.jpg ';
import expert5 from '../../../images/experts/expert-1.jpg ';
import expert6 from '../../../images/experts/expert-1.jpg ';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Will Smith', img: expert1 },
        { id: 2, name: 'Will Smith', img: expert2 },
        { id: 3, name: 'Will Smith', img: expert3 },
        { id: 4, name: 'Will Smith', img: expert4 },
        { id: 5, name: 'Will Smith', img: expert5 },
        { id: 6, name: 'Will Smith', img: expert6 },
    ]
    return (
        <div>
            <h2>Experts</h2>
        </div>
    );
};

export default Experts;