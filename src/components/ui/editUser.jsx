import React, { useEffect, useState } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import TextField from "../common/form/textField"
import SelectField from "../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import api from "../../api"
import { validator } from "../../utils/validator"

const ChangeUser = () => {
    const location = useLocation()
    const history = useHistory()
    const { user } = location.state
    const [qualities, setQualities] = useState([])
    const [professions, setProfessions] = useState({})
    const [errors, setErrors] = useState({})
    const [qualitiesList, setQualitiesList] = useState([])
    console.log(user.profession.name)
    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        profession: "",
        sex: user.sex,
        qualities: ""
    })

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))
        api.qualities.fetchAll().then((data) => setQualities(data))
    }, [])
    const handleChange = (target) => {
        setData((prevstate) => ({
            ...prevstate,
            [target.name]: target.value
        }))
    }
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Обязательно введите ваше имя"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введё не корректно"
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (isValid) {
            console.log(data)
            api.users.update(user._id, data)
            history.push(`/users/${user._id}`)
        }
    }
    return (
        <>
            <TextField
                label={"Имя"}
                name={"name"}
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label={"Электронная почта"}
                name={"email"}
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <SelectField
                label={"Выберите свою профессию"}
                name={"profession"}
                value={data.profession}
                onChange={handleChange}
                defaultOption={"Выберите..."}
                options={professions}
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
                defaultFalue={data.qualities}
                name="qualities"
                label={"Выберите ваши качества"}
            />
            <button onClick={handleSubmit}>Update</button>
        </>
    )
}

export default ChangeUser
