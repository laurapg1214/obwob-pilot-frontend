import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EventQuestions = () => {
  // get event ID from the route
  const { eventId } = useParams()
  // state to store questions
  const [questions, setQuestions] = useState([])
  // loading state
  const [loading, setLoading] = useState(true)
  // error state
  const [error, setError] = useState(null)

  // fetch questions when component mounts
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/events/${eventId}/questions`)
        if (!response.ok) {
          throw new Error("Failed to fetch questions.")
        }
        const data = await response.json()
        // update state with fetched questions
        setQuestions(data)
      } catch(err) {
        // handle errors
        setError(err.message)
      } finally {
        // stop loading
        setLoading(false)
      }
    }

    fetchQuestions()
    // callback: rerun fetch if eventId changes
  }, [eventId])

  if (loading) return <p>Loading questions...</p>
  if (error) return <p>Error: { error }</p>

  return (
    <div>
      <h1>Questions for {event.name></h1>
      <ul>
        { questions.map((question) => (
          <li key={ question.id }>{ question.text }</li>
        ))}
      </ul>
    </div>
  )
}

export default EventQuestions