import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex ">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">Urban Digital Assets</a>
        </Link>
        .
      </h2>
      <nav className="">
        <Link href="/">
          <a className="hover:underline">About</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Offerings</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Blog</a>
        </Link>
      </nav>
    </div>
  )
}
