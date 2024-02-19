import { Img } from '@/utils/Img';

function PaymentCard({ duration, selectedOption, trial_discount } : { duration: string, selectedOption: boolean, trial_discount: boolean }) {
  return (
    <div className='flex flex-row items-center px-[10px] w-[100%] justify-between'>
      <div className='flex flex-row gap-[8px] justify-center items-center'>
        <div>
          <Img
            src={!selectedOption ? '/images/circle.png' : '/images/checkbox.png'}
            alt='logo'
            className='w-[20px] h-[20px]'
          />
        </div>
        <div className="flex flex-col">
          <div className="text-[12px] font-semibold">
              {duration === 'yearly' ? '4-Week Plan' : '1-Week Plan'} <span className="text-[10px] font-normal ml-1">5 users</span>
          </div>
          <div className="text-[10px]">
              {trial_discount ? (
              <>
                <span className="text-[#979797] line-through">
                  &nbsp;{duration === 'yearly' ? '$60' : '$21'}&nbsp;
                </span>
                → {duration === 'yearly' ? '$29' : '$13'}
              </>
              ) : "$60"}
          </div>
        </div>
      </div>
      <div className="relative z-0 min-w-[145px] flex items-center justify-end">
        <Img
          src='/images/rectangle.png'
          alt='logo'
          className='md:w-[140px] w-[120px] h-[70px] ml-[5px]'
        />
        <div className={`absolute left-6 md:left-2 bottom-[${trial_discount ? "5px" : "10px"}] mt-[5px] flex flex-col items-center w-full pr-[10px]`}>
          {trial_discount && <div className="text-[11px] ml-6 text-[#979797] line-through">&nbsp;$2&nbsp;</div>}
          <div className="flex flex-row md:ml-[15px] ">
            <div className="text-[14px] font-semibold"> $ </div>
            <div className="text-[32px] ml-[3px] font-semibold leading-[1]">{duration === 'yearly' ? 0 : 1}</div>
            <div className="flex flex-col ml-1  text-[14px] font-semibold">
              <div> 99 </div>
            </div>
          </div>
          <div className="text-[9px] ml-[16px] font-semibold">per day</div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
