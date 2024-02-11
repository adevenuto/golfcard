import { useCallback, useState } from 'react'
import { Combobox } from '@headlessui/react'
import debounce from 'lodash.debounce'
import { cn } from '../utils'
import axiosClient from '../axios-client'

export const CourseSearch = () => {
  const [course, setCourse] = useState({
    layout_data: {},
    name: ''
  })
  const [courses, setCourses] = useState([{
    id: 0,
    city_id: '',
    layout_data: {},
    name: '',
    postal_code: '',
    state: '',
    state_id: '',
    street: '',
    updated_at: '',
    created_at: '',
  }])

  const getCourses = e => {
    let query = e.target.value

    console.log(query)
    
    if(query!=='') {
        axiosClient.get(`/course-search?query=${query}`)
        .then(res => {
            console.log(res)
            const response = res.data;
            if(response.length>0) return setCourses(response)
            return setCourses([])
        }).catch(err => {
            console.log(err)
        })
    } else {
        setCourses([])
        // setSelectedCourse({})
        // setTeeboxes({})
    }
  }
  const queryCourseHandler = useCallback(debounce(getCourses, 300), [])
  return (
    <Combobox value={course.name} onChange={setCourse}>
      <Combobox.Input 
        placeholder='Search for a course'
        className={cn("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5")}
        onChange={queryCourseHandler} 
      />
      <Combobox.Options className="mt-3">
        {courses.map((course) => (
          <Combobox.Option 
            className="border"
            key={course.id} 
            value={course}
          >
            {course.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}
