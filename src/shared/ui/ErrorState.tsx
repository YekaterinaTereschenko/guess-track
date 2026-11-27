interface Props {
    message?: string
}
export default function ErrorState({ message }: Props) {
  return (
    <div className="flex flex-col mt-5 gap-3 items-center">
        <img src="/sad-record.svg" alt="" />
        <h3 className="text-[32px] font-extrabold leading-tight">Ой! Что-то пошло не так</h3>
        <p className="text-[24px] font-bold">{message}</p>
    </div>
  )
}
