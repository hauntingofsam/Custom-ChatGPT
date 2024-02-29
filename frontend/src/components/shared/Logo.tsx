// import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
// import CustomisedInput from "./CustomisedInput";
const Logo=()=>{
    return(
        <div style={{display:"flex",marginRight:"auto",gap:"8px",alignItems:"center"}}>
            <Link to={"/"}>
                <img src="openai.png" alt="openai" width={'30px'} height={'30px'} className="image-inverted"/>
                


            </Link>
            <Typography sx={{display:{md:"block",sm:"none",xs:"none"},mr: "auto",
                fontWeight: "800",
                textShadow: "2px 2px 20px #000"}}>
                    <span style={{ fontSize: "20px" }}>MERN</span>-GPT

            </Typography>
            

        </div>


    )
};
export default Logo;