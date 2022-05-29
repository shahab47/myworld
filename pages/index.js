import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Link href={'/mongodb'}>صفحه مونگو دیبی</Link>
      <Link href={'/git'}>صفحه گیت هاب</Link>
      <Link href={'/termux'}>صفحه ترمیوکس</Link> 
      <Link href={'/Javascript'}>صفحه جاوا اسکریپت</Link> 
    </div>
  )
}
