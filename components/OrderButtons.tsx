import Link from "next/link";

export default function OrderButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href="https://www.toasttab.com/tez-wingz/v3" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Order – Midwest City
      </a>
      <a href="https://www.toasttab.com/tez-wingz-n-may-12314-north-may-avenue" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Order – North OKC
      </a>
    </div>
  );
}

