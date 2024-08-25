import React from 'react';

const Mentor = () => {
    const mentors = [
        {
            name: 'Ishwardutt Parulkar (Cisco)',
            about: `Founder and CTO
18+ years in Software Industry
Expert in IoT, M2M, NMS, Cloud, Mobile App
Worked in Lucent, Aricent & EGMP from IIML
B.E (Computer Science) from Bangalore Univ, India`
        },
        {
            name: 'Manoj Dey (Intel)', 
            about: `Co-Founder & Director
HR/Account/Serial Entrepreneur
2 start-ups as co-founder`
        },
      
    ];

    return (
        <div className='p-4 flex justify-around'>
            {mentors.map((mentor, index) => (
               
                 <div key={index} className='p-4 my-2 size-80 border rounded-md shadow-md'>
                    <h2 className='text-lg font-bold'>{mentor.name}</h2>
                    <p className='mt-2 whitespace-pre-line'>{mentor.about}</p>
                </div>
            ))}
        </div>
    );
}

export default Mentor;
