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
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-4 sm:p-6 bg-secondary rounded-lg h-[180px] sm:h-[260px]">
          <img className="w-[180px] sm:w-[215px] h-[140px] sm:h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-2 sm:mt-3 font-bold" />

        <p className="text-xs sm:text-sm text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(', ')}
        </p>

        <div className="flex justify-between items-center mt-2 sm:mt-4">
          <span className="text-[16px] sm:text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-sm sm:text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
