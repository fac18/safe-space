import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../index';
import { FlexColumn, PageContainer, ButtonBack, ButtonNext } from '../style';
import { Type5 } from './style';
import { refreshTable, getData } from '../../utils';

const Refresh = () => {
  const [choice, setChoice] = useState(null);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    if (choice) {
      getData(`${choice}-questions`)
        .then((records) => {
          return refreshTable(`${choice}-responses`, records);
        })
        .catch((err) => {
          // console.log(
          //   `Failed to refresh the ${choice}-responses table. Error: `,
          //   err
          // );
          setFailure(true);
        })
        .then((res) => {
          setSuccess(true);
        })
        .catch((err) => {
          // console.log(
          //   `Failed to fetch data from ${choice}-questions. Error: `,
          //   err
          // );
          setFailure(true);
        });
    }
  }, [choice]);

  return (
    <>
      <PageContainer>
        <Header />
        <FlexColumn>
          {success ? (
            <Type5 use='headline5' tag='h2'>
              You have successfully refreshed the {choice}-responses table
            </Type5>
          ) : null}

          {failure ? (
            <Type5 use='headline5' tag='h2'>
              There has been an error in refreshing the {choice}-responses table
            </Type5>
          ) : null}

          <ButtonNext onClick={() => setChoice('first')}>
            Refresh first-responses table
          </ButtonNext>

          <ButtonNext onClick={() => setChoice('witness')}>
            Refresh witness-responses table
          </ButtonNext>

          <ButtonBack tag={Link} to={'/'}>
            Home
          </ButtonBack>
        </FlexColumn>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Refresh;
