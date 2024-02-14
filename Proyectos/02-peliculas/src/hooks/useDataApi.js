import { useState, useEffect } from "react";

function useDataApi(apiEndPoint) {
// tambien podriamos pasarle el initialState: function useDataApi(apiEndPoint,initialState) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndPoint);
                if(!response.ok) throw new Error('Error fetching data');
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message || error.status);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [apiEndPoint])

    return { data, isLoading, error };
}

export default useDataApi
