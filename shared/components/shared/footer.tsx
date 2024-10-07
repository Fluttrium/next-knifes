'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className={cn('border-t py-8 bg-gray-50')}>
      <Container className="flex flex-col items-center">
      <Link href="/">
            <div className="flex items-center gap-4 mb-6">
              <Image src="/logo1.png" alt="Logo" width={35} height={35} />
              <div>
                <h1 className="text-2xl uppercase font-black">Ножи СПБ</h1>
                <p className="text-sm text-gray-400 leading-3">Доставка по РФ</p>
              </div>
            </div>
          </Link>
        {/* Верхняя часть футера */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          {/* Левая часть с логотипом */}
          <ul className="flex flex-wrap gap-4 justify-center text-xs font-medium text-gray-700 uppercase mt-4 lg:mt-0">
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/about">О компании</Link>
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
              <Link href="/installment">Купить в рассрочку</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/program">Программа для спасателей, военных и правоохранителей</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/faq">Вопрос-ответ</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/catalog">Каталог</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/for-dealers">Дилерам</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/offer-agreement">Договор оферты</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/privacy-policy">Политика конфиденциальности</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/feedback">Обратная связь</Link>
            </li>
            <li className="hover:text-red-500 transition duration-200 ease-in-out">
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>

        {/* Нижняя часть футера */}
        <div className="w-full border-t mt-8 pt-4 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <p className="text-md text-gray-500">
            ООО "Fluttrium" &copy; {new Date().getFullYear()}
          </p>

          {/* Контакты и адрес */}
          <div className="lg:mt-0">
            <p className="text-sm text-gray-500">+79210112794</p>
            <p className="text-sm text-gray-500">
              г. Москва, Киевское шоссе, 6 стр. 1, БЦ Comcity, корпус А2
            </p>
          </div>

          {/* Социальные сети */}
          <div className="flex gap-4 mt-4 lg:mt-0">
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
