/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";

const UserReadingtimes = ({ userId, readingtimes }) => {
  const ENDPOINT = `http://localhost:3000/api/v1/readingtimes/${userId}`;
  const [booksByUser, setBooksByUser] = useState({});

  // fetching books by user from API
  useEffect(() => {
    const fetchBooksByUser = async () => {
      await fetch(ENDPOINT)
        .then((res) => res.json())
        .then((response) => {
          setBooksByUser(response.data);
        });
    };
    fetchBooksByUser();
  }, []);

  return (
    <>
      <hr className="my-4" />
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Readingtime
        </label>
        <div className="col-sm-10">
          {booksByUser.length > 0 &&
            readingtimes?.map((readingtime) => {
              const book = booksByUser?.find(
                (element) => element.id == readingtime.book_id
              );
              return (
                <div key={readingtime.book_id} className="col-sm-12">
                  <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{book.attributes?.title}</h5>
                      <small className="text-muted">{readingtime.time}</small>
                    </div>
                    <small className="text-muted">
                      {book.attributes?.content}
                    </small>
                  </div>
                </div>
              );
            })}
          {booksByUser.length == 0 && (
            <div className="col-sm-12">
              <div className="list-group-item list-group-item-action list-group-item-warning flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">This user has no reading time</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <hr className="my-4" />
    </>
  );
};

export default UserReadingtimes;
