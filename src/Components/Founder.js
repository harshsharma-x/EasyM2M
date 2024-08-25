import React from 'react';

const Founder = () => {
    const mentors = [
        {
            name: 'Mr PriyaRanjan Kumar',
            about: `Founder and CTO
        18+ years in Software Industry
        Expert in IoT, M2M, NMS, Cloud, Mobile App
        Worked in Lucent, Aricent & EGMP from IIML
        B.E (Computer Science) from Bangalore Univ, India`,
            image: 'https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg'
        },
        {
            name: 'Ms. Rinku',
            about: `Co-Founder & Director
HR/Account/Serial Entrepreneur
2 start-ups as co-founder`,
            image: 'https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg'
        },
        {
            name: 'Mr. Sunil Kumar',
            about: `Co-Founder & Director (Software)
15 years experience in software development
Worked for ITI and Lucent Bangalore
B.E (Electronics & Comm) from BIT, Sindri, India`,
            image: 'https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg'
        }
    ];

    return (
        <div className='p-4 flex flex-wrap justify-center gap-6'>
            {mentors.map((mentor, index) => (
                <div key={index} className='p-4 my-2 w-full sm:w-80 border rounded-md shadow-md flex flex-col items-center'>
                    <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full mb-4" />
                    <h2 className='text-lg font-bold text-center'>{mentor.name}</h2>
                    <p className='mt-2 text-center whitespace-pre-line'>{mentor.about}</p>
                </div>
            ))}
        </div>
    );
}

export default Founder;
