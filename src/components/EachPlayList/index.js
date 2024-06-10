import './index.css'

const EachPlayList = props => {
  const {eachList, onDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = eachList

  const onDelete = () => {
    onDeleteSong(id)
  }

  return (
    <li className="list-item">
      <img src={imageUrl} className="song-image" alt="track" />
      <p className="paragraph">{name}</p>
      <p className="paragraph">{genre}</p>
      <p className="paragraph">{duration}</p>
      <button data-testid="delete" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default EachPlayList
