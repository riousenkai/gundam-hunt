import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Settings.css'
import Loading from '../Loading/Loading'

const Settings = () => {
    const [loaded, setLoaded] = useState(false)
    const user = useSelector((state) => state.user.mainUser)
    const [description, setDescription] = useState('')

    useEffect(() => {
        setDescription(user.description)
        setLoaded(true)
    }, [])

    if(loaded) {
    return (
        <div className="settings-main">
         <div className="settings-change">
            <p className="settings-title">Update Your Profile</p>
            <input></input>
         </div>
         <div className="settings-img-change">
         <p className="settings-title">Profile Picture</p>
         <img className="settings-img" src={user.image_url}></img>
         </div>
        </div>
    )
    }
    else return (
        <Loading />
    )
}

export default Settings;
