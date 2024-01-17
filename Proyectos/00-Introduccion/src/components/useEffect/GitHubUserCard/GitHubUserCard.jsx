// imports
// globals

import { useEffect, useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";
import Spinner from "./Spinner";
import CardGitHub from "./CardGitHub";
import Modal from "./Modal";

const GitHubUserCard = () => {
  // hooks
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  // vars
  // functs
  const openModal = (avatarUrl) => {
    setSelectedUser(avatarUrl);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
    // traer la data, la guardo en fetchData y la seteo a mi estado users con setUsers
    const fetchData = async () => {
      try {
        const data = await fetchGitHubUsers();
        setUsers(data);
        setTimeout(async () => {
          setLoading(false);
        }, 1500);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-[85%] text-center relative">
      <h1 className="text-3xl font-mono font-bold mb-8">
        Usando useEffect para realizar un fecth de la Api de GitHub
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <CardGitHub
                key={user.id}
                avatar_url={user.avatar_url}
                login={user.login}
                html_url={user.html_url}
                openModal={openModal}
              />
            ))}
          </div>
          <Modal
            isOpen={!!selectedUser}
            avatar_url={selectedUser}
            onClose={closeModal}
          />
        </>
      )}
    </div>
  );
};

export default GitHubUserCard;
