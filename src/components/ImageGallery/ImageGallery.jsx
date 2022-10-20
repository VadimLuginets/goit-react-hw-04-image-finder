import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Ul } from './ImageGallery.styled';
export default class ImageGallery extends Component {
  state = {
    query: '',
    data: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.query !== this.state.query) {
      this.setState({ query: this.props.query });
      const query = this.props.query;
      fetch(
        `https://pixabay.com/api/?key=29814541-7f5e674ca7517b50be2aff327&q=${query}&image_type=photo&page=1&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({ data: [...data.hits] });
        });
    }
  }
  render() {
    return (
      <Ul>
        {this.state.data.map(o => (
          <ImageGalleryItem dataArrayOfObjects={o} key={o.id} />
        ))}
      </Ul>
    );
  }
}
