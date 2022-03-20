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
        { title: 'Frontend ', description:'For the frontend, I am comfortable working with vanilla HTML/CSS/JS and ReactJs', imgUrl:images.about01 },
        { title: 'UI/UX', description:'I have decent experience of working with tools like Figma and Spline', imgUrl:images.about02 },
        { title: 'Backend ', description:'Have worked with databases like MySQL and MongoDB. But primarily use MongoDB (Atlas)', imgUrl:images.about03 },
        { title: 'FullStack ', description:'Currently Working as a full stack developer (MERN stack). And concurrently learning NextJs', imgUrl:images.about04 },
    ];

    return (
        <>
            <h2 className="head-text">I Know that <span>Good WebApps</span> <br/>means <span>Good Business</span></h2>

            <div className="app__profiles">
                {abouts.map((about,index)=>(
                    <motion.div
                        whileInView={{opacity:1}} 
                        whileHover={{scale:1.1}}
                        transition={{duration:0.5,type:'tween'}} 
                        className="app__profile-item" 
                        key={about.title+index}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className="bold-text" style={{marginTop:20}} >{about.title}</h2>
                        <p className="p-text" style={{marginTop:10}}>{about.description}</p>
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