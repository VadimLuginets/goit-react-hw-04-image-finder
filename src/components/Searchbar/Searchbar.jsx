import { useState } from 'react';
import { Header, Button, Input, Form } from './Searchbar.styled';
import PropTypes from 'prop-types';
export function Searchbar({ onSubmit }) {
  const [input, setInput] = useState('');
  const onInput = event => {
    setInput(event.currentTarget.value.toLowerCase());
  };
  const onHandleSubmitForm = event => {
    event.preventDefault();

    onSubmit(input);
    setInput('');
  };

  return (
    <Header onSubmit={onHandleSubmitForm}>
      <Form>
        <Button>Search</Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onInput={onInput}
          value={input}
        />
      </Form>
    </Header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
