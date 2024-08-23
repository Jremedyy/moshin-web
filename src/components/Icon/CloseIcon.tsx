import { IconProps } from "./iconProps";

const CloseIcon = (props: IconProps) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"

      {...props}
    >
      <path
        d="M1.6999 25.1L0.899902 24.3L12.1999 13L0.899902 1.69999L1.6999 0.899994L12.9999 12.2L24.2999 0.899994L25.0999 1.69999L13.7999 13L25.0999 24.3L24.2999 25.1L12.9999 13.8L1.6999 25.1Z"
        fill="#000"
      />
    </svg>
  );
};

export default CloseIcon;
