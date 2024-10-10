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
      {/* Заголовок */}
      <Container className="mt-10">
        <Title text="Все товары" size="lg" className="font-extrabold" />
      </Container>

      {/* TopBar с горизонтальной прокруткой на мобильных устройствах */}
      <Container className="mt-4">
        <div className="overflow-x-auto">
          <TopBar categories={categories.filter((category) => category.products.length > 0)} />
        </div>
      </Container>

      {/* Stories с горизонтальной прокруткой на мобильных устройствах */}
      <Container className="mt-10">
        <div className="overflow-x-auto">
          <Stories />
        </div>
      </Container>

      {/* Контент */}
      <Container className="mt-10 pb-14">
        <div className="flex flex-col lg:flex-row gap-[80px]">
          {/* Фильтрация */}
          <div className="w-full lg:w-[250px]">
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
                      <div className={`flex ${category.products.length > 2 ? 'overflow-x-auto' : ''}`}>
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
