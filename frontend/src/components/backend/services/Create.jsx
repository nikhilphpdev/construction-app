import React, { useEffect, useState } from "react";
import { Header } from "../../common/Header";
import { Footer } from "../../common/Footer";
import { Sidebar } from "../../common/Sidebar";
import { Link } from "react-router-dom";

export const Create = () => {
  return (
    <>
      <Header />

      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              {/* Sidebard */}
              <Sidebar />
            </div>
            <div className="col-md-9 dashboard">
              {/* Dashboard */}
              <div className="card shadow border-0">
                <div className="card-body ">
                  <div className="d-flex justify-content-between mb-4">
                    <h4 className="h5">Create Services</h4>
                    <Link
                      to="/admin/services/"
                      className="btn btn-outline-info"
                    >
                      Back
                    </Link>
                  </div>

                  <form>
                    <div className="mb-3 row">
                      <label htmlFor="" className="col-sm-2 col-form-label">
                        Tilte
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="tilte"
                        ></input>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="col-sm-2 col-form-label">
                        Slug
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="slug"
                        ></input>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="col-sm-2 col-form-label">
                        Short Desc
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          class="form-control "
                          id=""
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="col-sm-2 col-form-label">
                        Content
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          class="form-control "
                          id=""
                          required
                        ></textarea>
                      </div>
                    </div>
                      <div className="mb-3 row">
                      <label htmlFor="" className="col-sm-2 col-form-label">
                        Image
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                        ></input>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Status</label>

                      <div className="col-sm-10 d-flex gap-4 align-items-center">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="status"
                            id="active"
                            value="1"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="active">
                            Active
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="status"
                            id="inactive"
                            value="0"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inactive"
                          >
                            Inactive
                          </label>
                        </div>
                      </div>

                    </div>
                    <div className="mb-2  mt-4">
                          <button type="submit" className="btn btn-primary ">
                            Submit
                          </button>
                          </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
