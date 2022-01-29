/*eslint-disable*/

import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Mohd Talib</h1>
          <PText>
            A Beginner in Web Designing and Pentesting from Lucknow, India. I
            always love to play CTF (Capture the flag ) Challenges and do
            Pentesting. Currently Learning ReactJs.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+918756562180",
                path: "tel:+918756562180",
              },
              {
                title: "lunatic_samael@protonmail.com",
                path: "mailto:lunatic_samael@protonmail.com",
              },
              {
                title: "Lucknow, Husainabaad, India",
                path: "https://www.google.com/maps/d/u/0/viewer?ie=UTF8&t=h&oe=UTF8&msa=0&mid=1PRNsTVTx_mxFS944bTNCFZldOoI&ll=26.87551370862881%2C80.90264370447694&z=16",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: "Facebook",
                path: "http://facebook.com/clinerds",
              },
              {
                title: "Twitter",
                path: "http://twitter.com/clinerds",
              },
              {
                title: "Instagram",
                path: "http://instagram.com/lunatic_samael",
              },
              {
                title: "Blog",
                path: "https://clinerds.com",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Mohd Talib | Designed By{" "}
            <a target="_blank" rel="noreferrer" href="https://clinerds.com">
              CLI Nerds
            </a>{" "}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
