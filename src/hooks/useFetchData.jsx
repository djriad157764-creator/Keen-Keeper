import { useEffect, useState } from "react";

const useFetchData = () => {
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadDAtaFromPublicFolder = async () => {
      const res = await fetch("/friendsData.json");
      const data = await res.json();
      setTimeout(() => {
        setFriendsData(data);
        setLoading(false);
      }, 100);
    };
    loadDAtaFromPublicFolder();
  }, []);

  const customHooksData = {
    loading,
    friendsData,
    setFriendsData,
  };

  return customHooksData;
};

export default useFetchData;
