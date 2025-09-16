import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Link href={'blocks/blocks-1'} className="hover:underline">
        blocks-1
      </Link>
      <Link href={'blocks/blocks-2'} className="hover:underline">
        blocks-2
      </Link>
    </div>
  );
}
