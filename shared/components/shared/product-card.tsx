import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';
import { Ingredient } from '@prisma/client';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div className={`${className} w-[200px] h-[300px]`}> {/* Фиксированная ширина и высота карточки */}
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-4 bg-secondary rounded-lg h-[160px]"> {/* Высота контейнера изображения */}
          <img className="w-full h-full object-contain" src={imageUrl} alt={name} /> {/* Изображение занимает весь контейнер */}
        </div>

        <Title text={name} size="sm" className="mb-1 mt-2 font-bold" /> {/* Убрали дополнительные отступы для компактности */}

        <p className="text-xs text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(', ')}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-xs"> {/* Уменьшен размер текста для мобильной версии */}
            <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-xs font-bold"> {/* Уменьшен размер кнопки для мобильной версии */}
            <Plus size={16} className="mr-1" /> {/* Уменьшен размер иконки */}
            <span className="hidden sm:inline">Добавить</span> {/* Скрываем текст для мобильной версии */}
            <span className="inline sm:hidden"></span> {/* Показываем только иконку для мобильной версии */}
          </Button>
        </div>
      </Link>
    </div>
  );
};
