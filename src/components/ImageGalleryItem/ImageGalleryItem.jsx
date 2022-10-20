import { Li, Img } from './ImageGalleryItem.styled';
export default function ImageGalleryItem({ dataArrayOfObjects }) {
  const { webformatURL } = dataArrayOfObjects;
  return (
    <Li>
      <Img src={webformatURL} alt="picture" />
    </Li>
  );
}
