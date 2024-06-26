'use client';

import { useMemo, ReactNode } from 'react';
import { Checkbox, Field, Label } from '@headlessui/react';

export type TSuffix = 'contentLink';

type TSuffixComponents = { [key in TSuffix]: ReactNode };

export type CheckBoxProps = {
  type?: 'circle' | 'rectangle';
  size?: 'default' | 5 | 6;
  outline?: boolean;
  title?: string | ReactNode;
  subTitle?: string;
  suffix?: TSuffix;
  onChange: (...event: any[]) => void;
  selected: boolean;
};

const variants = {
  circle: {
    rounded: 'rounded-full',
    border: 'data-[checked]:border-2 border',
    visibility: 'visible',
  },
  rectangle: {
    rounded: 'rounded-sm',
    border: 'border-2',
    visibility: 'invisible',
  },
};

export const BaseCheckbox = ({
  type = 'rectangle',
  selected,
  onChange,
  size = 'default',
  outline = true,
  ...props
}: Omit<CheckBoxProps, 'title' | 'subtitle' | 'suffix'>) => {
  const sizes = {
    default: 'size-[18px]',
    5: 'size-5',
    6: 'size-6',
  };

  return (
    <Checkbox
      checked={selected}
      onChange={onChange}
      className={`group flex ${sizes[size]} ${outline ? 'data-[checked]:border-primary data-[checked]:bg-primary' : ''} place-content-center ${variants[type].rounded} ${outline ? variants[type].border : 'border-0'} border-black/40 bg-white focus:outline-none`}
      {...props}
    >
      <svg
        className={`${type === 'circle' ? (selected ? 'visible' : 'invisible') : 'visible'}`}
        width="100%"
        height="100%"
        viewBox="0 0 12 9"
        fill="none"
      >
        <path
          className={`fill-black/40 ${outline ? 'group-data-[checked]:fill-white' : 'group-data-[checked]:fill-primary'}`}
          d="M4.5 8.125.75 4.405 1.942 3.25 4.5 5.763 10.057.25l1.193 1.185-6.75 6.69Z"
        />
      </svg>
    </Checkbox>
  );
};

const CheckBox = ({
  size = 'default',
  outline = true,
  title,
  subTitle,
  suffix,
  onChange,
  selected,
  ...props
}: CheckBoxProps) => {
  const suffixComponents: TSuffixComponents = useMemo(
    () => ({
      contentLink: <a className="body-small text-black/40 underline">내용보기</a>,
    }),
    [],
  );

  return (
    <div className="flex justify-between">
      <Field className="group flex items-center">
        <BaseCheckbox
          selected={selected}
          onChange={onChange}
          size={size}
          outline={outline}
          {...props}
        />
        {(title || subTitle) && (
          <Label
            className={`cursor-pointer ${title && 'label-small'} ${subTitle && 'body-small'} pl-2`}
          >
            {title || subTitle}
          </Label>
        )}
      </Field>
      {suffix && suffixComponents[suffix]}
    </div>
  );
};

export default CheckBox;
