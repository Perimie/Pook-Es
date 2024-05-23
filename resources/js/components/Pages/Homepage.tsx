import React from 'react';
import Logo from './assets/PookEs-logo.png';
import ReactDom from 'react-dom';


const Homepage: React.FC = () => {


    return (

    <div >
        <div className="navbar bg-primary sticky top-0 z-10 shadow-lg">
            <div className="flex-1">
                <img src={Logo} alt="Logo" className="w-12 h-12" />
                <p className=" ml-4 text-3xl">Pook Elementary School Portal</p>
                
            </div>
            <div className="flex">
                <ul className="menu menu-horizontal pr-5 text-lg z-10">
                        <li><a>Home</a></li>
                        <li><a>Grades</a></li>
                        <li><a>Enrollment</a></li>
                        <li><a>Schedule</a></li>
                    <li>
                        <details>
                        <summary>
                            Menu
                        </summary>
                        <ul className=" bg-neutral rounded-lg text-black text-sm">
                            <li><a>Edit Profile</a></li>
                            <li><a>Change Password</a></li>
                            <li><a>Log out</a></li>
                        </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>

                {/* Container for content */}
            <div className="card w-auto bg-secondary text-primary-content my-14 mx-5">
                <div className="card-body">
                    <h2 className="card-title font-bold">Announcements!</h2>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Ac turpis egestas maecenas pharetra convallis posuere. Volutpat blandit aliquam etiam erat velit scelerisque in. Eu sem integer vitae justo eget magna fermentum iaculis. Molestie nunc non blandit massa enim nec. In nibh mauris cursus mattis molestie a iaculis at. Nam aliquam sem et tortor. In fermentum et sollicitudin ac orci phasellus. Sed risus ultricies tristique nulla aliquet enim. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Feugiat scelerisque varius morbi enim nunc. Arcu felis bibendum ut tristique et egestas quis. Auctor eu augue ut lectus arcu bibendum at varius vel. Sociis natoque penatibus et magnis dis parturient. In massa tempor nec feugiat nisl pretium fusce id velit. In iaculis nunc sed augue lacus viverra vitae.</p>
                </div>

                <div className="card-body">
                    <h2 className="card-title font-bold">Activities</h2>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Ac turpis egestas maecenas pharetra convallis posuere. Volutpat blandit aliquam etiam erat velit scelerisque in. Eu sem integer vitae justo eget magna fermentum iaculis. Molestie nunc non blandit massa enim nec. In nibh mauris cursus mattis molestie a iaculis at. Nam aliquam sem et tortor. In fermentum et sollicitudin ac orci phasellus. Sed risus ultricies tristique nulla aliquet enim. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Feugiat scelerisque varius morbi enim nunc. Arcu felis bibendum ut tristique et egestas quis. Auctor eu augue ut lectus arcu bibendum at varius vel. Sociis natoque penatibus et magnis dis parturient. In massa tempor nec feugiat nisl pretium fusce id velit. In iaculis nunc sed augue lacus viverra vitae.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Ac turpis egestas maecenas pharetra convallis posuere. Volutpat blandit aliquam etiam erat velit scelerisque in. Eu sem integer vitae justo eget magna fermentum iaculis. Molestie nunc non blandit massa enim nec. In nibh mauris cursus mattis molestie a iaculis at. Nam aliquam sem et tortor. In fermentum et sollicitudin ac orci phasellus. Sed risus ultricies tristique nulla aliquet enim. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Feugiat scelerisque varius morbi enim nunc. Arcu felis bibendum ut tristique et egestas quis. Auctor eu augue ut lectus arcu bibendum at varius vel. Sociis natoque penatibus et magnis dis parturient. In massa tempor nec feugiat nisl pretium fusce id velit. In iaculis nunc sed augue lacus viverra vitae.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Ac turpis egestas maecenas pharetra convallis posuere. Volutpat blandit aliquam etiam erat velit scelerisque in. Eu sem integer vitae justo eget magna fermentum iaculis. Molestie nunc non blandit massa enim nec. In nibh mauris cursus mattis molestie a iaculis at. Nam aliquam sem et tortor. In fermentum et sollicitudin ac orci phasellus. Sed risus ultricies tristique nulla aliquet enim. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Feugiat scelerisque varius morbi enim nunc. Arcu felis bibendum ut tristique et egestas quis. Auctor eu augue ut lectus arcu bibendum at varius vel. Sociis natoque penatibus et magnis dis parturient. In massa tempor nec feugiat nisl pretium fusce id velit. In iaculis nunc sed augue lacus viverra vitae.
                    </p>
                </div>
            </div>
    </div>
        
        
    );
};

export default Homepage;