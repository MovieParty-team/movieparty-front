"use client";

import useGetGroup from "@/api/group/hooks/useGetGroup";
import CustomLoading from "@/components/CustomLoading";
import Error from "@/components/Error";
import { Group } from "@/types/group.type";
import { ErrorMessage } from "formik";
import { useMemo } from "react";

interface Props {
  params: {
    groupId: number;
  };
}

export default function GroupPage(props: Props) {
  const { params } = props;

  const { data, isLoading } = useGetGroup(params.groupId);

  const groupData = useMemo((): Group | undefined => {
    if (data) {
      return data.provided;
    }
  }, [data]);

  if (isLoading) {
    return <CustomLoading />;
  } else if (!groupData) {
    return (
      <Error message="Une erreur est survenue lors de la recuperation des informations du groupe" />
    );
  } else {
    return (
      <section>
        <h1 className="text-3xl font-bold text-center">{groupData.name}</h1>
        <p className="text-center">{groupData.session_date}</p>
        {/* <p className="text-center">{groupData.theater.address}</p> */}
      </section>
    );
  }
}
