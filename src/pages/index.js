import Link from 'next/link';
import { Button } from '@mantine/core';

export default function Home() {
  console.log('Index page rendered');
  return (
    <>
    <Link href='/about'>About page</Link>
      <p>hello there</p>
      <Button>Click me</Button>
    </>
  );
}
