import Container from './Container';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pb-12">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
