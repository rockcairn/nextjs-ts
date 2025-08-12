'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function NotImplemented({ label }: { label: string }) {
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

export function NotImplementedButton({ label }: { label: string }) {
  return (
    <Link
      onClick={() => window.alert(`${label} not implemented yet.`)}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      href="#"
    >
      <span className="hidden md:block"> {label}</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
