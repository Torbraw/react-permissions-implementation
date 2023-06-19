import { JSXElementConstructor, ReactElement } from 'react';

type Props = {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
};

export default function PageLayout({ children }: Props) {
  return <div className="mt-8 flex flex-col items-center gap-16">{children}</div>;
}
