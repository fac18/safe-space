import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../index';
// import { Collapse } from './index';
import { FlexColumn, PageContainer, ButtonBack } from '../style';
import { Container, ContentWrapper, Type5, TypeH3 } from './style';

const FAQs = () => {
  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Header />
          <Container>
            <FlexColumn>
              {/* <PageContainer>
        <ContentWrapper>
          <Header />
          <Container>
            <FormContainer> */}
              {/* <FlexColumn> */}
              <TypeH3 use='headline4'>Frequently Asked Questions</TypeH3>
              <br></br>
              {/* <TypeH3 use='headline5'>What is sexual harassment?</TypeH3>
                <TypeH3 use='headline5'>What is sexual assault?</TypeH3>
                <TypeH3 use='headline5'>Is the MU Safe Space for you?</TypeH3>
                <TypeH3 use='headline5'>What the MU Safe Space can do</TypeH3>
                <TypeH3 use='headline5'>What the MU Safe Space cannot do</TypeH3> */}

              {/* <Collapse> */}

              <TypeH3 use='headline5'>What is MU Safe Space?</TypeH3>
              <Type5 use='body1'>
                Safe Space exists to provide a safe space for all musicians to
                share instances of sexism, sexual harassment and sexual abuse in
                the music industry.
              </Type5>
              <Type5 use='body1'>
                If you have, whatever your role in the music industry, you can
                report it in confidence using this service.
              </Type5>
              <Type5 use='body1'>
                All your answers will be treated in the strictest confidence.
                Only four members of staff will have access to your answers,
                which we will use to inform our work on making the music
                industry safer.
              </Type5>

              <TypeH3 use='headline5'>What is sexual harassment?</TypeH3>
              <Type5 use='body1'>
                Sexual harassment is when someone behaves in a way that makes
                you feel distressed, intimidated or offended and the behaviour
                is of a sexual nature.
              </Type5>
              <TypeH3 use='headline6'>This includes:</TypeH3>
              <Type5 use='body1'>Sexual comments or jokes</Type5>
              <Type5 use='body1'>
                Physical behaviour: unwelcome sexual advances, touching and
                various forms of sexual assault.
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
              {/* </Collapse> */}
              {/* <Collapse> */}
              <TypeH3 use='headline5'>What is sexual assault?</TypeH3>
              <Type5 use='body1'>
                Sexual assault is any type of sexual activity or contact that is
                not consented to
              </Type5>
              {/* </Collapse> */}
              {/* <Collapse> */}
              <TypeH3 use='headline5'>Is the MU Safe Space for you?</TypeH3>
              <Type5 use='body1'>
                We want to hear from you if you already make or wish to make all
                or part of your living from music. You might be a student, a
                professional; be employed, self employed, not working at the
                moment, or looking for work. We also want to hear from you if
                you are an amateur musician. You might be playing in a community
                orchestra or performing as part of a choir.
              </Type5>
              <Type5 use='body1'>
                We need as many musicians as possible to share their
                experiences. The more experiences musicians share, the easier it
                will be for us to spot patterns and identify where we need to
                focus our work to create meaningful and lasting change.
              </Type5>
              <Type5 use='body1'>
                If you are aged 16 or under, or the incident happened when you
                were 16 or under, it will not be covered by this survey. Please
                contact
                <a href='https://rapecrisis.org.uk/'>Rape Crisis</a> or the
                <a href='https://www.nspcc.org.uk/'>NSPCC</a> for advice and
                support. You can also find a full list of support organisations
                on our
                <a href='/support'>Support Services page</a>
              </Type5>
              <Type5 use='body1'>
                If you need an immediate help and support, check the services
                you can contact now:{' '}
                <a href='https://www.musiciansunion.org.uk/Home/Advice/Your-Career/Sexual-Harassment-and-Discrimination/help-and-support'>
                  MU Help & Support
                </a>
              </Type5>
              {/* </Collapse> */}
              {/* <Collapse> */}
              <TypeH3 use='headline5' tag={Link} to={'/'}>
                What the MU Safe Space can do
              </TypeH3>
              <TypeH3 use='headline6'>For MU members:</TypeH3>
              <Type5 use='body1'>We can advise you on your legal rights</Type5>
              <Type5 use='body1'>
                We can provide information about relevant support services.
              </Type5>
              <Type5 use='body1'>
                We can support you if you would like to seek redress.
              </Type5>
              <Type5 use='body1'>
                We may be able to raise a complaint with the employer, engager,
                or even directly with the perpetrator.
              </Type5>
              <Type5 use='body1'>
                If both the alleged perpetrator and the complainant are MU
                members, then we also have the option of disciplinary action
                under MU rules.
              </Type5>
              <Type5 use='body1'>
                Please keep record of the unique ID number given at the end of
                the questions, this can be used later to reference your report
                if you so wish.
              </Type5>
              <TypeH3 use='headline6'>For everyone:</TypeH3>
              <Type5 use='body1'>
                We can provide advice on what your rights are.
              </Type5>
              <Type5 use='body1'>
                We can provide information about relevant support services.
              </Type5>
              <Type5 use='body1'>
                In cases of bullying, discrimination and other inappropriate
                behaviour we can provide advice on your options and further
                steps.
              </Type5>
              {/* </Collapse> */}
              {/* <Collapse> */}
              <TypeH3 use='headline5'>What the MU Safe Space cannot do</TypeH3>
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
              {/* </Collapse> */}
              <ButtonBack tag={Link} to={'/'}>
                Home
              </ButtonBack>
            </FlexColumn>
            {/* </FormContainer> */}
          </Container>
        </ContentWrapper>
        <Footer />
      </PageContainer>
    </>
  );
};

export default FAQs;
