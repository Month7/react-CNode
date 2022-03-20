import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../component/postlist';
import UserInfo from '../component/userinfo'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '../reducer'
import { HomeStore  } from '../reducer/home';
import { getArticleList } from '../actions/home'

const defaultTitles = [
  { title:'全部',tabLab:'all' },
  { title:'精华',tabLab:'good' },
  { title:'分享',tabLab:'share' },
  { title:'问答',tabLab:'ask' },
  { title:'招聘',tabLab:'job' },
  { title:'客户端测试',tabLab:'dev' }
]



const Index = () => {
  // const testData = useSelector<Store>((state) => state.home)
  const homeData = useSelector<Store, HomeStore>(state => state.home)
  const dispatch = useDispatch()
  const getData2 = dispatch({ type: ''})
  const [ titles ] = useState(defaultTitles)
  // const [ lists, setLists ] = useState<any>([])
  // const [ loading, setLoading ] = useState(true)
  const [ selectTabIndex, setSelectTabIndex ] = useState<any>(0)
  const [ userData ] = useState('')

  const selectTab = (tabLab: any, index: any) => {
    if (tabLab !== selectTabIndex) getData(tabLab, index)
  }
  
  const getData = (tabLab = '', index?: number) => {
    // const { data } = await axios.request({
    //   url:`https://cnodejs.org/api/v1/topics/?tab=${tabLab}`,
    // })
    dispatch(getArticleList(tabLab, index))
    
    if (tabLab !== '') {
      setSelectTabIndex(index)
    }
    // dispatch({
    //   type: 'fetch_success',
    //   payload: data.data
    // })
    // console.log('getData', data.data)
    // return data
  }

  useEffect(() => {
    getData()
    // (async function () {
    //   await getData()
    //   // setLists(testData.list)
    //   // setLoading(testData.loading)
    //   // setLists(data)
    //   // setLoading(false)
    //   // console.log('testData', testData)
    // })()
  }, [])

  if (homeData.loading) {
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
                    <PostList lists={homeData.list} />
                </div>
                <UserInfo userData={userData}/>
            </div>
        )
}


export default Index;