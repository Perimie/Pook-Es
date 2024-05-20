import React, { useState } from 'react';
import Logo from './assets/R.png';

const Login: React.FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="bg-base-100 flex justify-center mt-20">
      <div className="rounded-l-lg bg-primary text-primary-content max-w-md">
        <div className="card-body flex">
          <div className="flex gap-2 justify-center">
            <img src={Logo} alt="Logo" className="w-16 h-16" />
            <h2 className="card-title font-bold text-3xl text-neutral">Pook Elementary School</h2>
          </div>
          <h1 className="font-bold text-2xl text-neutral">Welcome to</h1>
          <p className="text-neutral">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras sed felis. Viverra adipiscing at in tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus. Vitae auctor eu augue ut lectus. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Eget aliquet nibh praesent tristique magna. Consequat ac felis donec et odio pellentesque. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Consectetur lorem donec massa sapien faucibus et. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Fermentum iaculis eu non diam phasellus vestibulum lorem sed.
          </p>
        </div>
      </div>
      <div className="rounded-r-lg bg-secondary text-primary-content max-w-md">
        <div className="card-body">
          <div className="bg-primary rounded-lg mt-16 flex flex-col px-7 shadow-xl">
            <h2 className="card-title text-neutral my-4 text-3xl justify-center">Login</h2>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-neutral font-semibold text-md">Learners Reference Number</span>
              </div>
              <input type="text" placeholder="Learners No." className="input input-bordered bg-neutral" />
            </label>
            <label className="form-control w-full max-w-xs mb-5">
              <div className="label">
                <span className="label-text text-neutral font-semibold text-md">Password</span>
              </div>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  onFocus={() => setShowButton(true)}
                  placeholder="Password"
                  className="input input-bordered w-full max-w-lg bg-neutral"
                />
                {showButton && (
                  <button
                    className="absolute right-2 top-3 "
                    onClick={toggleShowPass}
                  >
                    {showPass ? (
                      <svg
                        width={20}
                        height={20}
                        className="mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
                      </svg>
                    ) : (
                      <svg
                        width={20}
                        height={20}
                        className="mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                        <path d="m1 1 22 22" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      </svg>
                    )}
                  </button>
                )}
              </div>
              <a className="ml-24 link link-neutral">Forgot Password</a>
            </label>
            <div className="card-actions justify-center mb-5">
              <button className="btn px-10">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
