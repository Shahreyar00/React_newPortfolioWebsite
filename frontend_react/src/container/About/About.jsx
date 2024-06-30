import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './about.scss';

import { images } from '../../constants';
// import { urlFor, client } from '../../client';

const About = () => {
    // const [abouts, setAbouts] = useState([]);

    // useEffect(()=>{
    //     const query = '*[_type=="abouts]';

    //     client.fetch(query).then((data)=>{
    //         setAbouts(data);
    //     });
    // },[]);

    const abouts = [
        { title: 'Frontend ', description: 'For the frontend, I am comfortable working with HTML/CSS, React & NextJs.', imgUrl: images.about01 },
        { title: 'Backend ', description: 'I have experience of working with frameworks such as Spring Boot and Node.js.', imgUrl: images.about03 },
        { title: 'Database', description: 'I have experience of databases including MySQL, PostgreSQL, Cassandra, and MongoDB.', imgUrl: images.about02 },
        { title: 'Current Role ', description: 'In my current role, I work on backend development using tools such as Node.js, Spring Boot and Kafka.', imgUrl: images.about04 },
    ];

    return (
        <>
            <h2 className="head-text">I Know that <span>Good WebApps</span> <br />means <span>Good Business</span></h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }} >{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);