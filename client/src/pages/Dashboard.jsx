import { CourseSearch } from "../components/CourseSearch"
import { MdBookmark} from "react-icons/md";
import { useAppContext } from "../context/AppProvider";

export default function Dashboard() {
  const { appData } = useAppContext();
  console.log(appData)
  return (

    <div className="flex flex-col sm:flex-row sm:gap-3">
      <div className="sm:w-1/2">
        <div className="flex items-center">
          <MdBookmark className="text-green-900 w-7 h-7"/> 
          <span className="self-start text-2xl font-bold">Favorites</span>
        </div>
        {appData.favoriteCourses.length>0 && appData.favoriteCourses.map(course => (
          <p>Course</p>
        ))}
      </div>
      <div className="sm:w-1/2">
        <div className="my-4 sm:m-0">
          <CourseSearch />

          {appData?.selectedCourse && 
          
          <div className="p-3 my-10 border-2 border-green-900 rounded">
              {appData.selectedCourse.layout_data.teeboxes.map(teebox => (
                <div className="">{teebox.name}</div>
              ))}
          </div>}
          
        </div>
      </div>
    </div>
    
  )
}
