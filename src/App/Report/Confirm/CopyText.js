import React, { useRef, useState } from 'react';
import { FlexRow, CopyArea } from './style';
import { ButtonBack } from '../../style';

const CopyText = ({ userRef }) => {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  }
  return (
    <>
      <br />
      <FlexRow>
        <form spellcheck='false'>
          <CopyArea ref={textAreaRef} value={userRef} />
        </form>
        {document.queryCommandSupported('copy') && (
          <div>
            <ButtonBack onClick={copyToClipboard}>Copy</ButtonBack>
            <p>{copySuccess}</p>
          </div>
        )}
      </FlexRow>
    </>
  );
};

export default CopyText;
