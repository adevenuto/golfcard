import { useCallback, useState } from 'react';
import { Combobox } from '@headlessui/react';
import debounce from 'lodash.debounce';
import { cn } from '../utils';
import axiosClient from '../axios-client';
import { useAppContext } from "../context/AppProvider";

export const CourseSearch = () => {

  const { setSelectedCourse } = useAppContext();
  
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
    let query = e.target.value;
    if(query!=='') {
      axiosClient.get(`/course-search?query=${query}`)
      .then(res => {
        const response = res.data;
        if(response.length>0) return setCourses(response);
        return setCourses([]);
      }).catch(err => {
        console.log(err);
      })
    } else {
      setCourses([]);
    }
  }

  const queryCourseHandler = useCallback(debounce(getCourses, 300), [])
  return (
    <div className="flex flex-col">
      <Combobox value='' onChange={setSelectedCourse}>
        <div className="relative">
          <Combobox.Input 
            placeholder='Search for a course'
            className={cn("bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3")}
            onChange={queryCourseHandler} 
          />
          {courses.length>0 && 
            <Combobox.Options className="absolute w-full mt-1 bg-white rounded">
              {courses.map((course) => (
                <Combobox.Option 
                  className={({ active }) => cn('p-1 border-b cursor-pointer text-gray-900', 
                    active && 'bg-gray-200/25 text-gray-900'
                  )}
                  key={course.id} 
                  value={course}
                >
                  {course.name}
                </Combobox.Option>
              ))}
            </Combobox.Options>}
        </div>
      </Combobox>
    </div>
  )
}
