import React from 'react';
import Logo from './assets/PookEs-logo.png';
import ReactDom from 'react-dom';
import { Input } from "@material-tailwind/react";


const EditProfile: React.FC = () => {




    return (
        <div>
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

            <div className="card w-auto bg-secondary text-primary-content my-14 mx-5">
                <div className="card-body p-4">
                    <h2 className="card-title font-bold ">Student Profile</h2>
                </div>
                <div className="card w-auto bg-accent text-primary-content my-2 mx-5">
                    <div className="card-body p-4">
                        <h2 className="card-title text-sm font-bold ">TERMS AND CONDITIONS</h2>
                        <p className='text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Suspendisse ultrices gravida dictum fusce ut placerat orci. Consectetur adipiscing elit pellentesque habitant morbi. Arcu non sodales neque sodales ut etiam. Vitae ultricies leo integer malesuada nunc. Viverra maecenas accumsan lacus vel facilisis. Risus nec feugiat in fermentum posuere urna. Semper quis lectus nulla at. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Arcu odio ut sem nulla pharetra. Odio ut sem nulla pharetra diam sit amet nisl. Pellentesque diam volutpat commodo sed egestas.
                        </p>
                    </div>
                </div>

                <div className="card rounded-lg w-auto bg-gray-300 text-primary-content my-2 mx-5">
                {/* edit profile form */}
                <form action="">
                    {/* Student User Account */}
                    <div className="card-body rounded-t-lg bg-black p-2">
                        <h2 className='text-start text-lg font-light text-white'>Student User Account</h2>
                    </div>
                    <div className="card-body p-4">
                              <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-5'>
                                        <Input color="purple" label="Learners Reference Number" crossOrigin={undefined} placeholder="Learners Reference No"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} type='number' readOnly/>

                                        <Input color="purple" label="Name" crossOrigin={undefined} placeholder="Input Name"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  />
                   
                                        <Input color="purple" label="Gender" crossOrigin={undefined} placeholder="Input Gender"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

                                        <Input color="purple" label="Age" crossOrigin={undefined} placeholder="Input Age"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} type='number' />
                  
                                        <Input color="purple" label="Civil Status" crossOrigin={undefined} placeholder="Input Civil Status"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                    
                            
                                </div>       
                    </div>


                    {/* Student Personal Information */} 
                    <div className="card-body rounded-none bg-black p-2">
                        <h2 className='text-start text-lg font-light text-white'>Student Personal Information</h2>
                    </div>
                    <div className="card-body p-4">
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-5'>
                                        <Input color="purple" label="Apartment/House" crossOrigin={undefined} placeholder="Apartment/House"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

                                        <Input color="purple" label="Street" crossOrigin={undefined} placeholder="Input Street"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  />
                   
                                        <Input color="purple" label="City/Municipality" crossOrigin={undefined} placeholder="Input City/Municipality"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

                                        <Input color="purple" label="Country" crossOrigin={undefined} placeholder="Input Country"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                  
                                        <Input color="purple" label="Telephone Number" crossOrigin={undefined} placeholder="Input Tel Number"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  />

                                        <Input color="purple" label="Barangay" crossOrigin={undefined} placeholder="Input Barangay"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

                                        <Input color="purple" label="Barangay" crossOrigin={undefined} placeholder="Input Barangay"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                    
                            
                                </div>
                                
                    </div>

                </form>
                </div>
            </div>
        </div>

    );
};

export default EditProfile;