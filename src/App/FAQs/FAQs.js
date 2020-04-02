import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { Header, Footer, Loading } from '../index';
import { FlexColumn, PageContainer, ButtonBack } from '../style';
import { Container, ContentWrapper, Type5, TypeH3 } from './style';
import { getData, makeSlug } from '../../utils';
import { hardFaqQuestions } from '../../model';

const FAQs = () => {
  const [faqQuestions, setFaqQuestions] = useState(null);

  useEffect(() => {
    getData('faq-questions')
      .then(records => {
        setFaqQuestions(records);
      })
      .catch(err => {
        setFaqQuestions(hardFaqQuestions);
        console.log(
          'Failed to fetch FAQ question data - falling back to hard coding. Error: ',
          err
        );
      });
  }, []);

  if (!faqQuestions) return <Loading />;

  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Header />
          <Container>
            <FlexColumn>
              <TypeH3 use='headline4'>Frequently Asked Questions</TypeH3>
              <br></br>

              <ul>
                {faqQuestions.map((faq, i) => (
                  <li>
                    <a href={`#${makeSlug(faq.question)}`}>{faq.question}</a>
                  </li>
                ))}
              </ul>

              {faqQuestions.map((faq, i) =>
                faq.question && faq.paras ? (
                  <React.Fragment key={i}>
                    <TypeH3 use='headline5' id={makeSlug(faq.question)}>
                      {faq.question}
                    </TypeH3>
                    {faq.paras.map((para, j) => {
                      // need to parse links out of paragraph so they can be proper html, without introducing security risks
                      // for this we'll use the npm packages html-react-parser, imported above, and only allow text and <a> tags
                      return (
                        <Type5 key={`${i}.${j}`} use='body1'>
                          {parse(para, {
                            replace: node => {
                              if (
                                !(node.type !== 'text' || node.name !== 'a')
                              ) {
                                return <></>;
                              } else {
                                return node;
                              }
                            },
                          })}
                        </Type5>
                      );
                    })}
                  </React.Fragment>
                ) : null
              )}

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
