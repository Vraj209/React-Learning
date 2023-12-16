
import { useLoaderData } from "react-router-dom";


function Github() {

    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/vraj209")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <>
      <div className="text-center bg-green-400 text-white-400 p-5 text-3xl">
        Github Followers:{data.followers}
        <img src={data.avatar_url} width="300"></img>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/vraj209")
    return response.json()
}