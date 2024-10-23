import { DatePicker as AntdDatePicker } from "antd";
import { DatePickerProps } from "antd/es/date-picker";

export default function DatePicker(props: DatePickerProps) {
    return <AntdDatePicker {...props} />
}