import Indexaciones from './Indexaciones'

const FloatWindow = ({ closeModal }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
      <div className='bg-white' onClick={stopPropagation}>
        <Indexaciones closeModal={closeModal} />
      </div>
    </div>
  )
}

export default FloatWindow