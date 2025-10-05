import Image from "next/image";

export default function Home() {
  return (
     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black text-white">
      <main className="flex flex-col gap-[50px] row-start-2 items-center sm:items-start">
        <p className="font-serif text-white-500 text-2xl font-bold outline outline-2 outline-gray-400 p-4 mx-auto text-center">
          Cole's First Website</p>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
        <p className="mb-2 tracking-[-.01em]">
            Fun Facts:
          </p>
          <p className="mb-2 tracking-[-.01em]">
            I have been playing baseball for over 12 years
          </p>
          <p className="tracking-[-.01em]">
            I can do a backflip
          </p>
          <p className="mb-2 tracking-[-.01em]">
            I'm not 100% sure why I chose Computer Science :/
          </p>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Cole E
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] bg-red-600 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className = "invert"
              src = "/youtube.svg"
              alt = "Youtube logomark"
              width={20}
              height={20}
              />
            Youtube
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
