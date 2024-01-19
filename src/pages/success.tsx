import React from 'react';
import Logo from "../../images/logo.png";
import Image from "next/image";
import DownLoad_App from "@/component/DownLoad_App";
import Element1 from "../../images/element1.svg";
import Element2 from "../../images/element2.svg";
import '../app/globals.css'

const Success = () => {
    return (
        <main className="flex justify-center items-center font-primary">
            <div className="md:w-[400px] w-[425px] min-h-[100vh] z-[20] relative bg-white p-[15px] overflow-hidden">
                <div className="flex w-full justify-center mt-[10px]">
                    <Image src={Logo} alt={'logo'} width={93} height={40} autoFocus={true}/>
                </div>
                <div className="mt-[40px] w-full relative z-20">
                    <DownLoad_App/>
                </div>
                <div className="z-1">
                    <Image src={Element1} alt={'element1'} className="absolute top-[-120px] left-[-100px]"/>
                </div>
                <div className="z-1">
                    <Image src={Element2} alt={'element1'}
                           className="absolute bottom-[-100px] h-[400px] right-[-130px]"/>
                </div>
            </div>
        </main>
    )
};

export default Success;
