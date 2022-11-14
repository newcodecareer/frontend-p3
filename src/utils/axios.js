// import { environment } from "@/constants/environment";
import axios from "axios";
import omit from "lodash/omit";

const REQUEST_TIMEOUT = 10000;

// export const baseURL = "localhost:3000/v1";

const axiosInstance = axios.create({
  // baseURL: environment.apiBaseUrl,
  baseURL: "http://localhost:3000/v1",
  timeout: REQUEST_TIMEOUT,
});

export const api = async (
  endpoint,
  { method, params, requestData, token, headers, ...customConfig }
) => {
  const config = {
    method,
    headers: {
      Authorization: token ? `${token}` : "",
      "Content-Type": headers?.contentType ? headers.contentType : "application/json",
      ...omit(headers, ["contentType"]),
    },
    params,
    data: requestData,
    ...customConfig,
  };

  const response = await axiosInstance(endpoint, { ...config });
  return response;
};
