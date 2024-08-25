import React from 'react';

const Mentor = () => {
    const mentors = [
        {
            name: 'Ishwardutt Parulkar (Cisco)',
            about: `Founder and CTO
18+ years in Software Industry
Expert in IoT, M2M, NMS, Cloud, Mobile App
Worked in Lucent, Aricent & EGMP from IIML
B.E (Computer Science) from Bangalore Univ, India`,
            image: 'https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg'
        },
        {
            name: 'Manoj Dey (Intel)', 
            about: `Co-Founder & Director
HR/Account/Serial Entrepreneur
2 start-ups as co-founder`,
            image: 'https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg'
        },
    ];

    return (
        <div className='p-4 flex flex-col sm:flex-row flex-wrap items-center justify-center'>
            {mentors.map((mentor, index) => (
                <div key={index} className='p-4 my-2 w-full sm:w-80 border rounded-md shadow-md flex flex-col items-center sm:m-4'>
                    <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full mb-4" />
                    <h2 className='text-lg font-bold text-center'>{mentor.name}</h2>
                    <p className='mt-2 whitespace-pre-line text-center'>{mentor.about}</p>
                </div>
            ))}
        </div>
    );
}

export default Mentor;
