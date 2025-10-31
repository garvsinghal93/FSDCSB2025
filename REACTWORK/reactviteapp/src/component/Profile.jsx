import './profile.css';
import Gallery from './Gallery';

function Profile({data}) {
  return (
    <div className='parent'>
        <h2>Profile Page</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMzFiLWMlh6RV2yQ10INO0BWQtmwfr0i0Mg&s"></img>
        <h2>Name: {data.name}</h2>
        <h2>Branch: {data.branch}</h2>
        <h2>Section: {data.section}</h2>
        <h1>College: {data.college}</h1>
        <h1 style={{color:'red',border:'2px solid red',backgroundColor:'blue'}}>Account Created</h1>
    </div>
  )
}
export default Profile