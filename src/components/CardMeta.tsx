import { Card as AntdCard, CardProps } from "antd";

const { Meta } = AntdCard;

interface Props {
  cardProps: CardProps;
  metaTitle: string;
  metaDescription: string;
}

export default function CardMeta(props: Props) {
  return (
    <AntdCard {...props.cardProps}>
      <Meta title={props.metaTitle} description={props.metaDescription} />
    </AntdCard>
  );
}
