import React from 'react'

var Hoc = (Com)=>{
    return class extends React.Component {
        render (){
            // console.log('这里是hococooc')
            // console.log("props::",this.props)
            return (
                <div>
                    {
                        // sessionStorage.getItem("token")?this.props.history.push("/xiaowo"):this.props.history.push("/login")
                        sessionStorage.getItem("token")?<Com { ...this.props}/>:this.props.history.push("/login")
                    }
                    {/* <Com { ...this.props}/> */}
                </div>
            )
        }
    }
}

export default Hoc