import React from 'react'

const Cards = ({course}) => {
  
    return (
    <div>

        {/* <!-- Card --> */}
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-5 pt-5" >                    
                <img src={course.sources} alt="" className="rounded-xl w-full h-50" />        
            </figure>
            <div className="p-4">
                <h3 className="text-lg font-bold">{course.name}</h3>
                <p className="text-gray-500 text-sm">{course.desc}</p>

                {/* <!-- Instructor --> */}
                <div className="flex items-center mt-3">
                    <img src={course.avatar} className="w-8 h-8 rounded-full mr-2" alt="Instructor" />
                    <div>
                        <p className="text-sm font-semibold">{course.instructor}</p>
                        <p className="text-xs text-gray-500">{course.position}</p>
                    </div>
                </div>

                {/* <!-- Ratings & Price --> */}
                <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center text-yellow-500">
                        {/* <!-- Stars --> */}
                        <div className="rating rating-md rating-half">
                            <input type="radio" name="rating-1" className="rating-hidden" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="0.5 star" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="1 star" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="1.5 star"/>
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="2 star" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="2.5 star" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="3 star" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="3.5 star" checked="checked" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="4 star" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="4.5 star" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="5 star" />
                        </div>

                        <span className="text-gray-500 text-sm ml-1">3.5 (86)</span>
                    </div>
                    <span className="text-green-500 font-bold text-lg">{course.price}</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cards