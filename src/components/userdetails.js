import React from 'react';
const userdetails=(props)=>{
    // console.log(props)
    return(
        <React.Fragment>
            
            
            <div className="text-center  ">
                <h1>the User Details</h1>

               <br></br>
              
            <p>the user id is :{props.match.params.id}
            
            </p>
            <p>
            the user name is :ALI
            </p>
            <p>
                the user Age is :23 years old
            </p>
            </div>
        </React.Fragment>
    )
};


export default userdetails