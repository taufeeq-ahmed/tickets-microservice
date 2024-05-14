import { useEffect, useState } from "react"
import { Method, AxiosError } from "axios";
import requestServer from "./request";

interface UseRequestProps {
    url: string,
    method: Method;
    body?: any
    params?: any
    headers?: any
    immediateRequest?: boolean
}

const useRequest = async (
    { url, method, body, params, headers, immediateRequest = false }: UseRequestProps
) => {
    const [data, setData] = useState({})
    const [errors, setErrors] = useState<AxiosError | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (immediateRequest) {
            trigger({ url, method, body, params, headers });
        }
    }, []);

    const trigger = async (
        { url, method, body, params, headers }: UseRequestProps
    ) => {
        setIsLoading(true)

        try {
            const response = await requestServer.request({
                url,
                method,
                data: body,
                params,
                headers
            });
            setData(response.data);
        } catch (err) {
            // setErrors(err.response ? err.response.data : err);
            console.log(err)
        }

        setIsLoading(false)
    }

    return { trigger, data, isLoading, errors }
}


export default useRequest
