import Navigation from '@components/navigation'
import Status from './status'
import Image from 'next/image'
import Link from 'next/link'

export default function Header({ status }) {
  return (
    <div className="relative z-10">
      <header className="h-32 flex items-center">
        <div className="container-fluid w-full">
          <div className="flex justify-between items-center">
            <div className="border dark:border-0 dark:bg-white dark:text-black rounded-lg px-4 py-2 transition">
              <div className="flex items-center">
                <Link href="/">
                  <a className="flex items-center">
                    <div className="w-10 h-10 mr-4 relative hidden sm:block">
                      <Image
                        src="/thumbnail.png"
                        width="48"
                        height="48"
                        alt="Oktay Çolakoğlu"
                        className="rounded-full"
                      />
                    </div>
                    <div className="mr-12">
                      <strong className="block">Oktay Çolakoğlu</strong>
                      <span className="block text-sm text-zinc-600">
                        Frontend Developer
                      </span>
                    </div>
                  </a>
                </Link>
                <Status isAvailable={false} />
              </div>
            </div>
            <Navigation />
          </div>
        </div>
      </header>
    </div>
  )
}
