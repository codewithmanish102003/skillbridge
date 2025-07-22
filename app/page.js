import Image from 'next/image';
const Home = () => {
  return (
    <div className='flex flex-col min-h-[90vh] bg-gray-100 pt-15'>
      <main className="flex justify-center items-center p-8 gap-8">
        <div className="flex items-center justify-center">
          <Image
            src="/portrait-pensive-young-girl-making-notes_171337-1646.avif"
            alt="Hero Image"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col max-w-xl p-2">
        <div>
           <h1 className="text-5xl font-bold  text-black max-w-xl">Bridge The Gap In Your Skills</h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Your gateway to learning new skills and connecting with experts. Explore courses, join communities,
            and start your journey today!
          </p>
        </div>
          <div className='flex gap-5 mt-8'>
            <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </a>  
          <a href="#" className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Explore Corses</a>
          </div>
          
        </div>
       
      </main>
    </div>

  )
}

export default Home
