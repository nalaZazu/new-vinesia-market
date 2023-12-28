import Image from 'next/image'
import loading_bottle from '../../assets/icons/loading_bottle.svg'

export default function Loading({children, text = 'Loading ...'}: {children?: React.ReactNode, text?: string}) {
    return (<div>
        <div className="mt-24 max-w-[608px] opacity-95 bg-orange-100 rounded-lg m-auto overflow-hidden">
            <div className="container mx-auto pt-10 pb-7 text-center">
                { text &&
                <h1 className="w-full text-center text-zinc-800 md:text-4xl text-[21px]  font-light  md:leading-[44px] leading-[29px] mb-8">
                    {text}
                </h1>}
                {children}
                <Image src={loading_bottle} alt="loading icon" 
                className='inline-block duration-1000' 
                    style={{
                        animation: 'slide 2s linear infinite'
                    }}
                />
            </div>
        </div>
    </div>)
}