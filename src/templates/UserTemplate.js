import { Fragment } from "react"
import { Route } from "react-router-dom"
import Header from "../components/HomePage/Header"





export const UserTemPlate=(props) => {
    //props:path, component

    return <div>
        <Route exact path={props.path} render={(propsRoute)=> {
            return <Fragment>
                <div className="d-flex">
                    <div className="w-50">
                        <img className="w-100 vh-100" src="https://picsum.photos/200/200" alt="..."/>
                    </div>
                    <div className="w-50">
                        <props.component {...propsRoute}/>
                    </div>
                </div>
            </Fragment>
        }}/>
    </div>

    
}