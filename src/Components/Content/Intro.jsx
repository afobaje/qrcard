import React, { useRef,useState } from "react";
import "../Content/css/Intro.css";
import "../Content/css/Intromin.css";
// import '../css/Intromin.css'

const Intro = () => {
  let [inter,setInter]=useState(false)
  let ref = useRef();
  // console.log(ref.current);
  // let observer = new IntersectionObserver(
  //   val=>{
  //       val.forEach(e=>{
  //           if (e.isIntersecting) {
  //             setInter(true)
  //               console.log('o ti intersect',e.isIntersecting)
  //           }
  //           console.log(inter)
  //       })
  //   }
  // );

  // console.log(ref.current)
  // ref!==undefined&&observer.observe(ref?.current)

  return (
    <article className="intro" ref={ref}>
      <div className="made one">
        <h3>The best business solution for you</h3>
        <hr />
        <p>
          We create optimization tools for business to ease the stress of
          unnecessary add-ons in our day to day life
        </p>
      </div>
      <div className="made two">
        <h3>Solution with forward thinking</h3>
        <hr />
        <p>
          {" "}
          We created a solution with the ability to integrate more solutions in
          the near future
        </p>
      </div>
      <div className="three made">
        <h3>Remove barriers</h3>
        <hr />
        <p>
          Remove the barriers of limitation to a location and connect to
          different partners
        </p>
      </div>
    </article>
  );
};

export default Intro;
