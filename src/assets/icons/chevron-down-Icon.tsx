type ChevronDownIconProps = {
  color?: 'gray' | 'black';
};

const ChevronDownIcon = ({ color = 'gray' }: ChevronDownIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <path
      stroke="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={color === 'gray' ? 0.4 : 1}
      strokeWidth={1.5}
      d="m6.25 9.125 5.75 5.75 5.75-5.75"
    />
  </svg>
);

export default ChevronDownIcon;
