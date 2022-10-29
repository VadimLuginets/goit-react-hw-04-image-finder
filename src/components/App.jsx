import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
export function App() {
  const [query, setQuery] = useState('');
  const [showLargePicture, setShowLargePicture] = useState(false);
  const [largePictureLink, setLargePictureLink] = useState('');
  const onSubmit = serchQuery => {
    if (serchQuery.trim() === '') {
      toast.error('Jesuse type something');
      return;
    }
    setQuery(serchQuery.toLowerCase().trim());
  };
  const openFullHD = event => {
    if (event.target.tagName !== 'IMG') {
      return;
    }
    setLargePictureLink(event.target.dataset.fullscreen);
    setShowLargePicture(true);
  };
  const onModalClose = () => {
    setShowLargePicture(false);
  };
  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        setShowLargePicture(false);
      }
    });
    return () => {
      window.removeEventListener('keydown', event => {
        if (event.key === 'Escape') {
          setShowLargePicture(false);
        }
      });
    };
  }, []);

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery queryProp={query} openFullHD={openFullHD} />
      {showLargePicture ? (
        <Modal Url={largePictureLink} onClick={onModalClose} />
      ) : null}
      <ToastContainer />
    </div>
  );
}
