'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className={cn('border-t py-6 bg-gray-50')}>
      <Container className="flex flex-col items-center px-4">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-2 mb-4">
          <Image src="/logo1.png" alt="Logo" width={30} height={30} />
          <div>
            <h1 className="text-lg uppercase font-bold">Ножи СПБ</h1>
            <p className="text-xs text-gray-400">Доставка по РФ</p>
          </div>
        </Link>

        {/* Меню ссылок */}
        <ul className="flex flex-col gap-2 items-center text-xs font-medium text-gray-700 uppercase mt-4">
          <li className="hover:text-red-500 transition duration-200 ease-in-out">
            <Link href="/company">О компании</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 ease-in-out">
            <Link href="/dealers">Дилеры</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 ease-in-out">
            <Link href="/delivery">Доставка</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 ease-in-out">
            <Link href="/payment">Оплата</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 ease-in-out">
            <Link href="/catalog">Каталог</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 ease-in-out">
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>

        {/* Нижняя часть футера */}
        <div className="w-full border-t mt-6 pt-4 flex flex-col items-center text-center">
          <p className="text-sm text-gray-500 mb-2">
            ООО "Fluttrium" &copy; {new Date().getFullYear()}
          </p>

          {/* Контакты */}
          <div className="text-sm text-gray-500 mb-2">
            <p>+79210112794</p>
            <p>Москва, Киевское шоссе, 6 стр. 1, БЦ Comcity, корпус А2</p>
          </div>

          {/* Социальные сети */}
          <div className="flex gap-4 mt-2">
            <Link href="https://vk.com" aria-label="VK" className="hover:text-red-500 transition duration-200 ease-in-out">
              ВК
            </Link>
            <Link href="https://t.me" aria-label="Telegram" className="hover:text-red-500 transition duration-200 ease-in-out">
              Telegram
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-red-500 transition duration-200 ease-in-out">
              Инстаграм
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube" className="hover:text-red-500 transition duration-200 ease-in-out">
              YouTube
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
