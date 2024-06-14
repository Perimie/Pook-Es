import React from 'react';
import Logo from './assets/PookEs-logo.png';
import LogoDeped from './assets/Deped-Seal.png';

import CaroPic1 from './assets/pic1.jpg';
import Enroll from './assets/enroll.png';
import Teach from './assets/teach.png';
import Grow from './assets/grow.png';
import Learn from './assets/learn.png';
import Card1 from './assets/card1.jpg';
import Card2 from './assets/card2.jpg';
import Card3 from './assets/card3.jpg';
import ReactDom from 'react-dom';
import { Carousel, Typography, Button , Card, CardHeader, CardBody, Avatar } from "@material-tailwind/react";



const Homepage: React.FC = () => {

const currentYear = new Date().getFullYear();
    return (

    <div className='bg-black' >
        <div className="navbar bg-white sticky top-0 z-10 shadow-lg">
            
            <div className="flex-1">
                <img src={LogoDeped} alt="Logo" className=" w-11 h-11 border-r-2 border-black   " />
                <img src={Logo} alt="Logo" className=" w-12 h-12" />
                <p className=" ml-4 text-2xl text-black ">Pook Elementary School</p>
                
            </div>
            <div className="flex ">
                <ul className="menu menu-horizontal pr-5 text-sm z-10 text-black ">
                    {/* About drop down */}
                    <li>
                        <details>
                        <summary>
                            About
                        </summary>
                        <ul className="  bg-purple-400 rounded-lg text-white text-sm">
                            <li><a>About Us</a></li>
                            <li><a>Teachers</a></li>
                            
                        </ul>
                        </details>
                    </li>
                    {/* no dropdown */}
                        <li><a>Academics</a></li>
                        <li><a>Events</a></li>
                    {/* Activities Drop Down */}
                    <li>
                        <details>
                        <summary>
                            Activities
                        </summary>
                        <ul className="  bg-purple-400 rounded-lg text-white text-sm">
                            <li><a>Kinder</a></li>
                            <li><a>Grade 1</a></li>
                            <li><a>Grade 2</a></li>
                            <li><a>Grade 3</a></li>
                            <li><a>Grade 4</a></li>
                            <li><a>Grade 5</a></li>
                            <li><a>Grade 6</a></li>
                        </ul>
                        </details>
                    </li> 
                        <li><a>Contact</a></li>
                </ul>
            </div>
            <div>
                <button className=' bg-purple-400 p-3 text-white text-sm rounded-md shadow-lg hover:bg-purple-800 ease-out duration-300 '>
                    Enroll now
                </button>
            </div>
        </div>

                {/* Container for content */}
        <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src={CaroPic1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              About Us
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" className=' bg-purple-400 hover:bg-purple-800 ease-out duration-300'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
        {/* Academics Carou */}
      <div className="relative h-full w-full">
        <img
          src={CaroPic1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Academics
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" className=' bg-purple-400 hover:bg-purple-800 ease-out duration-300'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
        {/* Events carou */}
      <div className="relative h-full w-full">
        <img
          src={CaroPic1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Events
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" className=' bg-purple-400 hover:bg-purple-800 ease-out duration-300'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
        {/* Activities Carou */}
      <div className="relative h-full w-full">
        <img
          src={CaroPic1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Activites
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" className=' bg-purple-400 hover:bg-purple-800 ease-out duration-300'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Carou */}

      <div className="relative h-full w-full">
        <img
          src={CaroPic1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Contact
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" className=' bg-purple-400 hover:bg-purple-800 ease-out duration-300'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>

        <div className=' flex-col bg-gray-400 py-12 px-6 '>
            
            <h1 className='text-black font-bold text-5xl text-center' >
                Welcome to
            </h1>
            <h1 className='font-bold text-5xl text-purple-400 text-center mb-2 hover:text-purple-800 ease-out duration-300' >
                Pook Elementary School
            </h1>
            <p className='text-gray-800 text-center mb-5'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nostrum nesciunt culpa sequi voluptates voluptatibus assumenda quisquam at, laboriosam aut mollitia saepe qui, velit tenetur iste quidem facere reiciendis odit?
            </p>

            <div className=' flex flex-row justify-evenly'>
                <div className='bg-purple-400 p-16 shadow-lg rounded-lg hover:bg-purple-800 ease-out duration-300'>
                    <img src={Enroll}
                    alt="Logo"
                    className='h-24 w-24' 
                    />
                    <h1 className='text-center text-white mt-6 text-4xl font-bold'>
                        Enroll
                    </h1>
                </div>
                <div className='bg-purple-400 p-16 shadow-lg rounded-lg hover:bg-purple-800 ease-out duration-300'>
                    <img src={Teach}
                    alt="Logo"
                    className='h-24 w-24' 
                    />
                    <h1 className='text-center text-white mt-6 text-4xl font-bold'>
                        Teach
                    </h1>
                </div>
                <div className='bg-purple-400 p-16 shadow-lg rounded-lg hover:bg-purple-800 ease-out duration-300'>
                    <img src={Learn}
                    alt="Logo"
                    className='h-24 w-24' 
                    />
                    <h1 className='text-center text-white mt-6 text-4xl font-bold'>
                        Learn
                    </h1>
                </div>
                <div className='bg-purple-400 p-16 shadow-lg rounded-lg hover:bg-purple-800 ease-out duration-300'>
                    <img src={Grow}
                    alt="Logo"
                    className='h-24 w-24' 
                    />
                    <h1 className='text-center text-white mt-6 text-4xl font-bold'>
                        Grow
                    </h1>
                </div>
            </div>

            
        </div>

        <div className=' flex flex-row justify-evenly bg-white py-12 px-6' >
          {/* card 1 */}
              <Card
              shadow={false}
              className="relative grid h-[32rem] w-full max-w-[22rem] items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                style={{ backgroundImage: `url(${Card1})` }}
              >
                <div className="to-bg-white-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className=" relative pb-60 px-6 md:px-12 flex">
                <Typography
                  variant="h2"
                  color="white"
                  className=" font-medium leading-[1.5] hover:text-gray-400 ease-out duration-300"
                >
                  Academics
                </Typography>
              </CardBody>
            </Card>
            {/* card 2 */}
            <Card
              shadow={false}
              className="relative grid  h-[32rem] w-full max-w-[22rem] items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                style={{ backgroundImage: `url(${Card2})` }}
              >
                <div className="to-bg-white-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className=" relative pb-60 px-6 md:px-12 flex">
                <Typography
                  variant="h2"
                  color="white"
                  className=" font-medium leading-[1.5]  hover:text-gray-400 ease-out duration-300"
                >
                  Events
                </Typography>
              </CardBody>
            </Card>
            {/* card 3 */}
            <Card
              shadow={false}
              className="relative grid  h-[32rem] w-full max-w-[22rem] items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                style={{ backgroundImage: `url(${Card3})` }}
              >
                <div className="to-bg-white-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className=" relative pb-60 px-6 md:px-12 flex">
                <Typography
                  variant="h2"
                  color="white"
                  className=" font-medium leading-[1.5]  hover:text-gray-400 ease-out duration-300"
                >
                  Activities
                </Typography>
              </CardBody>
            </Card>
        </div>
        {/* enroll now button */}
        <div className='bg-white flex justify-center pb-12'>
            <button className=' bg-purple-400 py-3 px-6 text-white text-xl font-bold rounded-md shadow-lg  hover:bg-purple-800 ease-out duration-300'>
                    Enroll now
            </button>
        </div>
          {/* footer */}
        <div className='bg-purple-400 py-5'>
        <footer className="relative w-full">
          <div className="flex gap-4 text-white sm:justify-center">
            <Typography as="a" href="https://www.facebook.com/pookes108363" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5  hover:text-black ease-out duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5  hover:text-black ease-out duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 12.713L1.446 6.153 1.438 18c0 .553.447 1 1 1h19.125c.553 0 1-.447 1-1V6.153L12 12.713zM21.438 4h-18.876c-.553 0-1 .447-1 1v.573l10.438 6.781 10.438-6.781V5c0-.553-.447-1-1-1z"/>
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5  hover:text-black ease-out duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            
          </div>
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0  hover:text-black ease-out duration-300"
          >
            &copy; {currentYear} <a href="#">Pook Elementary School</a>. All
            Rights Reserved.
          </Typography>
      
    </footer>
        </div>
    </div>
        
        
    );
};

export default Homepage;