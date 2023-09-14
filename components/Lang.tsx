import React from 'react'

const Lang = ({lang}:{lang :string}) => {
    let content;

    if (lang.toLocaleLowerCase() === 'html') {
        content = <div className="dark:lang-dark lang-light text-[#bf3c3c]"> {lang.toUpperCase()} </div>;
    } else if (lang.toLocaleLowerCase() === 'css') {
        content = <div className="dark:lang-dark lang-light text-[#3c5fbf]"> {lang.toUpperCase()} </div>;
    } else if (lang.toLocaleLowerCase() === 'js') {
        content = <div className="dark:lang-dark lang-light text-[#bfb43c]"> {lang.toUpperCase()} </div>;
    } else if (lang.toLocaleLowerCase() === 'tailwind') {
        content = <div className="dark:lang-dark lang-light text-[#2196f3]"> {lang.toUpperCase()} </div>;
    } else if (lang.toLocaleLowerCase() === 'nodejs') {
        content = <div className="dark:lang-dark lang-light text-[#3cbf4b]"> {lang.toUpperCase()} </div>;
    } else if (lang.toLocaleLowerCase() === 'nextjs') {
        content = <div className="dark:lang-dark lang-light dark:text-white text-black"> {lang.toUpperCase()} </div>;
    } else if (lang.toLocaleLowerCase() === 'expressjs') {
        content = <div className="dark:lang-dark lang-light text-[#bf9e3c]"> {lang.toUpperCase()} </div>;
    } else if (lang.toLocaleLowerCase() === 'psql') {
        content = <div className="dark:lang-dark lang-light text-[#3d73c8]"> {lang.toUpperCase()} </div>;
    } else if (lang.toLocaleLowerCase() === 'mongodb') {
        content = <div className="dark:lang-dark lang-light text-[#40d256]"> {lang.toUpperCase()} </div>;
    } else if (lang.toLocaleLowerCase() === 'react.js') {
        content = <div className="dark:lang-dark lang-light text-[#41acd3]"> {lang.toUpperCase()} </div>;
    } else {
        content = <div className="dark:lang-dark lang-light"> {lang.toUpperCase()} </div>;
    }
  
    return <div>{content}</div>;  
}

export default Lang