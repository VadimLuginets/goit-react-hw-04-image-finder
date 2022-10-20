import { Li, Img } from './ImageGalleryItem.styled';
export default function ImageGalleryItem({ dataArrayOfObjects }) {
  const { webformatURL, largeImageURL } = dataArrayOfObjects;
  return (
    <Li>
      <Img src={webformatURL} alt="picture" data-fullscreen={largeImageURL} />
    </Li>
  );
}
