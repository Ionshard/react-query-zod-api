import { authHttp } from "../services/authHttp";
import { useQuery } from "react-query";
import { z } from "zod";
import { AxiosRequestConfig } from "axios";

export const createRequestHook = <Input = void>({
  baseConfig,
  buildUrl = (_, { url }) => url,
  buildConfig = (_, config) => config,
}: {
  baseConfig: AxiosRequestConfig<never>;
  buildUrl?: (
    input: Input,
    config: AxiosRequestConfig<never>
  ) => string | undefined;
  buildConfig?: <Data>(
    input: Input,
    config: AxiosRequestConfig<never>
  ) => AxiosRequestConfig<Data>;
}) => {
  return {
    validateWith: <ResultSchema extends z.ZodTypeAny>(schema: ResultSchema) => {
      type Result = z.infer<ResultSchema>;
      return (input: Input) => {
        const url = buildUrl(input, baseConfig);
        const requestConfig = buildConfig(input, { ...baseConfig, url });

        const queryKey = [
          requestConfig.url,
          requestConfig.params,
          requestConfig.data,
        ];

        return useQuery<Result>(queryKey, async () => {
          const { data } = await authHttp.request(requestConfig);
          const result = schema.parse(data);
          return result;
        });
      };
    },
  };
};
