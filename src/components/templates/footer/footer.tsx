import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="footer">
      <div className="footer--main">
        <div className="contain">
          <div className="col3">
            <div className="col">
              <h3 className="col__header" data-i18n="footer:help">
                Help and resources
              </h3>
              <span className="col__header--list">
                <a href="/faq" data-i18n="footer:faq">
                  FAQ
                </a>
              </span>
              <span className="col__header--list">
                <a href="https://docs.dineropay.com" data-i18n="footer:dev">
                  API documenation
                </a>
              </span>
              <span className="col__header--list">
                <a href="https://docs.dineropay.com" data-i18n="nav:blog">
                  Blog
                </a>
              </span>
            </div>
            <div className="col">
              <h3 className="col__header" data-i18n="footer:contact">
                Contact Us
              </h3>
              <h4 className="col__header--sub" data-i18n="footer:sales">
                Sales
              </h4>
              <span className="col__header--list">
                <a href="mailto:sales@dineropay.com">sales@dineropay.com</a>
              </span>
              <h4 className="col__header--sub" data-i18n="footer:supp">
                Support
              </h4>
              <span className="col__header--list">
                <a href="mailto:support@dineropay.com">support@dineropay.com</a>
              </span>
              <h4 className="col__header--sub" data-i18n="footer:tel">
                Telephone
              </h4>
              <span className="col__header--list">
                <a href="tel:920013423">920013423</a>
              </span>
              <span className="proof">
                {' '}
                <img src="/assets/svg/logo-horiz.svg" alt="" />{' '}
                <img src="/assets/svg/pci.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <a href="/">
          <img
            className="footer__logo"
            src="/assets/svg/dinero-pay-logo.svg"
            alt="Dinero Pay Logo"
          />
        </a>
      </div>
    </section>
  );
};
