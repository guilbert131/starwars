import Navbar from "./Navbar";

const Layouts = ({children}) => {
    return ( 
<div className="content">
        <Navbar />
        { children }
     </div>
     );
}
 
export default Layouts;