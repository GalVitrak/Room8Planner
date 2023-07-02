import { httpsCallable } from "@firebase/functions";
import { useForm } from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import { functions } from "../../../firebase-config";
import "./Register.css";
import notifyService from "../../../Services/NotifyService";
import { useNavigate } from "react-router-dom";

function Register(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<UserModel>();
  const navigate = useNavigate();

  async function send(user: UserModel) {
    try {
      const addUser = httpsCallable(functions, "addUser");
      await addUser({ user });
      navigate("/home");
      notifyService.success("Registered successfully");
    } catch (err: any) {
      notifyService.error(err);
    }
  }

  return (
    <div className="Register Center Box">
      <form onSubmit={handleSubmit(send)}>
        <label>First name: </label>
        <input
          type="text"
          {...register("firstName", UserModel.fNameValidation)}
        />
        <span className="Error">{formState.errors.firstName?.message}</span>

        <label>Last name: </label>
        <input
          type="text"
          {...register("lastName", UserModel.lNameValidation)}
        />
        <span className="Error">{formState.errors.lastName?.message}</span>

        <label>Email: </label>
        <input type="email" {...register("email", UserModel.emailValidation)} />
        <span className="Error">{formState.errors.email?.message}</span>

        <label>Password: </label>
        <input
          type="password"
          {...register("password", UserModel.passwordValidation)}
        />
        <span className="Error">{formState.errors.password?.message}</span>

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
