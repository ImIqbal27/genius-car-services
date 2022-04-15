import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Will Smith', img: expert1 },
        { id: 2, name: 'Chris Rock', img: expert2 },
        { id: 3, name: 'Dwayne Rock', img: expert3 },
        { id: 4, name: 'Ronaldo Junior', img: expert4 },
        { id: 5, name: 'Robert Downey', img: expert5 },
        { id: 6, name: 'Chris Hemsworth', img: expert6 },
    ]
    return (
        <div>
            <h2 class='text-center text-primary'>Our Experts</h2>
            <div class='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id} expert={expert}
                    > </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;