import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='text-white mt-[40px] bg-[#244d3f] px-4 py-8'>
            <div className='text-center max-w-2xl mx-auto'>
                <p className='text-[32px] sm:text-[40px] md:text-[48px]'>
                    <span className='font-bold'>Keen</span>
                    <span className='font-semibold'>Keeper</span>
                </p>
                <p className='text-gray-400 text-sm sm:text-base'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <p className='font-bold mt-[8px]'>Social Links</p>
                <div className='flex mt-[21px] gap-4 items-center justify-center'>
                    <a href="https://instagram.com" target='_blank' rel='noreferrer'>
                        <CiInstagram size={22} />
                    </a>
                    <a href="https://facebook.com" target='_blank' rel='noreferrer'>
                        <FaFacebook size={22} />
                    </a>
                    <a href="https://x.com" target='_blank' rel='noreferrer'>
                        <FaXTwitter size={22} />
                    </a>
                </div>
            </div>

            <div className='border-t border-green-800 mt-6 pt-4 
                            container mx-auto
                            flex flex-col sm:flex-row 
                            justify-between items-center gap-3'>
                <p className='text-gray-400 text-[12px] sm:text-[14px] text-center sm:text-left'>
                    © 2026 KeenKeeper. All rights reserved.
                </p>
                <div className='flex gap-4 sm:gap-5 text-gray-400 text-[12px] sm:text-[14px]'>
                    <a className='hover:text-white cursor-pointer'>Privacy</a>
                    <a className='hover:text-white cursor-pointer'>Policy</a>
                    <a className='hover:text-white cursor-pointer'>Cookie</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;