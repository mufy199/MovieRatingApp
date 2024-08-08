import React from 'react'
import { useParams } from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import {fetchMovieDetails} from './query'
import { Loader, Segment,Header } from 'semantic-ui-react'
function Movie() {
    const { id } = useParams()
    if (!id) {
        return (<div>Invalid Movie Id</div>)
    }
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["movie"],
        queryFn: () => fetchMovieDetails(id),
        onSuccess: (data) => {
            console.log('Fetched Movies:', data)
        }
    });
    console.log("detail data",data);
    if(isLoading) {
        return (<Loader active></Loader>)
    }
  return (
    <div style={{marginTop: 50}}>
        <Segment>
            <Header>{data.title}</Header>
        </Segment>
    </div>
  )
}

export default Movie