import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Glosario = () => {
    return (
        <div className='flex-col justify-center'>
            <div>
                <div>
                    <div className="flex items-center mb-4">
                        <FontAwesomeIcon icon={faBook} className="w-5 h-5 mr-2 text-gray-600" />
                        <span className="font-semibold text-xl">GLOSARIO DE TÉRMINOS</span>
                    </div>
                </div>
                <div></div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Glosario