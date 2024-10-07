import { Header } from '@/shared/components/shared';
import { Footer } from '@/shared/components/shared/footer';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Ножи СПБ | Главная',
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header />
      </Suspense>
      {children}
      {modal}
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
}
