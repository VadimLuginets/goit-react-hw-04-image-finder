import ButtonEl from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { useEffect, useState } from 'react';
import { Ul } from './ImageGallery.styled';
import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';
export default function ImageGallery({ queryProp, openFullHD }) {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [spiner, setSpiner] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    if (queryProp !== query) {
      setQuery(queryProp);
      setSpiner(true);
      setPage(1);
      fetch(
        `https://pixabay.com/api/?key=29814541-7f5e674ca7517b50be2aff327&q=${queryProp}&image_type=photo&page=1&per_page=12`
      )
        .then(res => res.json())
        .then(dataa => {
          setData([...dataa.hits]);
          setShowBtn(true);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setSpiner(false);
        });
    }
  }, [queryProp]);
  const loadMore = () => {
    setSpiner(true);
    fetch(
      `https://pixabay.com/api/?key=29814541-7f5e674ca7517b50be2aff327&q=${query}&image_type=photo&page=${
        page + 1
      }&per_page=12`
    )
      .then(res => res.json())
      .then(dataa => {
        setData([...data, ...dataa.hits]);
        setPage(page + 1);
        setShowBtn(true);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setSpiner(false);
      });
  };
  return (
    <div>
      {!spiner ? null : <Dna width={2200} height={2200} />}
      <Ul onClick={openFullHD}>
        {data.map(o => (
          <ImageGalleryItem dataArrayOfObjects={o} key={o.id} />
        ))}
      </Ul>
      {!spiner ? null : <Dna width={2200} height={2200} />}
      {showBtn ? <ButtonEl text={'Load more'} func={loadMore} /> : null}
    </div>
  );
}
ImageGallery.propTypes = {
  queryProp: PropTypes.string.isRequired,
  openFullHD: PropTypes.func.isRequired,
};
