import React, {useContext, useEffect} from 'react'
import HeroSection from './Components/HeroSection'
import { AppContext } from './Context';
import axios from 'axios';

const About = () => {
  const {serverData, setServerData} = useContext(AppContext);


  // const getData = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       // console.log(res.data);
  //       setServerData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

const data ={
  title: 'About Us',
  descriptions: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone, Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone',
  herobtn: 'Learn More',
  image: './images/about-img-1.png'
}

// console.log(serverData)
  return (
    <div>
      <HeroSection {...data}/>
        <div className="w-full mx-auto relative">
          <div className="container md:container mx-auto w-full px-24 py-10 relative">
            <div className="flex flex-col items-center w-full h-full justify-center py-10">
              {/* <button
                onClick={getData}
                className="block bg-transparent text-[#458FF6] font-medium text-lg px-5 py-2 mb-5 border border-[#458FF6] rounded-xl hover:bg-[#458FF6] hover:text-white"
              >
                Get Data
              </button> */}

              <div>
                <table>
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 py-2 text-left border">Id</th>
                      <th className="px-3 py-2 text-left border">Title</th>
                      <th className="px-3 py-2 text-left border">Body</th>
                    </tr>
                  </thead>
                  {serverData.map((item, index) => {
                    console.log(item);
                    return (
                      <tbody>
                        <tr>
                          <td className="px-3 py-2 text-left border">{index+1}</td>
                          <td className="px-3 py-2 text-left border">{item.title}</td>
                          <td className="px-3 py-2 text-left border">{item.body}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                {/* <p>{item.title}</p> */}
              </div>
            </div>
          </div>
        </div>
     
    </div>
  )
}

export default About