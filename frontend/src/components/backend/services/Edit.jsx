import React, {useRef, useState, useMemo,useEffect} from 'react';
import { Header } from '../../common/Header';
import { Sidebar } from '../../common/Sidebar';
import { Footer } from '../../common/Footer';
import { useForm } from "react-hook-form";
import { apiUrl, token ,fileUrl} from "../../common/http";
import { Link ,useNavigate, useParams } from 'react-router-dom';
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";

export const Edit = ({placeholder}) => {
  const editor = useRef(null);
  const [content, setContent] = useState(" ");
    const [service, setService] = useState(" ");
  const [isDisable, setisDisable] = useState(false);
  const [imageId, setimageId] = useState(null);
  const params = useParams();
  const config = useMemo(
    () => ({
      readonly: false, 
      placeholder: placeholder || "",
    }),

  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: async () =>{
     const res = await fetch(apiUrl + `services/` + params.id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      
      });
      const result = await res.json();
      console.log(result);
     setContent(result.data.content);
      setService(result.data);
       if (result.status) {
            return {
                title: result.data.title,
                slug: result.data.slug,
                short_desc: result.data.short_desc,
             status: String(result.data.status)
            };
            }

return {};
    }
    
  })
  const navigate = useNavigate();
    const onSubmit = async (data) => {
      const newData = { ...data, content: content, imageId: imageId };
      const res = await fetch(apiUrl + `services/` + params.id,{
        method: "put",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(newData),
      });
      const result = await res.json();
      console.log(result);
      if (result.status == true) {
        toast.success(result.message);
  
        navigate("/admin/services");
      }else {

  if (result.errors) {
    const firstError = Object.values(result.errors)[0][0];
    toast.error(firstError);
  } else {
    toast.error(result.message || "Something went wrong");
  }

}
    };
      const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("image", file);
    
        // temp-image file upload
        const res = await fetch(apiUrl + "temp-images", {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token()}`,
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.status == false) {
              toast.error(result.errors.image[0]);
            } else {
              setimageId(result.data.id);
            }
          });
      };
      useEffect(() => {
       
      },[]);
  return (
      <>
      <Header/>

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
                    <h4 className="h5">Service / Edit</h4>
                    <Link
                      to="/admin/services/"
                      className="btn btn-outline-info"
                    >
                      Back
                    </Link>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 row">
                      <label htmlFor="" className="col-sm-2 col-form-label">
                        Tilte
                      </label>
                      <div className="col-sm-10">
                        <input 
                          {...register("title", {
                            required: "this filed is requeired",
                          })}
                          type="text"
                          className={`form-control ${
                            errors.title ? "is-invalid" : ""
                          }`}
                          id="tilte"
                        ></input>
                        {errors.title && (
                          <p className="invalid-feedback">
                            {errors.title?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="col-sm-2 col-form-label">
                        Slug
                      </label>
                      <div className="col-sm-10">
                        <input
                          {...register("slug", {
                            required: "this filed is requeired",
                          })}
                          type="text"
                          className={`form-control ${
                            errors.slug ? "is-invalid" : ""
                          }`}
                          id="slug"
                        ></input>
                        {errors.slug && (
                          <p className="invalid-feedback">
                            {errors.slug?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="col-sm-2 col-form-label">
                        Short Desc
                      </label>
                      <div className="col-sm-10">
                        <textarea  
                          {...register("short_desc", {
                            required: "this filed is requeired",
                          })}
                          className={`form-control ${
                            errors.short_desc ? "is-invalid" : ""
                          }`}
                          id=""
                        >
                          {" "}
                        </textarea>
                        {errors.short_desc && (
                          <p className="invalid-feedback">
                            {errors.short_desc?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="col-sm-2 col-form-label">
                        Content
                      </label>
                      <div className="col-sm-10">
                        <JoditEditor
                          ref={editor}
                          value={content}
                          config={config}
                          tabIndex={1} // tabIndex of textarea
                          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                          onChange={(newContent) => {}}
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Image</label>

                      <div className="col-sm-10">
                        <input
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          className="form-control"
                          onChange={handleFile}
                        ></input>
                        
                      </div>
                      <div className='pb-3'>
                        {
                            service.image && <img className='small_imges' src={fileUrl+'uploads/services/small/'+service.image} />
                        }
                      </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Status</label>

                        <div className="col-sm-10 d-flex gap-4 align-items-center">

                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="active"
                                value="1"
                                {...register("status")}
                            />
                            <label className="form-check-label" htmlFor="active">
                                Active
                            </label>
                            </div>

                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inactive"
                                value="0"
                                {...register("status")}
                            />
                            <label className="form-check-label" htmlFor="inactive">
                                Inactive
                            </label>
                            </div>

                        </div>
                        </div>

                    <div className="mb-2  mt-4">
                      <button
                        disabled={isDisable}
                        type="submit"
                        className="btn btn-primary "
                      >
                        Update
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
  )
}
