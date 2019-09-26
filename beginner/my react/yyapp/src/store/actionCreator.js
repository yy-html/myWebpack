export default {
    //home
    homeList(data){
        return {
            type: 'HOME_LIST',
            data
        }
    },
    //test
    test(data){
        return {
            type: "TEST",
            data
        }
    },
    test2(data){
        return {
            type: "TEST2",
            data
        }
    },
    test3Action(data){
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: 'TEST3',
                    data
                })
            },50)
        }
        // return {
        //     type: 'TEST3',
        //     data
        // }
    }
}