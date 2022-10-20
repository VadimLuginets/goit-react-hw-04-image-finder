import { Component } from 'react';
import { Header, Button, Input, Form } from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    input: '',
  };
  onInput = event => {
    this.setState({ input: event.currentTarget.value.toLowerCase() });
  };
  onHandleSubmitForm = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };
  render() {
    return (
      <Header onSubmit={this.onHandleSubmitForm}>
        <Form>
          <Button>Search</Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={this.onInput}
            value={this.state.input}
          />
        </Form>
      </Header>
    );
  }
}
