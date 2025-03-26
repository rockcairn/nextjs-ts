import Image from "next/image";

export default function RockcairnLogo() {
  return (
    <div
      className='flex flex-row items-center leading-none text-white'
    >
      <a 
      className="flex items-center"
      href="https://github.com/rockcairn/nextjs-ts">
        <Image 
          src="/cairn-thumbnail.gif" 
          alt="rockcairn logo"
          width="47"
          height="33"
        />
       <span className="text-[24px]">RockCairn.com</span>
      </a>
    </div>
  );
}
