import { Container, Title } from '@/shared/components/shared';

export default function Certificates() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Сертификаты" size="lg" className="font-extrabold" />
      </Container>

      <Container className="mt-10 pb-14">
        <div className="space-y-6">
          <p className="font-bold">Наши ножи не являются холодным оружием!</p>
          <p>
            Для вашего удобства и уверенности, мы предоставляем протоколы испытаний к сертификатам соответствия на наши ножи. Чтобы ознакомиться с протоколами испытания, пожалуйста, перейдите по ссылке:
          </p>
          <ul className="list-disc pl-6 space-y-2">
          <li><a href="ссылка_на_протокол_испытаний_баюн" target="_blank" rel="noopener noreferrer">Баюн</a></li>
            <li><a href="ссылка_на_протокол_испытаний_игла" target="_blank" rel="noopener noreferrer">Игла</a></li>
            <li><a href="ссылка_на_протокол_испытаний_кощей" target="_blank" rel="noopener noreferrer">Кощей</a></li>
            <li><a href="ссылка_на_протокол_испытаний_кощей_slim" target="_blank" rel="noopener noreferrer">Кощей Slim</a></li>
            <li><a href="ссылка_на_протокол_испытаний_кощей_танто" target="_blank" rel="noopener noreferrer">Кощей Танто</a></li>
            <li><a href="ссылка_на_протокол_испытаний_кощей_боуи" target="_blank" rel="noopener noreferrer">Кощей Боуи</a></li>
            <li><a href="ссылка_на_протокол_испытаний_кощей_квайкен" target="_blank" rel="noopener noreferrer">Кощей Квайкен</a></li>
            <li><a href="ссылка_на_протокол_испытаний_русалка" target="_blank" rel="noopener noreferrer">Русалка</a></li>
            <li><a href="ссылка_на_протокол_испытаний_сигарнай_нож" target="_blank" rel="noopener noreferrer">Сигарнай нож</a></li>
            <li><a href="ссылка_на_протокол_испытаний_яга" target="_blank" rel="noopener noreferrer">Яга</a></li>
            <li><a href="ссылка_на_протокол_испытаний_anaconda" target="_blank" rel="noopener noreferrer">Anaconda</a></li>
            <li><a href="ссылка_на_протокол_испытаний_daggerr_arrow" target="_blank" rel="noopener noreferrer">Daggerr Arrow</a></li>
            <li><a href="ссылка_на_протокол_испытаний_daggerr_arrow_serrated" target="_blank" rel="noopener noreferrer">Daggerr Arrow Serrated</a></li>
            <li><a href="ссылка_на_протокол_испытаний_arrow_auto" target="_blank" rel="noopener noreferrer">Arrow AUTO</a></li>
            <li><a href="ссылка_на_протокол_испытаний_arrow_limited" target="_blank" rel="noopener noreferrer">Arrow Limited</a></li>
            <li><a href="ссылка_на_протокол_испытаний_arrow_frame_lock" target="_blank" rel="noopener noreferrer">Arrow Frame Lock</a></li>
            <li><a href="ссылка_на_протокол_испытаний_cardknife" target="_blank" rel="noopener noreferrer">Cardknife</a></li>
            <li><a href="ссылка_на_протокол_испытаний_cinquedea" target="_blank" rel="noopener noreferrer">Cinquedea</a></li>
            </ul>
          <p>
            Если у вас возникнут дополнительные вопросы или вам потребуется дополнительная информация, наша команда всегда готова помочь. Свяжитесь с нами по адресу <a href="mailto:info@daggerrknives.ru" className="font-bold">fluttrium@gmail.com</a>, и мы с удовольствием предоставим вам все необходимые подробности.
          </p>
          
          <p>
            Спасибо, что выбрали Ножи СПБ! Мы стремимся создавать продукцию, которая помогает вам в повседневных задачах и приключениях. Ваша безопасность и довольство - наш главный приоритет.
          </p>
          
          <p className="font-bold">Примечание:</p>
          <p>
            Перед использованием ножей в различных ситуациях, рекомендуется ознакомиться с местными законами и правилами, касающимися ношения и использования ножей.
          </p>
        </div>
      </Container>
    </>
  );
}
