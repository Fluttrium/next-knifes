import { Container, Title } from '@/shared/components/shared';

export default function Payment() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Оплата" size="lg" className="font-extrabold" />
      </Container>

      <Container className="mt-10 pb-14">
        <div className="space-y-6">
          <p>
            Мы стремимся сделать процесс покупки максимально удобным для вас. Оплатить заказ можно на сайте с использованием банковских карт, а также при получении товара в пункте самовывоза СДЭК.
          </p>

          <h2 className="font-bold text-xl">Оплата банковскими картами</h2>
          <div className="flex items-center space-x-4">
            <img src="/ic_visa_mastercard_mir.png" alt="Visa, Mastercard, МИР" className="h-8" />
          </div>
          <p>
            Мы принимаем оплату по всем основным банковским картам, включая Visa, Mastercard и МИР. Расчет осуществляется через сервис ООО НКО &quot;ЮМани &quot;, который предоставляет безопасный и доступный способ оплаты за товары, приобретённые через интернет. Все транзакции обрабатываются в режиме реального времени через защищенное соединение, обеспечивая вашу безопасность и конфиденциальность.
          </p>
          <p>
            Используемая платёжная система соответствует строгим стандартам безопасности PCI DSS, что гарантирует сохранность ваших личных данных. Вы можете быть уверены, что все ваши финансовые операции защищены от несанкционированного доступа.
          </p>

          <h2 className="font-bold text-xl">Наличный расчет</h2>
          <p>
            Если вы предпочитаете наличный расчет, вы можете оплатить заказ курьеру СДЭК при его получении или в пункте выдачи. При получении товара обязательно проверьте комплектацию заказа и состояние товара, чтобы убедиться, что он соответствует вашим ожиданиям.
          </p>
          <p>
            Мы рекомендуем заранее ознакомится с условиями доставки и наличием товара, чтобы избежать недоразумений. Наша команда всегда готова ответить на ваши вопросы и помочь вам с выбором.
          </p>

          <h2 className="font-bold text-xl">Контакты для связи</h2>
          <p>
            У вас есть вопросы о наших ножах или хотите оформить предзаказ? Свяжитесь с нашим менеджером, и он предоставит вам всю необходимую информацию. Оформление предзаказа может оказаться более выгодным, чем покупка готового товара!
          </p>
          <p>
            Телефон: <a href="tel:+789210112794" className="text-blue-600 underline">89210112794</a>
          </p>
          <p>
            Мы ценим наших клиентов и всегда готовы помочь! Наша цель — обеспечить вас качественными инструментами, которые станут вашим надежным спутником в любых ситуациях.
          </p>
        </div>
      </Container>
    </>
  );
}
