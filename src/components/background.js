import React from "react";

import './background.css';
class background extends React.Component{
    constructor(props){
        super(props);
        this.state=["https://anhdep123.com/wp-content/uploads/2020/05/Hinh-anh-cun-con-de-thuong-cute-lam-hinh-nen-dep-18.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS3_W5Tb7q3EPAWb84UIGLT2FAZ7Atjud7IWXyFaXXKKFNbQ9tp7G2UIUV9UMmsFZ9Oo&usqp=CAU"
                    ];

    }

    render(){
        return(
            <div >
                <div className="background borderCss" />
                <hr></hr>
            </div>
        )
    }
}

export default background;