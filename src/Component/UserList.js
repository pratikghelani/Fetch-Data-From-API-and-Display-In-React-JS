import React ,{useState,useEffect} from 'react'
import UserCard from './UserCard'
export default function UserList() {
    const [user,setUser] = useState([]);
    const fetchData = () => {
        fetch("https://randomuser.me/api/?nat=us&results=100")
        .then((response) => 
        {
            return response.json();
        }).then((data) =>{
            let userData = data.results
           console.log(userData)
           setUser(userData)
        })
    }
    useEffect(()=>{
           fetchData();
    },[])
  return (
    <>
      <div className="container">
            <div className="row">
                {
                    user.map(data => ( 
                        <div className="col-3 mt-4">
                            <UserCard img={data.picture.large} name={data.name.title.toUpperCase()+" "+data.name.first.toUpperCase() + " "+data.name.last.toUpperCase()} description="Western Europe Time, London, Lisbon, Casablanca" />
                        </div>
                        )
                    )
                }
          </div>
    </div>
    </>
  )
}
