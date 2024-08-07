import { useQuery } from "react-query";
import { getVotingOptionsById } from "@api/getVotingOptionsById";
import { ResponseTypes } from "@api/getVotingOptionsById";

export function useGetVotingOptionsById(topicID: number) {
  const result = useQuery<ResponseTypes[], Error>(
    ["getVotingOptionsById", topicID],
    () => getVotingOptionsById(topicID),
    {
      onError: (error: any) => {
        // AxiosError 객체에서 response.data를 추출하여 접근
        if (error.response && error.response.data) {
          const errorData = error.response.data;
          if (
            errorData.success === false &&
            errorData.success_or_error_code &&
            errorData.success_or_error_code.status === 400
          ) {
            const message = errorData.success_or_error_code.message;
            console.log(message);
            alert(message); // alert 창으로 메시지 출력
          }
        }
      },
    },
  );

  return result;
}
