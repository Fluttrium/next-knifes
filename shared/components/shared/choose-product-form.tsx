import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

/**
 * Форма выбора ПРОДУКТА
 */
export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  onSubmit,
  className,
  loading,
}) => {
  return (
    <div className={cn(className, 'flex flex-col md:flex-row flex-1')}>
      {/* Блок с изображением */}
      <div className="flex items-center justify-center flex-1 relative w-full mb-4 md:mb-0">
        <img
          src={imageUrl}
          alt={name}
          className="transition-all z-10 duration-300 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-cover"
        />
      </div>

      {/* Блок с информацией */}
      <div className="w-full bg-[#f7f6f5] p-4 md:p-7 md:max-w-[490px] mx-auto">
        <Title text={name} size="md" className="font-extrabold mb-1 text-center md:text-left" />

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[45px] md:h-[55px] px-8 md:px-10 text-base rounded-[18px] w-full mt-4 md:mt-10"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
