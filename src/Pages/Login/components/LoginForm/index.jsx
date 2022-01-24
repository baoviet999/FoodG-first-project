// material ui
import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import LoginFormField from "./LoginFormField";
import "./styles.scss";

const schema = yup.object().shape({
    email: yup
        .string()
        .required("This field is required")
        .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "This is not valid email format"),
    password: yup
        .string()
        .required("This field is required")
        .matches(
            /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
            "Password should be 8 chars minimum and at least 1 number"
        ),
});

function LoginForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const { enqueueSnackbar } = useSnackbar();
    
    const onHandleSubmit = (values) => {
        reset({
            email: "",
            password: "",
        });
        const name = values.email
        enqueueSnackbar(`Hi ${name}
          This feature is current close! please try to login with facebook or google`, {
            variant: "success",
            autoHideDuration: 4000,
        });
    };

    return (
        <form onSubmit={handleSubmit(onHandleSubmit)} className="form-login">
            <LoginFormField
                icon={<MailOutlineIcon />}
                name="email"
                label="Email address"
                placeholder="Your email"
                register={register}
                errors={errors}
            />
            <LoginFormField
                icon={<LockOutlinedIcon />}
                name="password"
                label="Password"
                placeholder="Your password"
                register={register}
                errors={errors}
            />
            <button type="submit" className="form-login__btn">
                    Log in
            </button>
        </form>
    );
}

export default LoginForm;
