import Image from "next/image";

export default function RockcairnLogo() {
  return (
    <div
      className='flex flex-row items-center leading-none text-white'
    >
      <Image 
        src="/cairn-thumbnail.gif" 
        alt="rockcairn logo"
        width="47"
        height="33"
      />
      <span className="text-[24px]">RockCairn.com</span>
    </div>
  );
}
