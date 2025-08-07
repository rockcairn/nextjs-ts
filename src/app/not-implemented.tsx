'use client';

import Link from 'next/link';

export default function NotImplemented({label}: {label: string}) {
  return (
    <Link
      className="climbing hover:underline hover:underline-offset-4"
      onClick={() => window.alert(`${label} not implemented yet.`)}
      href="#"
    >
      {label}
    </Link>
  );
}
