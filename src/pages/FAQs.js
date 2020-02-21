import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBack } from '../components/index';
import Header from '../components/Header/Header';
import { CollapsibleList, SimpleListItem, List } from '@rmwc/list';
import { TypeQ, FormContainer, FlexColumn } from '../components/style';
import '@material/list/dist/mdc.list.css';
import '@rmwc/list/collapsible-list.css';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer'


// let SListItem = styled(SimpleListItem)`
//   && {
//     #text {
//       font-size: 2em;
//       color: blue important!;
//     }
//   }
// `;

const FAQs = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <FlexColumn>


          {/* <List>
            <CollapsibleList
              handle={
                <SListItem
                  text='Icecream'
                  graphic='star'
                  metaIcon='chevron_right'
                />
              }
            >
              <SListItem text='Vanilla' />
              <SListItem text='Chocolate' />
              <CollapsibleList
                handle={
                  <SListItem
                    text='Nested Collapsible'
                    graphic='touch_app'
                    metaIcon='chevron_right'
                  />
                }
              >
                <SListItem text='Orange' />
                <SListItem text='Strawberry' />
                <SListItem text='Blueberry' />
              </CollapsibleList>
            </CollapsibleList>

            <CollapsibleList
              handle={<SListItem text='What is sexual harassment?' />}
              onOpen={() => console.log('open')}
              onClose={() => console.log('close')}
            >
              <SListItem
                text='Sexual harassment is when someone behaves in a way that makes you
            feel distressed, intimidated or offended and the behaviour is of a
            sexual nature.'
              />
              <SListItem
                text='This includes: Sexual comments or jokes, hysical behaviour: unwelcome sexual advances, touching and various
            forms of sexual assault.'
              />
              <SListItem text='Peanut Butter' />
            </CollapsibleList>

            <CollapsibleList
              handle={<SListItem text='What is sexual harassment?' />}
              onOpen={() => console.log('open')}
              onClose={() => console.log('close')}
            >
              <SListItem
                text='Sexual harassment is when someone behaves in a way that makes you
            feel distressed, intimidated or offended and the behaviour is of a
            sexual nature.'
              />
              <SListItem
                text='This includes: Sexual comments or jokes, hysical behaviour: unwelcome sexual advances, touching and various
            forms of sexual assault.'
              />
              <SListItem text='Peanut Butter' />
            </CollapsibleList>
          </List> */}

          <TypeQ use='headline5'>What is sexual harassment?</TypeQ>

          <TypeQ use='body1'>
            Sexual harassment is when someone behaves in a way that makes you
            feel distressed, intimidated or offended and the behaviour is of a
            sexual nature.
          </TypeQ>
          <TypeQ use='headline6'>This includes:</TypeQ>
          <TypeQ use='body1'>Sexual comments or jokes</TypeQ>
          <TypeQ use='body1'>
            Physical behaviour: unwelcome sexual advances, touching and various
            forms of sexual assault.
          </TypeQ>
          <TypeQ use='body1'>
            Displaying photos, pictures or drawings of a sexual nature.
          </TypeQ>
          <TypeQ use='body1'>
            Sending messages, emails etc. with sexual content.
          </TypeQ>
          <TypeQ use='body1'>
            Learn more on <a href='http://themu.org/'>theMU.org</a>
          </TypeQ>
          <TypeQ use='headline5'>What is sexual assault?</TypeQ>
          <TypeQ use='body1'>
            Sexual assault is any type of sexual activity or contact that is not
            consented to
          </TypeQ>
          <TypeQ use='headline5'>Is the MU Safe Space for you?</TypeQ>
          <TypeQ use='body1'>
            We want to hear from you if you already make or wish to make all or
            part of your living from music. You might be a student, a
            professional; be employed, self employed, not working at the moment,
            or looking for work. We also want to hear from you if you are an
            amateur musician. You might be playing in a community orchestra or
            performing as part of a choir.
          </TypeQ>
          <TypeQ use='body1'>
            We need as many musicians as possible to share their experiences.
            The more experiences musicians share, the easier it will be for us
            to spot patterns and identify where we need to focus our work to
            create meaningful and lasting change.
          </TypeQ>
          <TypeQ use='body1'>
            If you are aged 16 or under, or the incident happened when you were
            16 or under, it will not be covered by this survey. Please contact
            the <a href='https://rapecrisis.org.uk/'>Rape Crisis</a> or the
            <a href='https://www.nspcc.org.uk/'>NSPCC</a> for advice and
            support. You can also find a list of organisations at{' '}
            <a href='http://themu.org/safespace'>theMU.org/safespace</a>
          </TypeQ>
          <TypeQ use='body1'>
            If you need an immediate help and support, check the services you
            can contact now [link to the immediate help page]
          </TypeQ>
          <TypeQ use='headline5'>What the MU Safe Space can do</TypeQ>
          <TypeQ use='headline6'>For MU members:</TypeQ>
          <TypeQ use='body1'>We can advise you on your legal rights</TypeQ>
          <TypeQ use='body1'>
            We can provide information about relevant support services
          </TypeQ>
          <TypeQ use='body1'>
            We can support you if you would like to seek redress
          </TypeQ>
          <TypeQ use='body1'>
            We may be able to raise a complaint with the employer, engager, or
            even directly with the perpetrator
          </TypeQ>
          <TypeQ use='body1'>
            If both the alleged perpetrator and the complainant are MU members,
            then we also have the option of disciplinary action under MU rules.
          </TypeQ>
          <TypeQ use='headline6'>For everyone:</TypeQ>
          <TypeQ use='body1'>
            We can provide advice on what your rights are
          </TypeQ>
          <TypeQ use='body1'>
            We can provide information about relevant support services
          </TypeQ>
          <TypeQ use='body1'>
            In cases of bullying, discrimination and other inappropriate
            behaviour we can provide advice on your options and further steps.
          </TypeQ>
          <TypeQ use='headline5'>What the MU Safe Space cannot do</TypeQ>
          <TypeQ use='body1'>
            We cannot provide counselling. But we will always provide
            information on relevant support services.
          </TypeQ>
          <TypeQ use='body1'>
            We are very limited in terms of what can be done industrially to
            address a complaint of a sexual assault.
          </TypeQ>
          <TypeQ use='body1'>
            We cannot guarantee the outcome that you want.
          </TypeQ>
          <ButtonBack tag={Link} to={'/'}>
            Home
          </ButtonBack>
        </FlexColumn>
      </FormContainer>
      <Footer/>
    </>
  );
};
export default FAQs;
