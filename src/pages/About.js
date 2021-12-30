/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Mohd Talib</span>
              </p>
              <h2 className="about__heading">A freelance Penetration tester</h2>
              <div className="about__info">
                <PText>
                  I am from Lucknow, India. A place of Nawaab's and
                  Historical Monuments. Since my childhood, i love computers. I always
                  try to learn more and more in about computers. I love
                  the Geeky Commandline Interface more than GUI.
                  <br /> <br />
                  I started Pentesting since I was in class 8th. Pentesting is also an
                  art for me. I love it and now I have the opportunity to Hack things
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Mumtaz Educational Academy. High School, Rudauli']}
              />
              {/* <AboutInfoItem
                title="Collage"
                items={['BAF Shaheen College Chattogram']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              /> */}
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML 5', 'CSS 3', 'JavaScript', 'ReactJS', 'Bootstrap']}
              />
              {/* <AboutInfoItem
                title="BackEnd"
                items={['Django', 'Flask', 'NodeJS']}
              /> */}
              <AboutInfoItem
                title="Programming"
                items={['Python']}
              />
              <AboutInfoItem
                title="Systems"
                items={['Unix/Linux', 'RHEL', 'Windows Server 7/8/10']}
              />
              <AboutInfoItem
                title="Databases"
                items={['Mysql', 'Postgresql']}
              />
              <AboutInfoItem
                title="CMS"
                items={['Wordpress', 'Joomla', 'Drupal']}
              />
              <AboutInfoItem
                title="Other Skills"
                items={['Git', 'Virtualization', 'Networking', 'Pentesting']}
              />
              
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              {/* <AboutInfoItem
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              /> */}
              <AboutInfoItem
                title="2021-"
                items={['Intern at Tattva Foundation']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
