import Link from "next/link";
export default  function catalog(){
  return(
    <div className={'text-yellow-300 h-[100vh] bg-gray-500 flex flex-col items-center justify-evenly'}>
      <div>
      this is catalog
      </div>
      <Link href={'/'}>go back</Link>
    </div>
  )
}