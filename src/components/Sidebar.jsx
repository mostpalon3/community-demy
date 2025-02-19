import { Link } from "react-router-dom"

function Sidebar({ open, setOpen }) {
    const isLoggedIn = false
    if (open)
    return (
  //theme #CAE0BC
      <div className="right-0 top-0 w-64 h-full bg-zinc-100 backdrop-blur-lg fixed shadow-lg z-10">
        <button className="absolute top-5 left-5" onClick={() => setOpen(false)}>
            {"X"}
        </button>
        <div className="text-center flex flex-col items-center justify-center h-full gap-8">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/signin">Signin</Link>
            {/* {isLoggedIn ? (
            <Link to="/profile">Profile</Link>
            ) : (
            <Link to="/login">Login</Link>
            )} */}
        </div>
      </div>
    )
}

export default Sidebar
