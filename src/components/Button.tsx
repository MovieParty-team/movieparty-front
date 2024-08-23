import { Button as AntdButton, ButtonProps } from "antd";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function Button({ ...props }: CustomButtonProps) {
  return <AntdButton {...props}>{props.children}</AntdButton>;
}
