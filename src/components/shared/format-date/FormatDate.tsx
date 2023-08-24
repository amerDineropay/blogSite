import { useRouter } from 'next/router';

interface FormatDateProps {
  date: number | Date | undefined;
  locale?: string;
}

export const formatDateFunc = ({ date, locale }: FormatDateProps) => {
  if (!locale || !date) return null;

  const da = new Intl.DateTimeFormat(locale, {
    dateStyle: `${locale !== 'ar' ? 'full' : 'long'}`,
  }).format(new Date(date));
  return da;
};

export const FormatDate = (props: FormatDateProps) => {
  const { locale: localeFromRouter } = useRouter();

  if (!localeFromRouter) return null;
  const da = `${formatDateFunc({ ...props, locale: localeFromRouter })}`;

  return <>{da}</>;
};
