class UserModel {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;

  public static fNameValidation = {
    required: { value: true, message: "Missing First Name" },
    minLength: { value: 2, message: "Name Too Short" },
    maxLength: { value: 15, message: "Name Too Long" },
  };

  public static lNameValidation = {
    required: { value: true, message: "Missing Last Name" },
    minLength: { value: 2, message: "Name Too Short" },
    maxLength: { value: 20, message: "Name Too Long" },
  };

  public static emailValidation = {
    required: { value: true, message: "Missing Email" },
    minLength: { value: 4, message: "Username Too Short" },
    maxLength: { value: 50, message: "Username Too Long" },
  };

  public static passwordValidation = {
    required: { value: true, message: "Missing Password" },
    minLength: { value: 8, message: "Password Too Short" },
    maxLength: { value: 15, message: "Password Too Long" },
  };
}

export default UserModel;
