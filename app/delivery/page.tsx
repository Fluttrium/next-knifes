import { Container, Title } from '@/shared/components/shared';

export default function Delivery() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Доставка" size="lg" className="font-extrabold" />
      </Container>

      <Container className="mt-10 pb-14">
        <div className="space-y-6">
          <p>
            Наша компания сотрудничает с курьерской службой доставки &quot;СДЭК&quot; и оператором российской государственной почтовой сети «Почта России»!
          </p>
          <p>
            Стоимость доставки рассчитывается автоматически при оформлении заказа. Вы сможете отследить свой заказ по выданному трек-номеру.
            Сроки доставки могут варьироваться в зависимости от загруженности службы доставки, а также, сроки, указанные при оформлении заказа, могут меняться в режиме онлайн в зависимости от обновления информации на сайте службы доставки.
          </p>
          <p>
            Примерные сроки доставки: 1-6 раб. дн., могут быть увеличены службой доставки СДЭК.
          </p>
          <p>
            При покупке любого ножа доставка бесплатная.
          </p>
          <p>
            При заказе &quot;Почтой России&quot; оплату необходимо осуществить на сайте, так как нет услуги наложенного платежа.
          </p>
          <p>
            Внимание! Заказы, сделанные до 14:00, обрабатываются в тот же день. Все остальные - переносятся на следующий. Заказ, сделанный в пятницу после 14:00 передается в службу доставки в воскресенье или понедельник.
          </p>
          <p>
            В случае невыкупа товара в пункте выдачи с покупателя удерживается обратная пересылка товара.
          </p>
          <p>
            И да, мы работаем с СДЭК — это проверенная временем служба, которая не подведет. Снег, дождь, пробки — ничто не сможет остановить их курьеров. Ваш заказ будет доставлен в целости и сохранности, несмотря ни на что!
          </p>
          <p>
            Как бы там ни было, мы уверены, что ваш заказ не пострадает — СДЭК сделает всё возможное, чтобы доставить его быстро и безопасно. Потому что ваш нож должен попасть в ваши руки, как и было задумано.
          </p>
        </div>
      </Container>
    </>
  );
}
