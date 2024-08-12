// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

// const Home = () => {

//     const [data: blogs, isPending, error] = useFetch('http://localhost:8000/blogs');

//     // we dont need this if we use json-server
//     // const [blogs, setBlogs] = useState([
//     //     { title: 'My new website1', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     //     { title: 'My new website2', body: 'lorem ipsum...', author: 'luigi', id: 2 },
//     //     { title: 'My new website3', body: 'lorem ipsum...', author: 'mario', id: 3 },
//     // ]);
//     // const [blogs, setBlogs] = useState(null);
//     // const [name, setName] = useState('mario');
//     // const [isPending, setIsPending] = useState(true);
//     // const [error, setError] = useState(null);

//     // const handleDelete = (id) => {
//     //     const newBlogs = blogs.filter(blog => blog.id !== id);
//     //     setBlogs(newBlogs);
//     // }

    

//     // this will run every time the component renders
//     // useEffect(() => {
//     //     console.log('use effect ran');
//     // }); 

//     // this will run only once when the component first renders and will keep updated the name variable setted to luigi if the button is clicked
//     // useEffect(() => {
//     //     console.log('use effect ran');
//     // }, [name]); 

//     // this will retrieve the json from json-server: npx json-server --watch data/db.json --port 8000
//     // useEffect(() => {
//     //     setTimeout(() => { // this set timeout is just to simulate a delay in the fetch
//     //         fetch('http://localhost:8000/blogs')
//     //         .then(res => {
//     //             if(!res.ok) {
//     //                 throw Error('could not fetch the data for that resource');
//     //             }
//     //             return res.json();
//     //         })
//     //         .then(data => {
//     //             setBlogs(data);
//     //             setIsPending(false);
//     //             setError(null);
//     //         })
//     //         .catch(err => {
//     //             setError(err.message);
//     //             setIsPending(false);
//     //         })
//     //     }, 1000);
//     // }, []);

//     return ( 
//         <div className="home">
//             { error && <div>{ error }</div>}
//             { isPending && <div>Loading...</div>}
//             {/* this is how templating work, if we dont put blogs && it will throw an error because blogs is null at the beginning */}
//             {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}
//             {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}
//             {/* we dont need this if we use json-server */}
//             {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" handleDelete={handleDelete} />} */}
//             {/* <p>{ name }</p>
//             <button onClick={() => setName('luigi')}>Change name</button> */}
//         </div>
//     );
// }
 
// export default Home;

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;