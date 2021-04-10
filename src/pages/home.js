import React from "react";
import Footer from "../components/footer";
import Background from "../components/background";
class Home extends React.Component{
    render(){
        return(
            <div>
                <Background />
                <Footer />
            </div>
        )
    }
}

export default Home;