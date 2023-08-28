import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import Logo from '@icons/logo.svg';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="https://www.dineropay.com" title="Dinero Pay Home page">
            <Logo />
          </Link>
          <LanguageSelector />
        </Container>
      </nav>
    </header>
  );
};
