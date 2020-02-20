import React from 'react';
import { postResponses, postUser } from '../../../utils/index';
import { ButtonPrimary } from '../../../components/index';
import { TextField } from '@rmwc/textfield';

const Submit = ({ questions, responses, user, setUser, funcOnChange }) => {
  console.log({ responses });
  const handleSubmit = event => {
    console.log('I am submitting');
    event.preventDefault();
    postResponses(responses);
  };
  return (
    <>
      <p>
        I give permission to the MU to use the information I have provided to
        bring about change in the music industry
      </p>

      <p>
        I give permission to the MU to contact me about the information I have
        provided
      </p>
      <TextField
        label='Enter email address'
        pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
        onChange={funcOnChange}
        name='userEmail'
      ></TextField>
      <ButtonPrimary onClick={handleSubmit}>Submit</ButtonPrimary>
    </>
  );
};

export default Submit;

// show unique user reference and tell user to keep it somewhere safe
// give form field for user to input email if they want to
// make button to enable pdf download
// make final submit button that posts user and responses to Airtable
