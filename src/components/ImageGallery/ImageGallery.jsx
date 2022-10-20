import ButtonEl from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Ul } from './ImageGallery.styled';
import { Dna } from 'react-loader-spinner';
export default class ImageGallery extends Component {
  state = {
    query: '',
    data: [],
    page: 1,
    spiner: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.query !== this.state.query) {
      this.setState({ query: this.props.query, spiner: true });
      const query = this.props.query;
      fetch(
        `https://pixabay.com/api/?key=29814541-7f5e674ca7517b50be2aff327&q=${query}&image_type=photo&page=1&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({ data: [...data.hits] });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({ spiner: false });
        });
    }
  }
  loadMore = () => {
    const { query, page } = this.state;
    this.setState({ spiner: true });
    fetch(
      `https://pixabay.com/api/?key=29814541-7f5e674ca7517b50be2aff327&q=${query}&image_type=photo&page=${
        page + 1
      }&per_page=12`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(s => ({
          data: [...s.data, ...data.hits],
          page: page + 1,
        }));
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ spiner: false });
      });
  };
  render() {
    const { spiner } = this.state;
    return (
      <div>
        {!spiner ? null : <Dna width={2200} height={2200} />}
        <Ul onClick={this.props.openFullHD}>
          {this.state.data.map(o => (
            <ImageGalleryItem dataArrayOfObjects={o} key={o.id} />
          ))}
        </Ul>
        {!spiner ? null : <Dna width={2200} height={2200} />}
        <ButtonEl text={'Load more'} func={this.loadMore} />
      </div>
    );
  }
}
