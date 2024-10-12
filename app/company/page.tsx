import { Container, Title } from '@/shared/components/shared';

export default function About() {
  return (
    <>
      <Container className="mt-6 sm:mt-10 px-4">
        {/* Заголовок */}
        <Title text="О компании" size="lg" className="font-extrabold text-center text-xl sm:text-2xl" />
      </Container>

      <Container className="mt-6 sm:mt-10 pb-10 sm:pb-14 px-4">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
          {/* Цитата */}
          <blockquote className="italic text-gray-600 text-center">
            &ldquo;Если этот нож вас подвёл, то, скорее всего, вы просто делаете что-то не так.&rdquo; — 
            <span className="font-bold"> Ножи СПБ</span>
          </blockquote>

          {/* Описание компании */}
          <p>
            Добро пожаловать в мир Ножи СПБ — где мы забиваем на скучные правила и создаём ножи для настоящей жизни. Мы не любим лишний пафос, и наши ножи — это не про красивый фасад. Мы делаем инструменты, которые сработают, когда это действительно нужно. Забудьте про маркетинговый блеск — наши ножи просто работают, и всё.
          </p>
          <p>
            Наша миссия — поставлять настоящие инструменты, которые можно использовать где угодно и как угодно. Нам важно одно: чтобы каждый владелец ножа Ножи СПБ чувствовал себя уверенно, зная, что у него есть инструмент, на который можно положиться. Наши ножи созданы для реальных испытаний — от городской суеты до приключений на природе.
          </p>
          <p>
            Основанная в Санкт-Петербурге, компания Ножи СПБ быстро завоевала репутацию среди тех, кто не любит притворяться и выбирать полумеры. Мы не делаем ножи ради дизайна или красивых фотографий. Наши ножи — это инструмент, который работает каждый день и выдерживает всё, что только можно придумать.
          </p>

          {/* Принципы компании */}
          <h2 className="font-bold text-lg sm:text-xl">Принципы компании Ножи СПБ:</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Ножи, которые работают на деле:</strong> Мы тестируем каждый нож так, будто им собираются рубить деревья в дикой природе, открывать банки или защищаться от нападений холодильника. Эти ножи сделаны, чтобы их использовать, а не чтобы ими любоваться.
            </li>
            <li>
              <strong>Простота и надёжность:</strong> В наших ножах нет лишнего. Это не витринные штучки для любителей коллекционирования. Это ножи, которые справляются с любой задачей, будь то нарезка колбасы или распутывание парашютных строп.
            </li>
            <li>
              <strong>Для тех, кто выбирает своё:</strong> Наши ножи — для людей, которые идут своим путём. Если вы не признаёте навязанных правил и любите, когда вещи просто работают, — это для вас. Будь вы на кухне, в походе или просто любите быть готовым к любым неожиданностям — наши ножи станут вашим верным спутником.
            </li>
            <li>
              <strong>Доставка — быстро и без церемоний:</strong> Мы не станем усложнять вам жизнь долгими ожиданиями. Как и наши ножи, мы просто делаем своё дело — доставляем быстро и надёжно, чтобы вы могли заняться чем-то более интересным.
            </li>
          </ul>

          {/* Заключение */}
          <p>
            Ножи СПБ — проверенная надёжность, как у старого друга. Мы не занимаемся маркетинговым трёпом, потому что наши ножи говорят сами за себя. У нас нет времени на лишние разговоры, мы просто делаем ножи, которые работают. И, как говорится в нашей компании Ножи СПБ, — &ldquo;Если этот нож вас подвёл, то, скорее всего, вы просто делаете что-то не так.&rdquo;
          </p> 
        </div>
      </Container>
    </>
  );
}
