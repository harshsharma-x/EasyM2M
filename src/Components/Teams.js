import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Founder from './Founder';  // Import your components here
import Mentor from './Mentor';
import Advisor from './Advisor';
import Sales from './Sales';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessIcon from '@mui/icons-material/Business';

const Teams = () => {
    const [selected, setSelected] = useState(0); // State to track the selected item
    const list = [
        { title: 'Founders', icon: <PersonIcon />, component: <Founder /> },
        { title: 'Mentors', icon: <SupervisorAccountIcon />, component: <Mentor /> },
        { title: 'Advisor', icon: <PeopleIcon />, component: <Advisor /> },
        { title: 'Sales', icon: <BusinessIcon />, component: <Sales /> },
    ];

    const handleClick = (index) => {
        setSelected(index); // Update the selected item
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <motion.div 
                className='h-20 w-[80%] gap-20 items-center justify-center flex border-b mt-15'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {list.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className={`py-2 cursor-pointer ${selected === index ? 'underline' : ''}`} // Conditional underline
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleClick(index)} // Click handler
                    >
                        <div className='flex justify-center items-center'>{item.icon}</div>
                        {item.title}
                        
                    </motion.div>
                ))}
            </motion.div>
            
            {/* Conditional rendering of components */}
            <div className='w-[80%] mt-5'>
                {selected !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {list[selected].component}
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Teams;
