import LinkButton from '../shared/ui/LinkButton'

export default function Header() {
    return (
        <div className='flex justify-between items-center px-16 py-8'>
            <img src="/header-logo.png" alt="header-logo" className='max-w-36' />

            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <LinkButton to='/settings' variant='primary'>Играть</LinkButton>

                    </li>
                    <li>
                        <LinkButton to='/rating' variant='solid'>Рекорды</LinkButton>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
