import SettingsCard from '../widgets/SettingsCard'

export default function SettingsPage() {
  return (
    <section className="flex justify-between mx-auto max-w-[1312px] px-16 py-4 items-center">
          <div className="flex flex-col max-w-[567px]">
            <h1 className="text-[80px] font-extrabold leading-[0.98] tracking-[-3px]">
              Соберите <span className="text-accent">свою</span> игру 
            </h1>
            <p className='text-[22px] leading-normal mt-7 mb-10 text-muted'>
              Выберите жанр или любимого исполнителя и сколько раундов хотите сыграть.
            </p>
          </div>
          <SettingsCard />
        </section>
  )
}
