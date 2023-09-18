import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Banniere(){
    function scrolltoId(){
        var access = document.getElementById("part");
        access.scrollIntoView({behavior: 'smooth'}, true);
        }
    return(
        <div className="banniere h-screen">
            <div className='absolute'>
                <img style={{width:"5051px", height:"940px"}} alt='image banniere' src='./img4.jpg'></img>
            </div>

            <div className='flex flex-col items-center relative gap-4'>
                <h1 className='text-white text-4xl mt-24'>A la recherche du meilleur setup
                    pour jouer comme un pro ?
                </h1>
                <p className='text-white'>Retrouve les meilleurs composants & périphériques pour ton confort ou 
                        à un rapport qualité/prix imbattable ! </p>

                <div className='flex justify-center w-full mt-44 '>
                    <FontAwesomeIcon onClick={scrolltoId} icon={faCircleArrowDown} className="text-black mt-96 bg-white rounded-full p-1
                        hover:cursor-pointer hover:opacity-10" size="2xl" fade />
                </div>
            </div>
        </div>
    )
}