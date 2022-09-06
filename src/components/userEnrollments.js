/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";

const UserEnrollments = ({ userId, enrollments }) => {
  const ENDPOINT = `http://localhost:3000/api/v1/enrollments/${userId}`;
  const [coursesByUser, setCourseByUser] = useState({});

  // fetching books by user from API
  useEffect(() => {
    const fetchCourseByUser = async () => {
      await fetch(ENDPOINT)
        .then((res) => res.json())
        .then((response) => {
          setCourseByUser(response.data);
        });
    };
    fetchCourseByUser();
  }, []);

  return (
    <>
      <hr className="my-4" />
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Courses Enrolled
        </label>
        <div className="col-sm-10">
          {coursesByUser.length > 0 &&
            enrollments?.map((enrollment) => {
              const course = coursesByUser?.find(
                (element) => element.id == enrollment.course_id
              );
              return (
                <div key={enrollment.course_id} className="col-sm-12">
                  <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{course.attributes?.name}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          {coursesByUser.length == 0 && (
            <div className="col-sm-12">
              <div className="list-group-item list-group-item-action list-group-item-warning flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">This user has no courses enrolled</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserEnrollments;
