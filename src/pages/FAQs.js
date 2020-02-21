import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBack } from '../components/index';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import { Typography } from '@rmwc/typography';
import { TypeQ, FormContainer, FlexColumn } from '../components/style';

const Type5 = styled(Typography)`
  && {
    text-align: left;
    padding-bottom: 0.8em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #5763a2;
    z-index: 50;
  }
`;

const FAQs = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <FlexColumn>
          <TypeQ use='headline5'>What is sexual harassment?</TypeQ>

          <Type5 use='body1'>
            Sexual harassment is when someone behaves in a way that makes you
            feel distressed, intimidated or offended and the behaviour is of a
            sexual nature.
          </Type5>
          <TypeQ use='headline6'>This includes:</TypeQ>
          <Type5 use='body1'>Sexual comments or jokes</Type5>
          <Type5 use='body1'>
            Physical behaviour: unwelcome sexual advances, touching and various
            forms of sexual assault.
          </Type5>
          <Type5 use='body1'>
            Displaying photos, pictures or drawings of a sexual nature.
          </Type5>
          <Type5 use='body1'>
            Sending messages, emails etc. with sexual content.
          </Type5>
          <Type5 use='body1'>
            Learn more on <a href='http://themu.org/'>theMU.org</a>
          </Type5>
          <TypeQ use='headline5'>What is sexual assault?</TypeQ>
          <Type5 use='body1'>
            Sexual assault is any type of sexual activity or contact that is not
            consented to
          </Type5>
          <TypeQ use='headline5'>Is the MU Safe Space for you?</TypeQ>
          <Type5 use='body1'>
            We want to hear from you if you already make or wish to make all or
            part of your living from music. You might be a student, a
            professional; be employed, self employed, not working at the moment,
            or looking for work. We also want to hear from you if you are an
            amateur musician. You might be playing in a community orchestra or
            performing as part of a choir.
          </Type5>
          <Type5 use='body1'>
            We need as many musicians as possible to share their experiences.
            The more experiences musicians share, the easier it will be for us
            to spot patterns and identify where we need to focus our work to
            create meaningful and lasting change.
          </Type5>
          <Type5 use='body1'>
            If you are aged 16 or under, or the incident happened when you were
            16 or under, it will not be covered by this survey. Please contact
            the <a href='https://rapecrisis.org.uk/'>Rape Crisis</a> or the{' '}
            <a href='https://www.nspcc.org.uk/'>NSPCC</a> for advice and
            support. You can also find a list of organisations at{' '}
            <a href='http://themu.org/safespace'>theMU.org/safespace</a>
          </Type5>
          <Type5 use='body1'>
            If you need an immediate help and support, check the services you
            can contact now:{' '}
            <a href='https://www.musiciansunion.org.uk/Home/Advice/Your-Career/Sexual-Harassment-and-Discrimination/help-and-support'>
              MU Help & Support
            </a>
          </Type5>
          <TypeQ use='headline5'>What the MU Safe Space can do</TypeQ>
          <TypeQ use='headline6'>For MU members:</TypeQ>
          <Type5 use='body1'>We can advise you on your legal rights</Type5>
          <Type5 use='body1'>
            We can provide information about relevant support services.
          </Type5>
          <Type5 use='body1'>
            We can support you if you would like to seek redress.
          </Type5>
          <Type5 use='body1'>
            We may be able to raise a complaint with the employer, engager, or
            even directly with the perpetrator.
          </Type5>
          <Type5 use='body1'>
            If both the alleged perpetrator and the complainant are MU members,
            then we also have the option of disciplinary action under MU rules.
          </Type5>
          <Type5 use='body1'>
            Please keep record of the unique ID number given at the end of the
            questions, this can be used later to reference your report if you so
            wish.
          </Type5>
          <TypeQ use='headline6'>For everyone:</TypeQ>
          <Type5 use='body1'>
            We can provide advice on what your rights are.
          </Type5>
          <Type5 use='body1'>
            We can provide information about relevant support services.
          </Type5>
          <Type5 use='body1'>
            In cases of bullying, discrimination and other inappropriate
            behaviour we can provide advice on your options and further steps.
          </Type5>
          <TypeQ use='headline5'>What the MU Safe Space cannot do</TypeQ>
          <Type5 use='body1'>
            We cannot provide counselling. But we will always provide
            information on relevant support services.
          </Type5>
          <Type5 use='body1'>
            We are very limited in terms of what can be done industrially to
            address a complaint of a sexual assault.
          </Type5>
          <Type5 use='body1'>
            We cannot guarantee the outcome that you want.
          </Type5>
          <ButtonBack tag={Link} to={'/'}>
            Home
          </ButtonBack>
        </FlexColumn>
      </FormContainer>
    </>
  );
};
export default FAQs;
