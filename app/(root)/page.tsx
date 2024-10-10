import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
  Stories,
} from '@/shared/components/shared';
import { Suspense } from 'react';
import { GetSearchParams, findPizzas } from '@/shared/lib/find-pizzas';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      {/* Заголовок с отступом слева для мобильных */}
      <Container className="mt-10 pl-4 md:pl-0">
        <Title text="Все товары" size="lg" className="font-extrabold" />
      </Container>

      {/* TopBar с фиксированным положением и горизонтальной прокруткой на мобильных устройствах */}
      <Container className="mt-4 sticky top-0 bg-white z-10 shadow-md"> {/* Фиксированное положение */}
        <div className="overflow-x-auto pl-4 md:pl-0">
          <TopBar categories={categories.filter((category) => category.products.length > 0)} />
        </div>
      </Container>

      {/* Stories с горизонтальной прокруткой на мобильных устройствах */}
      <Container className="mt-10">
        <div className="overflow-x-auto pl-4 md:pl-0">
          <Stories />
        </div>
      </Container>

      {/* Контент */}
      <Container className="mt-10 pb-14">
        <div className="flex flex-col lg:flex-row gap-[80px]">
          {/* Фильтрация с отступом слева и справа для мобильных */}
          <div className="w-full lg:w-[250px] pl-4 pr-4 md:pl-0 md:pr-0"> {/* Добавлен pr-4 */}
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров с отдельным скроллом для каждой категории */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <div key={category.id}>
                      <div className={`flex ${category.products.length > 2 ? 'overflow-x-auto' : ''} pl-4 md:pl-0`}>
                        <ProductsGroupList
                          title={category.name}
                          categoryId={category.id}
                          items={category.products}
                        />
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
