"use client"

import { useState } from "react"
import { Method, AxiosError } from "axios";
import requestServer from "./request";

interface UseRequestProps {
    url: string,
    method: Method;
    body?: any
    params?: any
    headers?: any
}

interface ValidationError {
    message: string,
    field: string
}

type ValidationAxiosError = AxiosError & {
    response: {
        data: ValidationError[]
    }
}

const useRequest = () => {
    const [data, setData] = useState({})
    const [errors, setErrors] = useState<ValidationError[]>([])
    const [isLoading, setIsLoading] = useState(false)

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
                headers,
                withCredentials: true
            });
            setData(response.data);
            setErrors([])
        } catch (error) {
            const axiosError = error as ValidationAxiosError
            setErrors(axiosError.response?.data)
            setData({})
        }

        setIsLoading(false)
    }

    return { trigger, data, isLoading, errors }
}


export default useRequest
