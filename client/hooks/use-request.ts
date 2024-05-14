import { useState } from 'react';
import axios, { AxiosResponse, AxiosError, Method } from 'axios';
import request from './request';

interface UseRequestReturnType<T> {
    trigger: (url: string, method: Method, body?: any) => void;
    reset: () => void;
    data: T | null;
    error: AxiosError<T> | null;
    loading: boolean;
}

const useRequest = <T>(): UseRequestReturnType<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<AxiosError<T> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const trigger = async (url: string, method: Method, body?: any, params?: any) => {
        setLoading(true);
        try {
            const response: AxiosResponse<T> = await request.request<T>({
                url,
                method,
                data: body,
                params: params
            });
            setData(response.data);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setData(null);
        setError(null);
    };

    return { trigger, reset, data, error, loading };
};

export default useRequest;
