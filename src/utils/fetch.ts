import axios, { AxiosResponse } from "axios";

const fetcher = (...args: [string, ...any[]]): Promise<any> | null => {
  return args.length ? axios.get(...args).then((res: AxiosResponse<any>) => res.data) : null;
};
export default fetcher;
