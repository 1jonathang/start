import LargeHeading from '@/components/ui/LargeHeading';


export default function Home() {

  return (
    <div className='relative -mt-32 h-screen flex items-center justify-center overflow-x-hidden'>
      <div className=' container max-w-7xl mx-auto w-full h-full'>
        <div className=' h-full gap-8 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading size='lg' className='three-d text-black dark:text-red-200'>
            Learning Russian is at <br/>
            the tip of your fingers.
          </LargeHeading>
        </div>
      </div>
    </div>
  )
}
