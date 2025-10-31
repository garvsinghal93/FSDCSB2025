import Profile from "./Profile"


function Gallery() {
  const student = 
  [{
    name : "Lakshay Goel",
    branch : "CS",
    section : "B",
    college : "ABES Engineering College"
  },
  {
    name : "Ishita ",
    branch : "CS",
    section : "B",
    college : "ABES Engineering College"
  },
  {
    name : "Ayush Kumar",
    branch : "CS",
    section : "B",
    college : "ABES Engineering College"
  }
]
  return (
    <div className="card">
      {/* <div><Profile name="Rahul Kumar" branch="CS" section="B" college="ABES Engineering College"/></div>
      <div><Profile name="Ayush Kumar" branch="CS" section="B" college="ABES Engineering College"/></div> */}
      {/* <Profile data = {student} /> */}
      {
      student.map((ele,index)=>(
        <Profile data={ele} key={index}/>
      ))
      }
    </div>
  )
}
export default Gallery