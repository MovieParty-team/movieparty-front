import CardMeta from "@/components/CardMeta";
import Image from "next/image";

interface Props {
  name: string;
  address: string;
  city: string;
  thumbnail: string;
}

export default function Theater(props: Props) {
  return (
    <CardMeta
      metaTitle={props.name}
      metaDescription={`${props.address}, ${props.city}`}
      cardProps={{
        hoverable: true,
        // cover: (
        //   <Image
        //     src={props.thumbnail}
        //     alt={props.name}
        //     width={100}
        //     height={100}
        //   />
        // ),
      }}
    />
  );
}
