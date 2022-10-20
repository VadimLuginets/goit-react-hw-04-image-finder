import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
export class App extends Component {
  state = {
    query: '',
    showLargePicture: false,
    LargePictureLink: '',
  };
  onSubmit = serchQuery => {
    if (serchQuery.trim() === '') {
      toast.error('Jesuse type something');
      return;
    }
    this.setState({ query: serchQuery.toLowerCase().trim() });
    console.log(this.state);
  };
  openFullHD = event => {
    if (event.target.tagName !== 'IMG') {
      return;
    }
    this.setState({
      LargePictureLink: event.target.dataset.fullscreen,
      showLargePicture: true,
    });
  };
  onModalClose = () => {
    this.setState({ showLargePicture: false });
  };
  render() {
    const { showLargePicture } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery query={this.state.query} openFullHD={this.openFullHD} />
        {showLargePicture ? (
          <Modal
            Url={this.state.LargePictureLink}
            onClick={this.onModalClose}
          />
        ) : null}
        <ToastContainer />
      </div>
    );
  }
}
