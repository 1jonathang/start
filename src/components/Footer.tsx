import React from 'react';

const Footer = () => {
    return (
        <div className="sticky inset-x-0 bottom-0 bg-white/25 dark:bg-slate-800/25 z-50 w-full h-auto py-5">
            <div className="text-slate-700 dark:text-slate-400 container mx-auto px-6 md:px-10 lg:px-20 flex justify-between items-start flex-wrap">

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 px-2">
                    <h2 className="font-semibold text-lg mb-3">About Us</h2>
                    <ul className="text-sm">
                        <li><a className="hover:text-violet-400 transition duration-200" href="#">Our Company</a></li>
                        <li><a className="hover:text-violet-400 transition duration-200" href="#">Stories and News</a></li>
                        <li><a className="hover:text-violet-400 transition duration-200" href="#">Investors</a></li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 px-2">
                    <h2 className="font-semibold text-lg mb-3">Careers</h2>
                    <ul className="text-sm">
                        <li><a className="hover:text-violet-400 transition duration-200" href="#">Work with Us</a></li>
                        <li><a className="hover:text-violet-400 transition duration-200" href="#">Career Development</a></li>
                        <li><a className="hover:text-violet-400 transition duration-200" href="#">Job Opportunities</a></li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 px-2">
                    <h2 className="font-semibold text-lg mb-3">Policies</h2>
                    <ul className="text-sm">
                        <li><a className="hover:text-violet-400 transition duration-200" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-violet-400 transition duration-200" href="#">Terms of Use</a></li>
                        <li><a className="hover:text-violet-400 transition duration-200" href="#">Cookie Policy</a></li>
                    </ul>
                </div>

                <div className="w-full text-center md:text-right text-gray-500 dark:text-gray-200 text-sm sm:text-md mt-4">
                    © 2023 COMPANY. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer;
