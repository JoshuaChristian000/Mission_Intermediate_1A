import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse, deleteCourse, fetchCourses, updateCourse } from '../features/courses/courseSlice';
import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'

const AdminPage = () => {

    const dispatch = useDispatch();
    const {courses, loading, error} = useSelector((state) => state.courses);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [editCourseId, setEditCourseId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editDescription, setEditDescription] = useState("");

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    // Add Course Handles
    const handleAdd = (e) => {
        e.preventDefault();
        if(!name.trim() || !description.trim()) return;

        dispatch(addCourse({ name, description}));
        setName("");
        setDescription("");
    };

    // Edit Movie btn click
    const editCourse = (course) => {
        setEditCourseId(course.id);
        setEditName(course.name);
        setEditDescription(course.description);
    };

    // cancel edit 
    const cancelEditCourse = () => {
        setEditCourseId(null);
        setEditName("");
        setEditDescription("");
    };

    // Course Edit Submit
    const handleUpdate = (e) => {
        e.preventDefault();
        if(!editName.trim() || !editDescription.trim()) return;

        dispatch(updateCourse({ id: editCourseId, name: editName, description: editDescription}));
        cancelEditCourse();
    };

    // Handle Delete
    const handleDelete = (id) => {
        if(window.confirm("Are you sure to delete this course?")) {
            dispatch(deleteCourse(id));
        }
    };

console.log("Courses:", courses);
console.log("Loading:", loading);
console.log("Error:", error);

  return (
     <>
        <Navbar />   
        <div className='bg-success/50 pb-10'>
            <section>
            <div className="hero py-10">
                <div className="card w-full max-w-xl bg-base-100 shadow-md mx-auto">
                <div className="card-body space-y-4">
                    <h2 className="card-title text-center text-4xl">Course</h2>
                    <form onSubmit={handleAdd} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                        Course Name <span className="text-red-500">*</span>
                        </label>
                        <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Course Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                        Description <span className="text-red-500">*</span>
                        </label>
                        <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <Buttons className="btn btn-warning text-white w-full" type="submit">
                        Add Course
                    </Buttons>
                    </form>
                </div>
                </div>
            </div>



            {/* Card */}
        
            {loading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-500">{error.message || JSON.stringify(error)}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {courses
                .slice()
                .reverse()
                .map((course) => (
                    <div key={course.id} className="card bg-white rounded-2xl shadow-md border p-4">
                    {editCourseId === course.id ? (
                        <form onSubmit={handleUpdate} className="space-y-3">
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                        />
                        <div className="flex justify-end gap-2">
                            <Buttons type="submit" className="btn btn-sm btn-primary">Save</Buttons>
                            <Buttons type="button" onClick={cancelEditCourse} className="btn btn-sm btn-outline">Cancel</Buttons>
                        </div>
                        </form>
                    ) : (
                        <div className="card-body space-y-3">
                        <h3 className="text-lg font-bold text-gray-800">{course.name}</h3>
                        <p className="text-gray-500 text-sm">{course.description}</p>
                        <div className="flex justify-end gap-2">
                            <Buttons onClick={() => editCourse(course)} className="btn btn-sm btn-info text-white">Edit</Buttons>
                            <Buttons onClick={() => handleDelete(course.id)} className="btn btn-sm btn-error text-white">Delete</Buttons>
                        </div>
                        </div>
                    )}
                    </div>
                ))}
            </div>
            </section>

    </div>
    </>
  )
}

export default AdminPage