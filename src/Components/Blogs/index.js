import React from 'react'
import { blogData } from '../../data';
import { MdKeyboardArrowRight } from 'react-icons/md';

import Style from "./index.module.css";

export default function index() {
  return (
    <>
        <h1 id={"blogs"} className={Style.myInfo}>Latest News & Blog</h1>

    <div className={Style.blog} >
{blogData.map((item, index) => {
        return (
        <div className={Style.container} key={index}>
          <div className={Style.forImage}>
          <img     src={item?.DebugImage}
                              alt={item?.blogTitle}></img>
            </div>
            <div className={Style.title}>
          <h1>{item?.blogTitle}
          </h1>
          <h1>{item?.blogTitleSecond}</h1>
          <p>
            {item?.blogDiscription}
          {/* we should keep checking in the program again and again so that it can be known that the problem is coming in the code…(The problem of all the beginners is that they will first write all the code and then go and check whether the program is running or not… */}
          </p>
            </div>
            <div className={Style.bottomDiv}>
            <a className={Style.readMore} href={item.blogLink} target="_blank" rel="noreferrer">
            Read More
            <h2><MdKeyboardArrowRight  /></h2>

            </a>


            </div>
        </div>
        );
      })}






    </div>
    </>
    
  )
}
