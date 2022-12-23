import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postSlice'

function Post(){
    const {posts,loading} = useSelector((state)=>state.post)
    const dispatch = useDispatch();
    useEffect (()=>{
        dispatch(getPosts());
        
    },[]
    );
             console.log(posts[0])
    var posts0 = posts[0];
    console.log(posts0)
    // const fulfilled = useSelector((state)=>state.fulfilled)
    // if (posts[0].hasOwnProperty('email')) {
    //         console.log(posts[0].email)

    // }


    return(
        <div>{JSON.stringify(posts0)}
                <h1 >Total Air vol. consumption <p className="total_consumption">test</p></h1>
        </div>
    );
}
export default Post;