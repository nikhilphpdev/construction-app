import React, { useContext } from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { useForm } from "react-hook-form";
import TImag from "../../assets/images/hero2.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/Auth";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/authenticate", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status == 422) {
        toast.error(result.message);
      } else if (result.status == 401) {
        toast.error(result.message);
      } else {
        const userInfo = {
          id: result.id,
          token: result.token,
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        login(userInfo);
        // toast.success("Login successful");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="section-10">
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6">
                <div className="card-img-top ">
                  <img src={TImag} className="w-100" alt="" />
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="login-form  ">
                  <div className="card border-0 shadow ">
                    <div className="card-body p-4">
                      <h4 className="text-center">Login Form</h4>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Email
                          </label>
                          <input
                            {...register("email", {
                              required: "This filed is required",
                            })}
                            type="text"
                            placeholder="Email"
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                          />
                          {errors.email && (
                            <p className="invalid-feedback">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Password
                          </label>
                          <input
                            {...register("password", {
                              required: "This filed is required",
                            })}
                            type="password"
                            placeholder="Password"
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                          />
                          {errors.password && (
                            <p className="invalid-feedback">
                              {errors.password?.message}
                            </p>
                          )}
                        </div>
                        <div className="mb-2 text-center mt-4">
                          <button type="submit" className="btn btn-primary ">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
