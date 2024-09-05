import { Input as AntdInput } from "antd";
import { SearchProps } from "antd/es/input";

const { Search: AntdSearch } = AntdInput;

export default function Search(props: SearchProps) {
  return <AntdSearch {...props} />;
}
