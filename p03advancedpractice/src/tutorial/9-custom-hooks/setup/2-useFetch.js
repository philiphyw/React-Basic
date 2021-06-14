import { useState, useEffect,useCallback} from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
  
    //without the useCallback, the getData and below useEffect will cause infinite loop
    const getData = useCallback(async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setLoading(false)
    },[url])
  
    useEffect(() => {
        getData();
    }, [url,getData])

    //return below object for re-use by other program
    return {loading, data}
};
