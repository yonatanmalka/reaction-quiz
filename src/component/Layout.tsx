"use client";

import { AppContext } from "@/utils/ContextProvider";
import Image from "next/image";
import { useContext, useRef, useState } from "react";
import Logo from "../../images/logo.png";
import Back from "../../images/back.svg";
import Element1 from "../../images/element1.svg";
import Element2 from "../../images/element2.svg";

function Layout({ children }: { children: React.ReactNode }) {
  const {
    shouldRenderComponent,
    ProgressComponent,
    currentStep,
    setCurrentStep,
    getProgressBarWidth,
    scroll,
    setScroll,
    isVideoShown,
    setIsVideoShown
  } = useContext(AppContext);

  const divRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if(currentStep === 1) {
      setScroll(divRef.current?.scrollTop)
      if(scroll) {
        scroll >= 200 && setIsVideoShown(false)
      }
    }
  }

  return (
    <main className="flex justify-center items-center">
      <div
        className={`md:w-[400px] w-[425px] z-[20] relative bg-white h-[100vh] ${(currentStep !== 27 && currentStep !== 1) ? 'p-[15px]' : 'p-0'} overflow-x-hidden overflow-y-scroll ${currentStep !== 1 ? 'sm:overflow-y-hidden' : ''}`}
        onScroll={handleScroll}
        ref={divRef}
      >
        {shouldRenderComponent && (
          <div
            className={`flex w-[100%] mt-[10px] z-20 relative flex-row ${
              currentStep !== 15 &&
              currentStep !== 7 &&
              currentStep !== 17 &&
              currentStep !== 16
                ? "justify-between"
                : "justify-center"
            } items-end `}
          >
            {
              // @ts-ignore
              ![7, 15, 16, 17, 25, 26, 27].includes(currentStep) ? (
                <button onClick={() => setCurrentStep(currentStep - 1)}>
                  <Image src={Back} alt={"backButton"} width={15} height={14} />
                </button>
              ) : (
                <div />
              )
            }
            <Image
              src={Logo}
              alt={"logo"}
              width={93}
              height={40}
              autoFocus={true}
            />
            <div>
              {
                // @ts-ignore
                ![7, 15, 16, 17, 25, 26, 27].includes(currentStep) ? (
                  <div className="text-[#3C8AF0] text-[16px] font-medium">
                    <span className="text-[#3C8AF0]">{currentStep}</span>/
                    <span className="text-[#979797]">24</span>
                  </div>
                ) : (
                  <div />
                )
              }
            </div>
          </div>
        )}
        {ProgressComponent && (
          <div className="mt-[13px] hy w-[100%] z-20 relative">
            <div
              className="w-[100%] bg-[#E1E1E1] h-[5px] rounded-md overflow-hidden"
              style={{ borderRadius: "3px" }}
            >
              <div
                className="bg-[#2C98F0] h-full transition-all"
                style={{
                  width: `${getProgressBarWidth()}%`,
                  borderRadius: "3px",
                }}
              />
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <button
            className="sticky top-4 left-5 z-50 text-white text-3xl"
            onClick={() => setIsVideoShown(!isVideoShown)}
          >
            {!isVideoShown ?
              <Image
                src={'/icons/less_than.svg'}
                alt="open"
                width={30}
                height={30}
              /> :
              <Image
                src={'/icons/cross.svg'}
                alt="close"
                width={30}
                height={30}
              />
            }
          </button>
        )}
        {children}
        {![1, 27].includes(currentStep) && (
          <div className="z-1">
            <Image
              className="absolute top-[-120px] left-[-100px]"
              src={Element1}
              alt={"element1"}
            />
          </div>
        )}
        {currentStep !== 1 && currentStep !< 27 && (
          <div className="z-1">
            <Image
              src={Element2}
              alt={"element1"}
              className="absolute bottom-[-100px] h-[400px] right-[-130px]"
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default Layout;
