import AutoTopUp from "./components/AutoTopUp/AutoTopUp";


export default function Home() {

  const sliderMarks = [
    {
      value: 5,
      label: <><p className="flex flex-col -left-1 top-1 absolute"><span className='font-semibold'>$5</span><span className='text-gray-500'>500 credits</span></p></>,
    },
    {
      value: 10,
      label: <><p className="flex flex-col -left-1 top-1 absolute"><span className='font-semibold'>$10</span><span className='text-gray-500'>1200 credits</span></p></>,
    },
    {
      value: 15,
      label: <><p className="flex flex-col -left-1 top-1 absolute"><span className='font-semibold'>$15</span><span className='text-gray-500'>1700 credits</span></p></>,
    },
    {
      value: 20,
      label: <><p className="flex flex-col -left-1 top-1 absolute"><span className='font-semibold'>$20</span><span className='text-gray-500'>2500 credits</span></p></>,
    },
    {
      value: 25,
      label: <><p className="flex flex-col -left-1 top-1 absolute"><span className='font-semibold'>$25</span><span className='text-gray-500'>3900 credits</span></p></>,
    },
    {
      value: 30,
      label: <><p className="flex flex-col -right-1 top-1 absolute items-end"><span className='font-semibold'>$30</span><span className='text-gray-500'>5000 credits</span></p></>,
    }
  ];

  return (
    <>
      <AutoTopUp labelValues={sliderMarks} minValue={5} maxValue={30} />
    </>
  );
}
