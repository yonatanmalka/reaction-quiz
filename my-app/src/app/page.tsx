import Question12 from "@/component/Question12";
import Question10 from "@/component/Question10";
import {Img} from "@/utils/Img";
import Question11 from "@/component/Question11";
import Question8 from "@/component/Question8";
import Question13 from "@/component/Question13";
import Question9 from "@/component/Question9";
import Question19 from "@/component/Question19";
import Question14 from "@/component/Question14";
import Payment from "@/component/Payment";
import PaymentForm from "@/component/Payment_Form";
import User from "@/component/Create_user";
import Question18 from "@/component/Question18";


export default function Home() {
    return (
        <main className="flex justify-center bg-[#f9f9f9]   items-center w-full h-full">
            <div className="main">
                <div className='absolute -z-10'>
                    <Img src="/images/upper.png" alt="none" className="w-[150px] h-[120px]"/>
                </div>

                <div >
                    <Question18/>
                </div>
                <div className=" absolute right-0 -z-10 bottom-0">
                    <Img src="/images/bottom.png" alt="none" className="w-[200px] h-[240px] md:h-[290px]"/>
                </div>
            </div>
        </main>
    )
}
