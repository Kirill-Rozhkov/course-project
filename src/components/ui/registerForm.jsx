import React, { useEffect, useState } from "react"
import TextField from "../common/form/textField"
import { validator } from "../../utils/validator"
import api from "../../api"
import SelectField from "../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import CheckBoxField from "../common/form/checkBoxField"

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    })
    const [qualities, setQualities] = useState({})
    const [professions, setProfessions] = useState([])
    const [errors, setErrors] = useState({})
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))
        api.qualities.fetchAll().then((data) => setQualities(data))
    }, [])
    const handleChange = (target) => {
        console.log(target)
        console.log({ [target.name]: target.value })
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
        console.log(data)
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введё не корректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        licence: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label={"Электронная почта"}
                name={"email"}
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label={"Пароль"}
                type={"password"}
                name={"password"}
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                label={"Выберите свою профессию"}
                defaultOption={"Choose..."}
                name="professions"
                options={professions}
                onChange={handleChange}
                value={data.profession}
                error={errors.profession}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                name={"sex"}
                onChange={handleChange}
                label={"Выберите ваш пол"}
            />
            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                defaultValue={data.qualities}
                name="qualities"
                label={"Выберите ваши качества"}
            />
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name={"licence"}
                error={errors.licence}
            >
                Подтвердить <a>лицензионное соглашение</a>
            </CheckBoxField>
            <button
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    )
}

export default RegisterForm
