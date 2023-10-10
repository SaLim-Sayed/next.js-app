import Link from "next/link";

export default function AriclePage() {
  return (
    <div>
        <h3>Article Page</h3>
        <Link href="/posts" >
        <button>take me to the next page</button>
        </Link>
    </div>
  )
}
