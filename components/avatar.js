import Image from "next/image";

export default function Avatar() {
  return (
    <div className="bg-teal-400 flex justify-center w-40 h-40 p-4 rounded-full">
      <div className="relative w-full h-full">
        <Image
          src="/memoji.png"
          alt="Oktay Çolakoğlu'nun Memojisi"
          layout="fill"
        />
      </div>
    </div>
  );
}
