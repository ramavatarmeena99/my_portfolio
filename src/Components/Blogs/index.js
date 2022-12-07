import React from 'react'
import { blogData } from '../../data';

import Style from "./index.module.css";

export default function index() {
  return (
    <div className={Style.blog}>

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
          <p>
            {item?.blogDiscription}
          {/* we should keep checking in the program again and again so that it can be known that the problem is coming in the code…(The problem of all the beginners is that they will first write all the code and then go and check whether the program is running or not… */}
          </p>
            </div>
        </div>
        );
      })}



{/* <div className={Style.container}>
<div className={Style.forImage}>
<img     src={reactJs}
                    alt="portfolio img"></img>
</div>
<div className={Style.title}>

</div>
</div>
<div className={Style.container}>
<div className={Style.forImage}>
<img     src={redux}
                    alt="portfolio img"></img>
</div>
<div className={Style.title}>

</div>
</div> */}


    </div>
  )
}
