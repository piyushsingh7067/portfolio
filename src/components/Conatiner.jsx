export default function Container({children}){

    return (
        <>
        <div className="relative z-10 flex justify-center">
            <div className="bg-transparent w-4xl">
        {children}
        </div>
        
        </div>
        </>
    )
}

