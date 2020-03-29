import React from 'react'

var Hoc = (Com)=>{
    return class extends React.Component {
        render (){
            return (
                <div>
                    {
                        sessionStorage.getItem("token")?<Com { ...this.props}/>:this.props.history.push("/login")
                    }
                </div>
            )
        }
    }
}

export default Hoc