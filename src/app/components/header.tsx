import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="gap-4 fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div className="relative group">
          <a className="flex items-center justify-center gap-2">
            <Image src="/naeyon.png" alt="Naeyon" className="rounded-xl" width={40} height={40} priority />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
           Naeyon
          </span>
        </div>
        <div className="relative group">
          <a className="flex items-center justify-center gap-2">
            <Image src="/togetherai.png" alt="Together AI" className="rounded-xl" width={40} height={40} priority />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Together AI
          </span>
        </div>
        <div className="relative group">
          <a className="flex items-center justify-center gap-2">
            <Image src="/llama.png" alt="LlamaIndex" className="rounded-xl" width={40} height={40} priority />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            LlamaIndex
          </span>
        </div>
        <div className="relative group">
          <a className="flex items-center justify-center gap-2">
            <Image src="/nextjs.png" alt="NextJS" className="rounded-xl" width={40} height={40} priority />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            NextJS
          </span>
        </div>
        <div className="relative group">
          <a className="flex items-center justify-center gap-2">
            <Image src="/ts.png" alt="Typescript" className="rounded-xl" width={40} height={40} priority />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
          Typescript
          </span>
        </div>
        <div className="relative group">
          <a className="flex items-center justify-center gap-2">
            <Image src="/vercel.png" alt="Typescript" width={40} height={40} priority />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
          Vercel
          </span>
        </div>
      </div>
    </div>
  );
}
