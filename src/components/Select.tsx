import { Select as AntdSelect } from "antd";
import { SelectProps } from "antd/es/select";

export default function Select(props: SelectProps) {
  return <AntdSelect {...props}>{props.children}</AntdSelect>;
}
