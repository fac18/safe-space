import React from 'react';
import { postResponses, postUser } from '../../../utils/index';
import { ButtonSecondary } from '../../../components/index';
import { TextField } from '@rmwc/textfield';
import { useHistory } from 'react-router-dom';

const Submit = ({ responses, user, funcOnChange }) => {
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();
    const finalRecord = {
      ...responses,
      userRef: user,
    };
    postResponses(finalRecord).then(history.push('/report/confirm'));
  };
  return (
    <>
      <p>
        I give permission to the MU to use the information I have provided to
        bring about change in the music industry
      </p>

      <p>
        If you wish to be contacted by the Musician's Union in regard to this
        report, please provide your email below
      </p>
      <TextField
        label='Enter email address'
        pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
        onChange={funcOnChange}
        name='userEmail'
      ></TextField>
      <ButtonSecondary onClick={handleSubmit}>Submit</ButtonSecondary>
    </>
  );
};

export default Submit;

// show unique user reference and tell user to keep it somewhere safe
// give form field for user to input email if they want to
// make button to enable pdf download
// make final submit button that posts user and responses to Airtable
