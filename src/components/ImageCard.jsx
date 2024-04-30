const ImageCard = ({ url, name }) => {
  return (
    <div className='image-container'>
      <img src={url} alt={name} className='image-view' />
      <h2>{name}</h2>
    </div>
  )
}
export default ImageCard
