import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../component/postlist';
import UserInfo from '../component/userinfo'
import {Link} from 'react-router-dom'

const defaultTitles = [
  {title:'全部',tabLab:'all'},
  {title:'精华',tabLab:'good'},
  {title:'分享',tabLab:'share'},
  {title:'问答',tabLab:'ask'},
  {title:'招聘',tabLab:'job'},
  {title:'客户端测试',tabLab:'dev'}
]

const Index = () => {
  const [ titles, setTitles ] = useState(defaultTitles)
  const [ lists, setLists ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ selectTabIndex, setSelectTabIndex ] = useState(0)
  const [ userData, setUserData ] = useState('')

  const selectTab = (tabLab, index) => {
    if (tabLab !== selectTabIndex) getData(tabLab, index)
  }
  
  const getData = async (tabLab = '', index) => {
    const { data } = await axios.request({
      url:`https://cnodejs.org/api/v1/topics/?tab=${tabLab}`,
    })
    if (tabLab !== '') {
      setSelectTabIndex(index)
    }
    return data
  }

  useEffect(() => {
    (async function () {
      const { data } = await getData()
      setLists(data)
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return (<div>加载中</div>)
  }
          return (
            <div className="main">
                <div className="main-left">
                    <div className="main-title">
                        <ul className="home-box-tab">
                            {
                                titles.map((title,index)=>
                                    <li key={index} onClick={selectTab.bind(this, index, title.tabLab)} className={index === selectTabIndex? 'cur':''}>
                                        <Link to={`?/tab=${title.tabLab}`}>{title.title}</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <PostList lists={lists} />
                </div>
                <UserInfo userData={userData}/>
            </div>
        )
}

export default Index;