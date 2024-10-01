import CardMeta from "@/components/CardMeta";
import Image from "next/image";
import TheaterImage from "@/assets/theaterImage.jpg";

interface Props {
  name: string;
  address: string;
  city: string;
  thumbnail: string;
}

export default function Theater(props: Props) {
  const metaDescription = props.address;
  return (
    <CardMeta
      metaProps={{
        title: props.name,
        description: `${metaDescription.slice(0, 25)}...`,
        style: { textAlign: "center" },
      }}
      cardProps={{
        hoverable: true,
        cover: (
          <div className="aspect-[1/1] w-full relative overflow-hidden">
            <Image
              src={props.thumbnail ?? TheaterImage}
              alt={props.name}
              fill
              className="object-cover"
            />
          </div>
        ),
        className: "w-[45%] md:w-[13%]",
      }}
    />
  );
}