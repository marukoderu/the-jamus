import '../assets/css/sidebar.css'

export const Sidebar = () => {
    return(
        <div className="relative">
            <div className="fixed z-10 ">
            <div className="container shadow-black flex sticky top-0 left-0">
                <div className="title">
                    <h1>The Jamu’s</h1>
                </div>
                <div className="content">
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
        </div>
        </div>
    )
}