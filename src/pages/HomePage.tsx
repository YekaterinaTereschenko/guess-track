import Stat from '../shared/ui/Stat'
import LinkButton from '../shared/ui/LinkButton'

export default function HomePage() {
  return (
    <section className="flex justify-between mx-auto max-w-[1312px] px-16 py-4 items-center">
      <div className="flex flex-col max-w-1/2">
        <h1 className="text-[88px] font-extrabold leading-[0.98] tracking-[-3px]">
          Угадай <span className="text-accent">песню</span> за 15 секунд
        </h1>
        <p className='text-[22px] leading-normal mt-7 mb-10 text-muted'>Короткие отрывки из каталога iTunes, четыре варианта ответа и бонусы за серию правильных ответов.</p>
        <div className="flex gap-4">
          <LinkButton to='/settings' variant='primary'>Играть</LinkButton>
          <LinkButton to='/rating' variant='outline'>Рекорды</LinkButton>
        </div>
        <div className="mt-14 flex gap-12">
          <Stat value="30 с" label="отрывок песни" />
          <Stat value="4" label="варианта ответа" />
          <Stat value="×2" label="за серию из 5" />
        </div>
      </div>
      <div className="relative isolate max-w-[520px]">
        <img
          src="/pink-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full rotate-6"
        />
        <img
          src="/home-page-img.png"
          alt="Превью игры"
          className="relative"
        />
      </div>
    </section>
  )
}