'use client';

import React from 'react';
import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaImage } from './pizza-image';
import { Title } from './title';
import { Button } from '../ui';
import { GroupVariants } from './group-variants';
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { IngredientItem } from './ingredient-item';
import { cn } from '@/shared/lib/utils';
import { getPizzaDetails } from '@/shared/lib';
import { usePizzaOptions } from '@/shared/hooks';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  className,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { totalPrice, textDetaills } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients,
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn(className, 'flex flex-col md:flex-row flex-1 h-full overflow-hidden')}>
      {/* Изображение пиццы - изменяем размер для мобильного */}
      <PizzaImage imageUrl={imageUrl} size={size} className="mb-5 md:mb-0 md:w-[240px] w-[80%] mx-auto" />

      {/* Информация о пицце */}
      <div className="w-full md:w-[490px] bg-[#f7f6f5] p-4 md:p-7 flex flex-col h-full overflow-auto"> {/* Обертка для прокрутки */}
        <div className="flex-1">
          <Title text={name} size="md" className="font-extrabold mb-1 text-center md:text-left" />
          <p className="text-gray-400 text-center md:text-left">{textDetaills}</p>

          {/* Варианты размера и типа пиццы */}
          <div className="flex flex-col gap-4 mt-5">
            <GroupVariants
              items={availableSizes}
              value={String(size)}
              onClick={(value) => setSize(Number(value) as PizzaSize)}
            />

            <GroupVariants
              items={pizzaTypes}
              value={String(type)}
              onClick={(value) => setType(Number(value) as PizzaType)}
            />
          </div>

          {/* Ингредиенты */}
          <div className="bg-gray-50 p-3 sm:p-5 rounded-md h-[150px] sm:h-[210px] mt-5 overflow-auto"> 
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"> 
              {ingredients.map((ingredient) => (
                <IngredientItem
                  key={ingredient.id}
                  name={ingredient.name}
                  price={ingredient.price}
                  imageUrl={ingredient.imageUrl}
                  onClick={() => addIngredient(ingredient.id)}
                  active={selectedIngredients.has(ingredient.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Кнопка добавления в корзину */}
        <div className="mt-4 md:mt-10">
          <Button
            loading={loading}
            onClick={handleClickAdd}
            className="h-[40px] sm:h-[45px] md:h-[55px] px-6 sm:px-8 md:px-10 text-sm sm:text-base rounded-[14px] sm:rounded-[18px] w-full"
          >
            Добавить в корзину за {totalPrice} ₽
          </Button>
        </div>
      </div>
    </div>
  );
};
