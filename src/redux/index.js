import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

const whitRedux = PageComponent => {
    const WhitRedux = ({initialReduxState, ...props})=> {
        const store = configureStore();
        return (
            <Provider store={store}>
                <PageComponent {...props} />
            </Provider>
        )
    }
    return  WhitRedux;
}

export default whitRedux;