'use client';

import { cn } from '@/shared/lib/utils';
import React, { Suspense } from 'react';
import { Container } from './container';
import Image from 'next/image';
import Link from 'next/link';
import { SearchInput } from './search-input';
import { CartButton } from './cart-button';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { ProfileButton } from './profile-button';
import { AuthModal } from './modals';
import { FiMenu } from 'react-icons/fi'; // Иконка бургер-меню

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart = true, className }) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
    }

    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, [searchParams, router]);

  return (
    <>
      {/* Мобильный хедер */}
      <header className={cn('border-b md:hidden', className)}>
        <Container className="flex items-center justify-between py-4">
          {/* Левая часть: Бургер-меню для мобильных устройств */}
          <div className="flex items-center ml-2">
            <button className="text-2xl">
              <FiMenu />
            </button>
          </div>

          {/* Центр: Лого */}
          <Link href="/" className="mx-auto">
            <div className="flex items-center gap-4">
              <Image src="/logo1.png" alt="Logo" width={35} height={35} />
            </div>
          </Link>

          {/* Правая часть: Корзина и Профиль */}
          <div className="flex items-center gap-3">
            {hasCart && <CartButton />}
            <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
          </div>
        

        {/* Модальное окно авторизации */}
        <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
        </Container>
        {/* Поиск */}
        {hasSearch && (
            <div className="mx-10 flex-1">
              <SearchInput />
            </div>
          )}
      </header>

      {/* Десктопный хедер */}
      <header className={cn('border-b hidden md:block', className)}>
        <Container className="flex items-center justify-between py-8">
          {/* Левая часть */}
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image src="/logo1.png" alt="Logo" width={35} height={35} />
              <div>
                <h1 className="text-2xl uppercase font-black">Ножи СПБ</h1>
                <p className="text-sm text-gray-400 leading-3">Доставка по РФ</p>
              </div>
            </div>
          </Link>

          {hasSearch && (
            <div className="mx-10 flex-1">
              <SearchInput />
            </div>
          )}

          {/* Правая часть */}
          <div className="flex items-center gap-3">
            <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
            <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
            {hasCart && <CartButton />}
          </div>
        </Container>
      </header>

      {/* Разделы под хедером для десктопа */}
      <nav className="border-b py-4 bg-gray-50 hidden md:block">
        <Container>
          <ul className="flex flex-wrap gap-4 justify-center text-xs font-medium text-gray-700 uppercase">
            {/* Ваши разделы */}
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/company">О компании</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/dealers">Дилеры Ножи СПБ</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/payment">Оплата</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/delivery">Доставка</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/garanty">Гарантия и Сервис</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/return">Возврат и Обмен</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/discounts">Скидки</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/certificates">Сертификаты</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/contacts">Контакты</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/blog">Блог</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/blogers">Для Блогеров</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </>
  );
};
