import React from 'react';

const Founder = () => {
    const mentors = [
        {
            name: 'Mr PriyaRanjan Kumar',
            about: `Founder and CTO
18+ years in Software Industry
Expert in IoT, M2M, NMS, Cloud, Mobile App
Worked in Lucent, Aricent & EGMP from IIML
B.E (Computer Science) from Bangalore Univ, India`
        },
        {
            name: 'Ms. Rinku', 
            about: `Co-Founder & Director
HR/Account/Serial Entrepreneur
2 start-ups as co-founder`
        },
        {
            name: 'Mr. Sunil Kumar',
            about: `Co-Founder & Director (Software)
15 years experience in software development
Worked for ITI and Lucent Bangalore
B.E (Electronics & Comm) from BIT, Sindri, India`
        }
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

export default Founder;
