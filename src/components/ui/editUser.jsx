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

    const qualitiesArr = []
    user.qualities.map((qualitie) =>
        qualitiesArr.push({
            label: qualitie.name,
            value: qualitie._id
        })
    )

    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        profession: user.profession._id,
        sex: user.sex,
        qualities: qualitiesArr
    })

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label }
            }
        }
    }

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }))
            setProfessions(professionsList)
        })
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

    const [isValid, setIsValid] = useState(false)
    window.setTimeout(() => {
        setIsValid(Object.keys(errors).length === 0)
    }, 2500)
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (isValid) {
            const newQualities = []
            for (let i = 0; i < data.qualities.length; i++) {
                const qualitie = Object.values(qualities).filter(
                    (qualitie) => qualitie._id === data.qualities[i].value
                )
                newQualities.push(qualitie[0])
            }

            const changedData = {
                ...data,
                profession: getProfessionById(data.profession),
                qualities: newQualities
            }
            console.log(changedData)
            api.users.update(user._id, changedData)
            history.push(`/users/${user._id}`)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
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
                defaultValue={data.qualities}
                name={"qualities"}
                label={"Выберите ваши качества"}
            />
            <button
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
            >
                Update
            </button>
        </form>
    )
}

export default ChangeUser
