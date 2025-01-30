import React, { useState, useEffect } from 'react'
import { data, useParams } from 'react-router-dom'

const EventQuestions = () => {
  // get event ID from the route
  // const { eventId } = useParams()
  // get event name
  const [eventName, setEventName] = useState('')
  // state to store questions
  // const [questions, setQuestions] = useState([])
  // loading state
  const [loading, setLoading] = useState(true)
  // error state
  const [error, setError] = useState(null)

  // fetch questions when component mounts
  useEffect(() => {
    const fetchEventQuestions = async () => {
      try {
        console.log(`Fetching data from: http://localhost:3000/api/events`);
        const response = await fetch(`http://localhost:3000/api/events`)
        if (!response.ok) {
          throw new Error('Failed to fetch event and questions.')
        }
        const data = await response.json()
        console.log(data)
        // update states with fetched event name & questions
        setEventName(data[0].name)
        // setQuestions(data.questions)
      } catch (err) {
        setError(err.message)
      } finally {
        // stop loading
        setLoading(false)
      }
    }

    fetchEventQuestions()
    // callback: rerun fetch if eventId changes ADD AGAIN have put in dependency array
  }, [])

  if (loading) return <p>Loading events...</p>
  if (error) return <p>Error: { error }</p>

  return (
    <div>
      <h1>Questions for { eventName }</h1>
    </div>
  )
}

export default EventQuestions