import { useCallback, useEffect, useState } from "react"
import { Button, CircularProgress } from '@mui/material'

import { useDispatch } from "react-redux/es/exports"
import { selectGists, selectGistsError } from "../../store/gists/selectors"
import { getAllGists } from "../../store/gists/actions"

import { useSelector } from "react-redux/es/hooks/useSelector"

const API_GISTS_PUBLIC = 'https://api.github.com/gists/public'
const API_GIST_PUBLIC = 'https://api.github.com/gists/{gistID}'

export function GistsPage() {

    // const [gists, setGists] = useState([])
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const gists = useSelector(selectGists)
    const error = useSelector(selectGistsError)
    const loading = useSelector(selectGistsError)

    const requestGistsThunk = () => {
        dispatch(getAllGists())
    }

    // const requestGists = () => {
    //     setLoading(true)
    //     setError(false)
    //     fetch(API_GISTS_PUBLIC)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`Request failed with status ${response.status}`)
    //             }
    //             return response.json()
    //         })
    //         .then((data) => setGists(data))
    //         .catch((err) => {
    //             setError(true)
    //             console.log(err)
    //         })
    //         .finally(() => setLoading(false))
    // }

    // const requestGistsAsync = async () => {
    //     setLoading(true)
    //     setError(false)
    //     try {
    //         const response = await fetch(API_GISTS_PUBLIC)
    //         if (!response.ok) {
    //             throw new Error(`Request failed with status ${response.status}`)
    //         }
    //         const data = await response.json()
    //         setGists(data)
    //     } catch (err) {
    //         setError(true)
    //         console.warn(err)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    useEffect(() => {
        requestGistsThunk()
        // requestGistsAsync()
    }, [])

    const renderGist = useCallback(
        (gist) => <li key={gist.id}> <h3> {gist.description || 'No description'}</h3></li>,
        []
    )

    if (loading) {
        return <CircularProgress />
    }

    if (error) {
        return (
            <>
                <h3>Error {error.message}</h3>
                <Button onClick={requestGistsThunk}>Rretry</Button>
            </>
        )
    }
    return (
        <>
            <h2>Gists List</h2>
            <ul>{gists.map(renderGist)}</ul>
        </>
    )
}
