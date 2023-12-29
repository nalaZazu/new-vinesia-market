export default function Loading({children, text = 'Loading ...'}: {children?: React.ReactNode, text?: string}) {
    return (<div>
        <div className="mt-24 max-w-[608px] opacity-95 bg-orange-100 rounded-lg m-auto">
            <div className="container mx-auto pt-10 pb-7 text-center">
                { text &&
                <h1 className="w-full text-center text-zinc-800 md:text-4xl text-[21px]  font-light  md:leading-[44px] leading-[29px] mb-8">
                    {text}
                </h1>}
                {children}
            </div>
        </div>
    </div>)
}