import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import "./LoginFormField.scss";

function LoginFormField(props) {
    const { name, label, icon, placeholder, errors, register } = props;
    const { enqueueSnackbar } = useSnackbar();
    return (
        <div className="login-form-field">
            <label htmlFor={label}>{label}</label>
            <div className="login-form-field__wrapper">
                {icon}
                <input {...register(name)} id={label} name={name} placeholder={placeholder} type={name} />
            </div>
            <span className="login-form-field__error">{errors[name]?.message}</span>
            {errors[name]
                ? enqueueSnackbar(`  ${errors[name]?.message}`, {
                      variant: "error",
                      autoHideDuration: 2000,
                      preventDuplicate: true,
                  })
                : null}
        </div>
    );
}

LoginFormField.propsTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.object,
    placeholder: PropTypes.string,
    register: PropTypes.object,
};

export default LoginFormField;
