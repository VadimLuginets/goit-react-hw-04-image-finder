import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    query: '',
  };
  onSubmit = serchQuery => {
    if (serchQuery.trim() === '') {
      toast.error('Jesuse type something');
      return;
    }
    this.setState({ query: serchQuery.toLowerCase().trim() });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery query={this.state.query} />
        <ToastContainer />
      </div>
    );
  }
}
