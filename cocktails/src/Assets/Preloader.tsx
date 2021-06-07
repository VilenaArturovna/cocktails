import preloader from './1476.png'

export function Preloader() {
    return (
        <div style={{position: 'fixed', top: '40%', left: 'calc(50%-75px)'}}>
            <img src={preloader} alt={'preloader'}/>
        </div>
    )
}