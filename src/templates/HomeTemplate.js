import { Fragment, useEffect, useState } from "react";

//Fragment giống thẻ div mà không hiển thị chỉ dùng để bao bọc trang
import { Route } from "react-router-dom"
import Header from "../components/HomePage/Header"





export const HomeTemplate = (props) => {
    //props (path,component)
    const [state, setState] = useState({ width: window.innerWidth })
    useEffect(() => {
        console.log("ahihi")
        window.onload = () => {
            setState({
                window: window.innerWidth
            })
        }
        console.log('resize')
        window.onresize = () => {
            console.log(state)
            setState({ width: window.innerWidth })
        }

    }, [])

    return <Route exact path={props.path} render={(propsRoute) => {
        if (state.width <= 768) {
            return <Fragment>
                <Header />
                <props.mobileComponent {...propsRoute} />
            </Fragment>
        }
        return <Fragment>
            <Header />
            <props.component {...propsRoute} />
        </Fragment>
    }} />

}
