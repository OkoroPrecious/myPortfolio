import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import tailwind from "../assets/images/tailwind.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import mongo from "../assets/images/mongo.png";
import github from "../assets/images/github.png";
import java from "../assets/images/Java.png";
import python from "../assets/images/python.png";
import springboot from "../assets/images/springboot.png";
import django from "../assets/images/django.jpg";
import mysql from "../assets/images/mySql.png";
import typescript from "../assets/images/typescript.png";
import kotlin from "../assets/images/Kotlin.png";
import devops from "../assets/images/devops.png";

const Skills = () => {
  return (
    <div id="skills" className="py-8 px-[5%] scroll-mt-20">
      <h1 className=" text-center md:text-left lg:text-left mt-8 lg:mt-0 md:mt-0 text-4xl md:text-6xl lg:text-6xl font-semibold text-[#fff] ">
        My Skills
      </h1>
      <div className="mt-12 flex flex-col items-center md:flex-row lg:flex-row gap-8 flex-wrap">
        <div className="bg-[#262626]  w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={html} alt="" />
          <h2 className="text-center mt-5 text-2xl">HTML</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={css} alt="" />
          <h2 className="text-center mt-5 text-2xl">CSS</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={tailwind} alt="" />
          <h2 className="text-center mt-5 text-2xl">Tailwind CSS</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={javascript} alt="" />
          <h2 className="text-center mt-5 text-2xl">JavaScipt</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={react} alt="" />
          <h2 className="text-center mt-5 text-2xl">React</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={node} alt="" />
          <h2 className="text-center mt-5 text-2xl">Node JS</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={mongo} alt="" />
          <h2 className="text-center mt-5 text-2xl">Mongo DB</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={github} alt="" />
          <h2 className="text-center mt-5 text-2xl">GitHub</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={java} alt="" />
          <h2 className="text-center mt-5 text-2xl">Java</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={springboot} alt="" />
          <h2 className="text-center mt-5 text-2xl">SpringBoot</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={python} alt="" />
          <h2 className="text-center mt-5 text-2xl">Python</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={django} alt="" />
          <h2 className="text-center mt-5 text-2xl">Django</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={mysql} alt="" />
          <h2 className="text-center mt-5 text-2xl">mySQL</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={typescript} alt="" />
          <h2 className="text-center mt-5 text-2xl">TypeScript</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={kotlin} alt="" />
          <h2 className="text-center mt-5 text-2xl">Kotlin</h2>
        </div>
        <div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
          <img src={devops} alt="" />
          <h2 className="text-center mt-5 text-2xl">DevOps</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
