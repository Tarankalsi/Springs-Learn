import { fetcher } from "@/lib/utils";
import useSWR from "swr";

const useCurrentUser = (id: string) => {
  // const user = JSON.parse(localStorage.getItem("user") as string);
  const { data, error, isLoading, mutate } = useSWR(`/api/user/?id=${id}`, fetcher);

  return {
    currentUser: data?.response,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
