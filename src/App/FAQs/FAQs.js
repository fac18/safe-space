import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { Header, Footer, Loading, Error500 } from '../index';
import { FlexColumn, PageContainer, ButtonBack, ButtonNext } from '../style';
import { Container, ContentWrapper } from './style';
import { getData, makeSlug } from '../../utils';

const FAQs = () => {
  const [faqQuestions, setFaqQuestions] = useState(null);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    if (!serverError) {
      getData('faq-questions')
        .then((records) => {
          setFaqQuestions(records);
        })
        .catch((err) => {
          setServerError(true);
        });
    }
  }, [serverError]);

  if (serverError)
    return (
      <Error500
        clickFunc={() => {
          setServerError(false);
        }}
        pathname='/frequently-asked-questions'
      />
    );

  if (!faqQuestions) return <Loading />;

  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Header />
          <Container>
            <FlexColumn>
              <h1 id='page-title'>Frequently Asked Questions</h1>
              <br></br>

              <ul>
                {faqQuestions.map((faq, i) => (
                  <h2 key={i}>
                    <li>
                      <a href={`#${makeSlug(faq.question)}`}>{faq.question}</a>
                    </li>
                  </h2>
                ))}
              </ul>

              {faqQuestions.map((faq, i) =>
                faq.question && faq.paras ? (
                  <React.Fragment key={i}>
                    <h2 use='headline5' id={makeSlug(faq.question)}>
                      {faq.question}
                    </h2>
                    {faq.paras.map((para, j) => {
                      // need to parse links out of paragraph so they can be proper html, without introducing security risks
                      // for this we'll use the npm packages html-react-parser, imported above, and only allow text and <a> tags
                      return (
                        <p key={`${i}.${j}`} use='body1'>
                          {parse(para, {
                            replace: (node) => {
                              if (
                                !(node.type !== 'text' || node.name !== 'a')
                              ) {
                                return <></>;
                              } else {
                                return node;
                              }
                            },
                          })}
                        </p>
                      );
                    })}
                  </React.Fragment>
                ) : null
              )}

              <ButtonNext>
                <a href='#page-title'>Back to top</a>
              </ButtonNext>
              <ButtonBack tag={Link} to={'/'}>
                Home
              </ButtonBack>
            </FlexColumn>
          </Container>
        </ContentWrapper>
        <Footer />
      </PageContainer>
    </>
  );
};

export default FAQs;
