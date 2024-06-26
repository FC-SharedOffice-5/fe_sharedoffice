'use client';

import BackIcon from '@/assets/icons/back-icon';
import { useRouter } from 'next/navigation';

type HeaderProps = {
  title: string;
  suffix?: React.ElementType;
};

const Header = ({ title, suffix: SuffixComponent }: HeaderProps) => {
  const router = useRouter();

  return (
    <nav className="flex place-content-between items-center px-4 pb-3 pt-8">
      <div
        onClick={() => router.back()}
        className="place-content-left flex cursor-pointer pr-4"
      >
        <BackIcon />
      </div>
      <h1 className="label-large pr-4">{title}</h1>
      {SuffixComponent ? <SuffixComponent /> : <div />}
    </nav>
  );
};

export default Header;
