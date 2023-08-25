import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const chkFetching = async () => {
      try {
        const resp = await fetch(url);
        const users = await resp.json();
        setPeople(users);
      } catch (error) {
        console.log(error);
      }
    };

    chkFetching();
  }, []);

  //javascript fetching practice

  // fetch(url)
  //   .then((resp) => resp.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));

  // chkFetching(url);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {people.map((user) => {
          const { id, avatar_url, login } = user;
          // console.log(user);
          return (
            <li key={id}>
              <img src={avatar_url} />
              <div>
                <h5>{login}</h5>
                <a href="">profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
