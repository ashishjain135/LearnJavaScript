import { useEffect, useState} from 'react';
import {Routes, Route, Link, useParams, Navigate} from 'react-router-dom';
function About(){
    return <h1>About Page</h1>      
}

function Home(){
    return <h1>I am a Home Page</h1>      
}   

function Listing(){
    return <h1>Listing Page</h1>      
}

function PageNotFound(){
    return <h1>404 Page Not Found</h1>      
}


//fetch user Components
function Users(props){
    const params=useParams();
    const [userData, setUserData]= useState(null);
    //useEffect for fetch user data from Api
    useEffect(()=>{
        //fetch user data from Api
            async function fetchData(){
            const resp =  await fetch(`https://fakestoreapi.com/users/${params.id}`);
            const userData = await resp.json();
            
            console.log("User Data: ", userData);
            setUserData(userData);
        }
        //IIFE -> Immediately Invoked Function Expression
        fetchData();
    },[]);

    console.log(props.isAdmin);

    console.log("Params: ", params);    
    return(
        <>
        {userData == null ? (
            <h1>Loading User Data...</h1>
         ) : (
            <>
            <h4>User Name: {userData.username}</h4>
            <h3>
                Name: {userData.name.firstname} {userData.name.lastname}
            </h3>
            <h3>Phone: {userData.phone}</h3>
            </>
        )}
        </>
    )
}










function Routing(){
    return (
        <>
        <h1>Routing Example</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>

                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/listing'>Listing</Link>  
                </li>
            </ul>
        </nav>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/listing' element={<Listing/>}/>
          
            <Route path='users/:id' 
            element={<Users isAdmin={true}/>}>
            </Route>
           {/* navigate to other route  */}
            <Route path="abc" element={<Navigate to="/" ></Navigate>}></Route>
             <Route path='*' element={<h1>404 Page Not Found</h1>}/>
        </Routes>
        </>
    )
}
export default Routing;