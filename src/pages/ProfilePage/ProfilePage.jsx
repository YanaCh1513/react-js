import { useCallback, Component, createContext, useContext, useState } from 'react';
import { profileStore } from '../../store';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import actions from '../../store/profile/actions'
import { getUserName, getShowName } from '../../store/profile/selectors';
import { ProfilePageView } from './ProfilePage.view';

export function ProfilePage() {
    const [cbValue, setcbValue] = useState(true);
    const [dummyValue, setDummyValue] = useState('dummy');
    // const { userName, showName, name } = useSelector((state) => state.profile);
    const userName = useSelector(getUserName)
    const showName = useSelector(getShowName)
    const [nameValue, setNameValue] = useState(userName)

    // console.log('profile store: ')
    // console.log(useSelector((state) => state.profile))

    const dispatch = useDispatch()

    // пробовала, без useCallback работает! ))
    const setShowName = (e) => {
        const isChecked = e.target.checked
        profileStore.dispatch(actions.changeShowName())
        setDummyValue(isChecked.toString())
    }

    // через useCallback, пока не поняла, в чем преимущетсво, вроде должен сохранжять результат между вызховами, 
    // но я пока не поняла, что это значит
    const setShowNameCallback = useCallback((e) => {
        const isChecked = e.target.checked
        profileStore.dispatch(actions.changeShowName())
        setDummyValue(isChecked.toString())
    }, [dispatch])

    // react-redux

    const setShowNameCallback2 = useCallback((e) => {
        dispatch(actions.changeShowName())
    }, [dispatch])

    const handleNameChange = useCallback((e) => {
        setNameValue(e.target.value)
    }, [])

    const setNameInStore = useCallback(() => {
        dispatch(actions.changeName(nameValue))
    }, [dispatch, nameValue])

    return (
        <>
            <ProfilePageView
                nameValue={nameValue}
                userName={userName}
                showName={showName}
                dummyValue={dummyValue}
                cbValue={cbValue}
                handleNameChange={handleNameChange}
                profileStore={profileStore}
                setNameInStore={setNameInStore}
                setShowNameCallback={setShowNameCallback}
                setShowNameCallback2={setShowNameCallback2}
                setcbValue={setcbValue}
            />
        </>
    )
}