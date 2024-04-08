import { CourseSearch } from "../components/CourseSearch"
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useAppContext } from "../context/AppProvider";

export default function Dashboard() {
  const { favoriteCourses } = useAppContext();
  return (

    <div className="flex flex-col sm:flex-row sm:gap-3">
      <div className="sm:w-1/2">
        <div className="flex items-center">
          <MdOutlineFavoriteBorder className="w-6 h-6 text-red-500"/> 
          <span className="self-start text-xl">Favorites</span>
        </div>
        {favoriteCourses.length>0 && favoriteCourses.map(course => (
          <p>{course.name}</p>
        ))}
      </div>
      <div className="sm:w-1/2">
        <CourseSearch />
      </div>
    </div>
    
  )
}
