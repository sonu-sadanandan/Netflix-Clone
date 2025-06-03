import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';
import Modal from 'react-modal';
import './RowPost.css'
import YouTube from 'react-youtube';

Modal.setAppElement('#root');

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    })
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieClick = (id) => {
    console.log(`Movie clicked: ${id}`);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
          setIsModalOpen(true);
        } else {
          console.log('No videos found');
        }
      })
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setUrlId(null);
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj) => (
            <img onClick={() => handleMovieClick(obj.id)} className={props.isSmall? "smallPoster": "poster"} src={`${imageUrl + obj.backdrop_path}`} alt='poster' />
          ))}
        </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Movie Trailer"
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        {urlId && <YouTube videoId={urlId.key} opts={opts} />}
      </Modal>
    </div>
  )
}

export default RowPost
