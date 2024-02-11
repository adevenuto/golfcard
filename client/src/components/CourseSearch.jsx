import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { cn } from '../utils'

export const CourseSearch = () => {
  const [course, setCourse] = useState()
  const [query, setQuery] = useState('')

  // const filteredPeople =
  //   query === ''
  //     ? people
  //     : people.filter((person) => {
  //         return person.toLowerCase().includes(query.toLowerCase())
  //       })
  return (
    <Combobox value={course} onChange={setCourse}>
      <Combobox.Input 
        placeholder='Search for a course'
        className={cn("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5")}
        onChange={(event) => setQuery(event.target.value)} 
      />
      <Combobox.Options className="mt-3">
        {/* {filteredPeople.map((person) => (
          <Combobox.Option 
            className="border"
            key={person} 
            value={person}
          >
            {person}
          </Combobox.Option>
        ))} */}
      </Combobox.Options>
    </Combobox>
  )
}
