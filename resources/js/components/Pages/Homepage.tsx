import React from 'react';
import Logo from './assets/PookEs-logo.png';
import LogoDeped from './assets/Deped-Seal.png';

import CaroPic1 from './assets/pic1.jpg';
import Enroll from './assets/enroll.png';
import ReactDom from 'react-dom';
import { Carousel, Typography, Button } from "@material-tailwind/react";


const Homepage: React.FC = () => {


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
                <button className=' bg-purple-400 p-3 text-white text-sm rounded-md shadow-lg'>
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
              <Button size="lg" className=' bg-purple-400'>
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
              <Button size="lg" className=' bg-purple-400'>
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
              <Button size="lg" className=' bg-purple-400'>
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
              <Button size="lg" className=' bg-purple-400'>
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
              <Button size="lg" className=' bg-purple-400'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>

        <div className=' flex-col bg-gray-400 p-6 '>
            
            <h1 className='text-black font-bold text-5xl text-center' >
                Welcome to
            </h1>
            <h1 className='font-bold text-5xl text-purple-400 text-center mb-2' >
                Pook Elementary School
            </h1>
            <p className='text-gray-800 text-center mb-5'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nostrum nesciunt culpa sequi voluptates voluptatibus assumenda quisquam at, laboriosam aut mollitia saepe qui, velit tenetur iste quidem facere reiciendis odit?
            </p>

            <div className=' flex flex-row justify-between'>
                <div className='bg-purple-400 p-10'>
                    <img src={Enroll}
                    alt="Logo"
                    className='h-60 w-60' 
                    />
                    <h1 className='text-center text-white mt-6 text-6xl'>
                        Enroll
                    </h1>
                </div>
                <div className='bg-purple-400'>
                    <p>asdasdasdas</p>
                </div>
                <div className='bg-purple-400'>
                    <p>asdasdasdas</p>
                </div>
                <div className='bg-purple-400'>
                    <p>asdasdasdas</p>
                </div>
            </div>

            
        </div>
    </div>
        
        
    );
};

export default Homepage;