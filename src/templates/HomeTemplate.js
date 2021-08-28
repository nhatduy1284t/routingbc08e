import { Fragment } from "react"
import { Route } from "react-router-dom"
import Header from "../components/HomePage/Header"





export const HomeTemplate = (props) => {
    //props:path, component

    return <div>
        <Route exact path={props.path} render={(propsRoute) => {
            return <Fragment >
                <Header />
                <props.component {...propsRoute} />

            </Fragment>
        }} />
    </div>


}