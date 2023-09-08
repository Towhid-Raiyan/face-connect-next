import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  console.log("this is ",process.env.APP_ID);
  return (
    <main className="flex justify-center">
      <button className='bg-emerald-400 text-white p-5'><Link href={'/Room'}>Launch Meeting</Link></button>
    </main>
  )
}
