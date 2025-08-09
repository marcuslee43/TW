import Link from "next/link";

export default function OrderButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="https://www.toasttab.com/tez-wingz/v3" className="btn btn-primary">Order – Midwest City</Link>
      <Link href="https://www.toasttab.com/tez-wingz-n-may-12314-north-may-avenue" className="btn btn-primary">Order – North OKC</Link>
    </div>
  )
}
