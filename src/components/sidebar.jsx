import '../assets/css/sidebar.css'

export const Sidebar = () => {
    return(
        <div className="container shadow-black flex">
            <div className="title">
                <h1>The Jamu’s</h1>
            </div>
            <div className="content font-neue font-bold">
                <div className="content-1">
                    <p>About</p>
                </div>
                <div className="content-1">
                    <p>History</p>
                </div>
                <div className="content-1">
                    <p>Recipes</p>
                </div>
            </div>
           
        </div>
    )
}