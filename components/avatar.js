import Image from 'next/image'

export default function Avatar({ img, alt }) {
  return (
    <figure className="bg-theme-400 flex justify-center w-40 h-40 p-4 rounded-full">
      <div className="relative w-full h-full">
        <Image src={img} alt={alt} layout="fill" />
      </div>
    </figure>
  )
}
