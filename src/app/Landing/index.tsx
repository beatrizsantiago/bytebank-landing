import Footer from './components/Footer';
import Navbar from './components/Nav';
import BannerImg from '../../assets/banner.svg';
import GiftIcon from '../../assets/gift.svg';
import WithdrawIcon from '../../assets/withdraw.svg';
import StarIcon from '../../assets/star.svg';
import DevicesIcon from '../../assets/devices.svg';

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />

      <div className="flex flex-col align-center p-6 bg-blue-white-gradient flex-1">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <h1 className="text-center text-lg font-semibold m-3 max-w-[300px] leading-7 lg:text-xl lg:max-w-[430px] md:text-left">
            Experimente mais liberdade no
            controle da sua vida financeira.
            Crie sua conta com a gente!
          </h1>
          <div className="w-[350px] h-[200px] sm:w-[500px] sm:h-[350px] md:w-[660px] md:h-[410px] relative m-4 z-0">
            <img
              src={BannerImg}
              alt="Banner"
            />
          </div>
        </div>

        <h2 className="text-lg text-center my-5">
          <b>Vantagens do nosso banco:</b>
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex flex-col items-center max-w-[282px]">
            <img
              src={GiftIcon}
              alt="Vantagem"
              width={73}
              height={56}
            />
            <p className="text-lg text-center text-secondary-main font-bold my-2">
              Conta e cartão gratuitos
            </p>
            <p className="text-center text-gray-600 leading-5">
              Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[282px]">
            <img
              src={WithdrawIcon}
              alt="Vantagem"
              width={73}
              height={56}
            />
            <p className="text-lg text-center text-secondary-main font-bold my-2">
              Saques sem custo
            </p>
            <p className="text-center text-gray-600 leading-5">
              Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[282px]">
            <img
              src={StarIcon}
              alt="Vantagem"
              width={73}
              height={56}
            />
            <p className="text-lg text-center text-secondary-main font-bold my-2">
              Programa de pontos
            </p>
            <p className="text-center text-gray-600 leading-5">
              Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[282px]">
            <img
              src={DevicesIcon}
              alt="Vantagem"
              width={73}
              height={56}
            />
            <p className="text-lg text-center text-secondary-main font-bold my-2">
              Seguro Dispositivos
            </p>
            <p className="text-center text-gray-600 leading-5">
              Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}