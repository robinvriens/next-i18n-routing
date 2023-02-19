import Link from 'next/link';

import Container from './Container';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0">
      <nav>
        <Container className="flex items-center justify-center py-12 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className=" text-[#414052] hover:text-[#AC6DDE] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </nav>
    </header>
  );
}
