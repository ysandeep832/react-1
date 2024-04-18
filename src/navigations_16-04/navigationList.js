import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomeScreen from "../april-16Task.js/homePage"
import AboutScreen from "../april-16Task.js/aboutPage"
import InvalidPage from "../april-16Task.js/invalidPage"
import SignUp from "../april-16Task.js/settingsPage"

const AllInOne=()=>{
    return( 
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="/AboutScreen"  Component={AboutScreen}/>
        <Route path="*" Component={InvalidPage}/>
        <Route path="/SignUp" Component={SignUp}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default AllInOne