const ImageCard = ({ url, name }) => {
  return (
    <div className='image-container'>
      <img src={url} alt={name} className='image-view' />
    </div>
  )
}
export default ImageCard
