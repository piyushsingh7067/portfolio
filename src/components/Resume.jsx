import ResumeP from "../assets/Piyush Resume.pdf"

export default function Resume(){

    return (
    <>
    <a href={ResumeP} target="_blank"  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-white/55 to-black   dark:text-white ">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent text-xl">
        Resume.
        </span>
        </a>
    </>)
}
