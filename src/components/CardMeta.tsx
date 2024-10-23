import { Card as AntdCard, CardProps } from "antd";
import { CardMetaProps } from "antd/es/card";

const { Meta } = AntdCard;

interface Props {
  cardProps: CardProps;
  metaProps: CardMetaProps;
}

export default function CardMeta(props: Props) {
  return (
    <AntdCard {...props.cardProps}>
      <Meta {...props.metaProps} />
    </AntdCard>
  );
}
