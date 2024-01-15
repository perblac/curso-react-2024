// imports
// globals

import { useEffect, useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";

const GitHubUserCard = () => {
  // hooks
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // traer la data, la guardo en fetchData y la seteo a mi estado users con setUsers
    const fetchData = async () => {
      try {
        const data = await fetchGitHubUsers();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  // vars
  // functs
  return (
        { loading ? (<Spinner/> : <>
        {users.map(/* pinta cards nombre logo y url repositorio, onClick  -> modal)*/)}
        </>)}
    );
};

export default GitHubUserCard;
