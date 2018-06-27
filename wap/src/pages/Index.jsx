import React from 'react';
import PostLists from '../components/PostLists/PostLists';
import CHeader from '../components/CHeader/CHeader'
const Index = ({match}) => {
    return (
        <div>
            <CHeader />
            <PostLists match={match}/>
        </div>
    )
}

export default Index;